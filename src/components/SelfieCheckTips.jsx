// src/components/SelfieCheckTips.jsx
import React from 'react';

function SelfieCheckTips() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-800 text-white">
      <div className="w-full max-w-md p-4 sm:p-6 md:p-8 bg-gray-900 rounded-lg shadow-lg border-2 border-gray-700 m-4 sm:m-6 md:m-8 flex flex-col">
        {/* Title and Instructions */}
        <h2 className="text-lg md:text-2xl font-semibold text-center mb-4">
          How to pass the selfie check
        </h2>
        <p className="text-center mb-6 text-sm md:text-base">
          We are always ready to help! Here are some solutions to pass the liveness check with ease.
        </p>

        {/* Tips Section */}
        <div className="space-y-3">
          {/* Good Lighting Tip */}
          <div>
            <h3 className="font-medium mb-0">Good lighting</h3>
            <div className="flex justify-center items-center bg-gray-900 p-4 rounded-lg gap-x-4">
              <img src="./selfie.jpg" alt="Good Lighting" style={{ maxWidth: '53%', maxHeight: '150px',borderRadius:'10px' }} />
              <img src="./selfie.jpg" alt="Bad Lighting" style={{ maxWidth: '52%', maxHeight: '150px',borderRadius:'10px' }} />
            </div>
            <p className="text-gray-400 text-sm mt-0">
              Help us to recognize your data better; pass the check in a well-lit room.
            </p>
          </div>

          {/* Correct Facial Positioning Tip */}
          <div>
            <h3 className="font-medium mb-0">Correct facial positioning</h3>
            <div className="flex justify-center items-center bg-gray-900 p-4 rounded-lg gap-x-4">
              <img src="./selfie.jpg" alt="Correct Position" style={{ maxWidth: '53%', maxHeight: '150px' ,borderRadius:'10px'}} />
              <img src="./selfie.jpg" alt="Incorrect Position" style={{  maxWidth: '52%', maxHeight: '150px' ,borderRadius:'10px'}} />
            </div>
            <p className="text-gray-400 text-sm mt-0">
              Don’t be too close or too far from the camera. Position your face so it clearly fits inside the frame.
            </p>
          </div>

          {/* Natural Look Tip */}
          <div>
            <h3 className="font-medium mb-0">Natural look</h3>
            <div className="flex justify-center items-center bg-gray-900 p-4 rounded-lg gap-x-4">
              <img src="./selfie.jpg" alt="Natural Look" style={{ maxWidth: '53%', maxHeight: '150px' ,borderRadius:'10px'}} />
              <img src="./selfie.jpg" alt="Unnatural Look" style={{ maxWidth: '52%', maxHeight: '150px',borderRadius:'10px'}} />
            </div>
            <p className="text-gray-400 text-sm mt-0">
              Pass the check without changing your appearance. Don’t wear masks, glasses, or hats.
            </p>
          </div>
        </div>

        {/* Bottom Button */}
        <div className="flex flex-col items-center mt-8">
          <button className="w-full bg-blue-600 hover:bg-blue-700 py-2 rounded-md text-base font-medium">
            Continue
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

export default SelfieCheckTips;
