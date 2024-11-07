// src/components/CameraPreparation.jsx
import React from 'react';
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';

function CameraPreparation() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-800 text-white">
      <div className="w-full max-w-md min-h-screen sm:min-h-[90vh] p-4 sm:p-6 md:p-8 bg-gray-900 rounded-lg shadow-lg border-2 border-gray-700 m-4 sm:m-6 md:m-8 flex flex-col justify-between">
        
        {/* Header */}
        <h2 className="text-lg md:text-2xl font-semibold text-center mb-4">
          Get your camera ready
        </h2>
        
        {/* Instructional Image */}
        <div className="flex justify-center mb-6">
        <img src="./selfie.jpg" alt="Unnatural Look" style={{ maxWidth: '100%', maxHeight: '260px',borderRadius:'10px'}} />
        </div>
        
        {/* Tips Section */}
        <div className="mb-8">
          <h3 className="text-sm md:text-base text-left mb-4 font-medium">Tips</h3>
          <ul className="space-y-4 text-gray-300">
            <li className="flex items-center space-x-2">
              <FaCheckCircle className="text-green-500" />
              <span>Find a well-lit place</span>
            </li>
            <li className="flex items-center space-x-2">
              <FaCheckCircle className="text-green-500" />
              <span>Ensure your face is within the frame</span>
            </li>
            <li className="flex items-center space-x-2">
              <FaTimesCircle className="text-red-500" />
              <span>Don’t wear hats, glasses, or masks</span>
            </li>
          </ul>
          <div className="text-center mt-4">
            <a href="#" className="text-blue-500 text-sm">View our guidelines</a>
          </div>
        </div>

        {/* Bottom Buttons */}
        <div className="flex flex-col items-center space-y-2">
          <button className="w-full bg-blue-600 hover:bg-blue-700 py-2 rounded-md text-base font-medium">
            Continue
          </button>
          <button className="w-full bg-gray-600 hover:bg-gray-700 py-2 rounded-md text-base font-medium">
            Continue on phone
          </button>
          <div className="flex items-center space-x-2 text-gray-400 text-xs mt-2">
            <span>Powered by</span>
            <img src="/logo1.png" alt="sumsub logo" className="h-4" />
            <span>Sumsub</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CameraPreparation;
