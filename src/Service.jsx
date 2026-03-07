import React from 'react';
import { Link } from 'react-router-dom';

function Service() {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Our Service</h1>
      
      <p className="text-gray-600 mb-4">
        Welcome to our cloud storage service, where you have complete control over your data. We offer a fast, reliable, and secure platform for storing and managing your files.
      </p>
      
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Key Features</h2>
      <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
        <li><strong>User Control:</strong> You decide what happens to your data. View, organize, and manage your files effortlessly.</li>
        <li><strong>Secure Storage:</strong> Your files are protected with advanced security measures to ensure privacy and safety.</li>
        <li><strong>Fast and Reliable:</strong> Experience quick uploads, downloads, and access to your data from anywhere.</li>
        <li><strong>Easy Management:</strong> Create directories, rename files, and delete items with a simple interface.</li>
        <li><strong>Scalable:</strong> Grow your storage as needed without compromising performance.</li>
      </ul>
      
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Commitment</h2>
      <p className="text-gray-600 mb-4">
        We are dedicated to providing a service that puts you in control. Your data is yours, and we ensure it's handled with the utmost care and security. Whether you're storing personal files, work documents, or media, our platform is designed to be intuitive and dependable.
      </p>
      
      <p className="text-gray-600 mb-4">
        Join thousands of users who trust us with their data. Start uploading and organizing your files today!
      </p>
      
      <div className="mt-8">
        <Link to="/" className="text-blue-600 hover:text-blue-800 font-medium">
          ← Back to Home
        </Link>
      </div>
    </div>
  );
}

export default Service;