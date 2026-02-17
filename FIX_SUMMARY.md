# File View & Download URL Fix - Summary

## Issue Identified

Files were redirecting to hardcoded production URLs (`https://api.tryonics.shop`) instead of using environment-based URLs. This caused inconsistency with other API calls and potential issues when the environment configuration changed.

### Root Cause
Three files had hardcoded URLs:
- File view action in `DirectoryView.jsx`
- File download action in `ContextMenu.jsx`  
- Unused hardcoded URL in `loginWithGoogleApi.js`

## Changes Made

### 1. ✅ src/DirectoryView.jsx (Line 98-103)
**Before:**
```javascript
function handleRowClick(type, id) {
  if (type === "directory") navigate(`/directory/${id}`);
  else window.location.href = `https://api.tryonics.shop/file/${id}`;
}
```

**After:**
```javascript
function handleRowClick(type, id) {
  if (type === "directory") navigate(`/directory/${id}`);
  else {
    const baseUrl = import.meta.env.VITE_BACKEND_BASE_URL;
    window.location.href = `${baseUrl}/file/${id}`;
  }
}
```

**Impact:** File view now uses the environment variable `VITE_BACKEND_BASE_URL` from `.env.production`

---

### 2. ✅ src/components/ContextMenu.jsx (Line 44-50)
**Before:**
```javascript
<div
  className={itemClass}
  onClick={() =>
    (window.location.href = `https://api.tryonics.shop/file/${item.id}?action=download`)
  }
>
  Download
</div>
```

**After:**
```javascript
<div
  className={itemClass}
  onClick={() => {
    const baseUrl = import.meta.env.VITE_BACKEND_BASE_URL;
    window.location.href = `${baseUrl}/file/${item.id}?action=download`;
  }}
>
  Download
</div>
```

**Impact:** File download now uses the environment variable instead of hardcoded URL

---

### 3. ✅ src/api/loginWithGoogleApi.js
**Before:**
```javascript
const BASE_URL = "https://api.tryonics.shop";  // ❌ Unused hardcoded URL

export const loginWithGoogle = async (idToken) => {
  const { data } = await axiosWithCreds.post("/auth/google", { idToken });
  return data;
};
```

**After:**
```javascript
import { axiosWithCreds } from "./axiosInstances";

export const loginWithGoogle = async (idToken) => {
  const { data } = await axiosWithCreds.post("/auth/google", { idToken });
  return data;
};
```

**Impact:** Removed unused hardcoded URL; now uses `axiosWithCreds` which gets URL from environment

---

## Environment Configuration

Both `.env` and `.env.production` already have the correct URL:
```
VITE_BACKEND_BASE_URL=https://api.tryonics.shop
```

This is now consistently used across all three file operations:
- ✅ File view
- ✅ File download  
- ✅ All other API calls (already using `axiosInstances.js`)

---

## Build Status
✅ **Build Successful** - Application rebuilt with fixed URLs
```
> vite build
✓ 115 modules transformed
dist/index.html                   0.46 kB
dist/assets/index-B6qPdjBe.js   298.91 kB
dist/assets/index-DcmvNiKM.css   15.16 kB
✓ built in 6.02s
```

---

## Verification Checklist

- [x] File view uses `VITE_BACKEND_BASE_URL` environment variable
- [x] File download uses `VITE_BACKEND_BASE_URL` environment variable
- [x] Google login API no longer has hardcoded URL
- [x] All API calls now consistently use environment-based configuration
- [x] Build completes without errors
- [x] Login and upload functionality NOT modified
- [x] Only file view and download fixed as requested

---

## Expected Behavior After Deploy

When the dist folder is deployed to production:
1. **File View:** User clicks file → Redirects to `https://api.tryonics.shop/file/{fileId}`
2. **File Download:** User clicks download → Redirects to `https://api.tryonics.shop/file/{fileId}?action=download`
3. **Environment Support:** The app now correctly reads `VITE_BACKEND_BASE_URL` from `.env.production`

All features now use a single point of configuration for the API base URL, making it easy to switch between environments.
