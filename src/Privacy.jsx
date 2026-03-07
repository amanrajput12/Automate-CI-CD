import React from 'react';
import { Link } from 'react-router-dom';

function PrivacyPolicy() {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Privacy Policy</h1>
      
      <p className="text-gray-600 mb-4">
        At our cloud storage service, your privacy is our top priority. We are committed to protecting your data and ensuring that you have full control over it.
      </p>
      
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Data Handling</h2>
      <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
        <li>We do NOT access, sell, or share your data with any third parties.</li>
        <li>You have the ability to view, permanently delete, or download your data at any time.</li>
        <li>Your data is stored using random IDs to ensure anonymity and prevent any company benefit from your information.</li>
        <li>We prioritize user privacy and provide secure cloud storage to keep your files safe.</li>
      </ul>
      
      <p className="text-gray-600 mb-4">
        If you have any questions about our privacy practices, please contact us.
      </p>
      
      <div className="mt-8">
        <Link to="/" className="text-blue-600 hover:text-blue-800 font-medium">
          ← Back to Home
        </Link>
      </div>
    </div>
  );
}

export default PrivacyPolicy;