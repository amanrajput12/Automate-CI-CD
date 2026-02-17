import React from 'react'

const Aman = () => {
  const handlechange = async (e) => {
    console.log(e.target.files[0]);

const PRESIGNED_URL = "https://nodejs-notes-aws-s3-crud.s3.ap-south-1.amazonaws.com/image4.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAZ3IRA4RNXBPWBYV3%2F20260207%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20260207T150957Z&X-Amz-Expires=3600&X-Amz-Signature=482814760cee8e7ca829e289356b1673e51c84061f134dbe8a71e7bc1a8c8a31&X-Amz-SignedHeaders=content-type%3Bhost&x-amz-checksum-crc32=AAAAAA%3D%3D&x-amz-sdk-checksum-algorithm=CRC32&x-id=PutObject";
await fetch(PRESIGNED_URL, {
  method: "PUT",
  headers: {
    "Content-Type": "image/png", // ✅ REQUIRED
  },
  body: e.target.files[0],
});

    console.log("File uploaded successfully");

  } 
  return (
    <div>

      <input className='p-4 mt-10 ml-20 border-1' type="file" onChange={handlechange}/>
    </div>
  )
}

export default Aman