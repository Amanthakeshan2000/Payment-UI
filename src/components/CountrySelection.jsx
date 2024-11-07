// src/components/CountrySelection.jsx
import React from 'react';
import Flag from 'react-world-flags';
import { FaGlobe } from 'react-icons/fa';

function CountrySelection() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-800 text-white">
      <div className="w-full max-w-md min-h-screen sm:min-h-[90vh] p-4 sm:p-6 md:p-8 bg-gray-900 rounded-lg shadow-lg border-2 border-gray-700 m-4 sm:m-6 md:m-8 flex flex-col justify-between">
        
        {/* Top Aligned Text */}
        <div>
          <h2 className="text-lg md:text-2xl font-semibold text-center mb-4">
            Confirm your country of residence
          </h2>
          <p className="text-center mb-6 mt-4 text-sm md:text-base">
            Select Your Country of Residence to learn how your personal data will be processed.
          </p>
          <div className="flex flex-col space-y-4">
            {/* Option for "All countries except USA" with globe icon */}
            <label className="flex items-center justify-between border border-gray-600 rounded-lg p-3 hover:bg-gray-700 cursor-pointer">
              <span className="flex items-center">
                <FaGlobe className="text-lg mr-3" /> All countries except USA
              </span>
              <input
                type="radio"
                name="country"
                className="appearance-none h-4 w-4 border border-gray-400 rounded-full checked:bg-blue-600 checked:border-transparent cursor-pointer"
              />
            </label>

            {/* Option for "United States of America" with US flag */}
            <label className="flex items-center justify-between border border-gray-600 rounded-lg p-3 hover:bg-gray-700 cursor-pointer">
              <span className="flex items-center">
                <Flag code="us" className="h-5 w-5 mr-2" /> United States of America
              </span>
              <input
                type="radio"
                name="country"
                className="appearance-none h-4 w-4 border border-gray-400 rounded-full checked:bg-blue-600 checked:border-transparent cursor-pointer"
              />
            </label>
          </div>
          
          {/* Link for More Information */}
          <div className="mt-4 text-center">
            <a
              href="#"
              className="text-blue-500 hover:text-blue-400 underline text-sm"
            >
              Learn more about how your data will be processed
            </a>
          </div>
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

export default CountrySelection;
