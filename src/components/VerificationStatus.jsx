// src/components/VerificationStatus.jsx
import React from 'react';
import { FaCircleNotch } from 'react-icons/fa'; // Importing an icon for the loading spinner

function VerificationStatus() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-800 text-white">
      <div className="w-full max-w-md min-h-screen sm:min-h-[90vh] p-4 sm:p-6 md:p-8 bg-gray-900 rounded-lg shadow-lg border-2 border-gray-700 m-4 sm:m-6 md:m-8 flex flex-col justify-between">
        {/* Top Aligned Instructions */}
        <div className="flex flex-col items-center">
          
        </div>

        {/* Loading Spinner and Status */}
        <div className="flex flex-col items-center space-y-4">
          <FaCircleNotch className="text-blue-500 animate-spin text-7xl mb-4" />
          <h2 className="text-lg md:text-2xl font-semibold text-center mb-4">
            We are processing your data
          </h2>
          
          <p className="text-center mb-6 text-sm md:text-base">
            Your verification status will appear here.
          </p>
          
          <div className="flex flex-col items-start space-y-4">
  <div className="flex items-center space-x-3">
    <FaCircleNotch className="text-blue-500 animate-spin text-lg" />
    <p className="text-base font-medium">Identity document</p>
  </div>
  <div className="flex items-center space-x-3">
    <FaCircleNotch className="text-blue-500 animate-spin text-lg" />
    <p className="text-base font-medium">Liveness check</p>
  </div>
</div>

        </div>

        {/* Bottom Message */}
        <div className="flex flex-col items-center text-gray-400 text-xs mt-8">
          <p>Powered by Sumsub</p>
        </div>
      </div>
    </div>
  );
}

export default VerificationStatus;
