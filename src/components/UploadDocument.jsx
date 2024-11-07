// src/components/UploadDocument.jsx
import React from 'react';
import { FaFileAlt, FaUpload } from 'react-icons/fa';
function UploadDocument() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-800 text-white">
      <div className="w-full max-w-md min-h-screen sm:min-h-[90vh] p-4 sm:p-6 md:p-8 bg-gray-900 rounded-lg shadow-lg border-2 border-gray-700 m-4 sm:m-6 md:m-8 flex flex-col justify-between">
      <div>
      <h2 className="text-lg md:text-2xl font-semibold text-center mb-4">
      Upload your document        
      </h2>
        <p className="text-center mb-6 mt-4 text-sm md:text-base">
        Make sure that all the information on the photo is visible and easy to read.        
        </p>

        <div className="flex flex-col space-y-6 mt-4">
        {/* Document Type Dropdown */}
        <div className="mb-6">
          <span className="text-gray-300 mb-1 block">Document Type*</span>
          <div className="flex items-center bg-gray-700 py-2 px-3 rounded-md">
            <FaFileAlt className="text-gray-400 mr-2" />
            <span>Driver's License</span>
            <FaUpload className="ml-auto text-gray-400 cursor-pointer" />
          </div>
        </div>

        {/* File Upload Section */}
        <div className="mb-6">
         
          <label className="flex flex-col items-center justify-center w-full bg-gray-700 py-4 px-3 rounded-md cursor-pointer">
            <FaUpload className="text-gray-400 text-2xl mb-2" />
            <span className="text-blue-500 underline">Choose file or drag and drop</span>
            <p className="text-xs text-gray-500 mt-2">JPG, PNG, HEIC or PDF (max 50 MB)</p>
            <span className="text-gray-300 mb-1 block">Front Side</span>


            <input type="file" className="hidden" />
          </label>
        </div>
        </div>

        </div>

        <div className="flex flex-col items-center space-y-2">
          <button className="w-full bg-blue-600 hover:bg-blue-700 py-2 rounded-md text-base font-medium">
            Continue on this device
          </button>
          <button className="w-full bg-gray-600 hover:bg-gray-700 py-2 rounded-md text-base font-medium">
            Continue on phone
          </button>
          {/* Powered by sumsub */}
          <div className="flex items-center space-x-2 text-gray-400 text-xs mt-2">
            <span>Powered by</span>
            <img 
              src="/logo1.png" 
              alt="sumsub logo" 
              className="h-4" 
            />
            <span>Sumsub</span>
          </div>
          </div>
      </div>
    </div>
  );
}

export default UploadDocument;


