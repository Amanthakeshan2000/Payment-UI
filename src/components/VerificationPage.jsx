// src/components/VerificationPage.jsx
import React from 'react';

function VerificationPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-800 text-white">
      <div className="w-full max-w-md min-h-screen sm:min-h-[90vh] p-4 sm:p-6 md:p-8 bg-gray-900 rounded-lg shadow-lg border-2 border-gray-700 m-4 sm:m-6 md:m-8 flex flex-col justify-between">
        {/* Top Aligned Text and Logo */}
        <div className="flex flex-col items-center">
          <h2 className="text-lg md:text-2xl font-semibold text-center mb-4">
            Verification for Bitx 365 Dmcc
          </h2>
          
          {/* Logo */}
          <img 
            src="/logo1.png" 
            alt="Company Logo" 
            style={{ height: '50%', width: '50%' }} 
            className="mt-20 mb-10"
          />

          <p className="text-center mb-6 mt-4 text-sm md:text-base">
            You're about to submit sensitive data. If you received this link from a suspicious source, please close this page and notify us immediately.
          </p>
        </div>
        
       {/* Bottom Aligned Button */}
       <div className="flex flex-col items-center space-y-2">
          <button className="w-full bg-blue-600 hover:bg-blue-700 py-2 rounded-md text-base font-medium">
            Continue
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

export default VerificationPage;
