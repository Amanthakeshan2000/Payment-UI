// src/components/VerificationSteps.jsx
import React from 'react';
import { FaIdCard, FaRegUserCircle, FaBolt } from 'react-icons/fa'; // Importing icons

function VerificationSteps() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-800 text-white">
      <div className="w-full max-w-md min-h-screen sm:min-h-[90vh] p-4 sm:p-6 md:p-8 bg-gray-900 rounded-lg shadow-lg border-2 border-gray-700 m-4 sm:m-6 md:m-8 flex flex-col justify-between">
        
        {/* Top Aligned Text */}
        <div>
          <h2 className="text-lg md:text-2xl font-semibold text-center mb-4">
            Let's get you verified
          </h2>
          <p className="text-center mb-6 mt-4 text-sm md:text-base">
            Follow the simple steps below
          </p>

          {/* Steps with Icons */}
          <div className="flex flex-col space-y-6 mt-10">
            <div className="flex items-center space-x-4">
              <div className="bg-gray-700 p-3 rounded-full">
                <FaIdCard className="text-white text-2xl" />
              </div>
              <div>
              <p className="text-sm md:text-base text-gray-400">Step 1</p>

                <p className="text-sm md:text-base">Provide identity document</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="bg-gray-700 p-3 rounded-full">
                <FaRegUserCircle className="text-white text-2xl" />
              </div>
              <div>
              <p className="text-sm md:text-base text-gray-400">Step 2</p>

                <p className="text-sm md:text-base">Perform a liveness check</p>
              </div>
            </div>
          </div>

         
        </div>
        
        {/* Bottom Aligned Buttons */}
        <div className="flex flex-col space-y-3 mt-6">
           {/* Speed up your verification section */}
           <div className="flex items-center bg-gradient-to-r from-blue-950 to-purple-700 rounded-lg p-4 mt-6 space-x-4">
           <input 
              type="checkbox" 
              className="form-checkbox h-5 w-5 bg-white bg-opacity-20 rounded-md border-gray-400 text-yellow-500 focus:ring-0"
            />
            <FaBolt className="text-yellow-500 text-lg" />
            <div>
              <p className="text-md font-bold">Speed up your verifications</p>
              <p className="text-xs text-gray-300">Re-use securely stored data during verification</p>
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
    </div>
  );
}

export default VerificationSteps;
