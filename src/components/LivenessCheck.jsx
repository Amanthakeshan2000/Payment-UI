// src/components/LivenessCheck.jsx
import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaCamera } from 'react-icons/fa';

function LivenessCheck() {
  const videoRef = useRef(null);
  const [cameraPermission, setCameraPermission] = useState(null); // null initially
  const [faceDetected, setFaceDetected] = useState(false);

  useEffect(() => {
    async function setupCamera() {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          setCameraPermission(true); // Camera access granted
        }
      } catch (error) {
        console.error("Camera access denied:", error);
        setCameraPermission(false); // Camera access denied
      }
    }

    setupCamera();

    const faceDetectionTimeout = setTimeout(() => setFaceDetected(true), 2000);

    return () => {
      if (videoRef.current && videoRef.current.srcObject) {
        let stream = videoRef.current.srcObject;
        let tracks = stream.getTracks();
        tracks.forEach(track => track.stop());
      }
      clearTimeout(faceDetectionTimeout);
    };
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-800 text-white relative">
      <div className="w-full max-w-md min-h-screen sm:min-h-[90vh] p-4 sm:p-6 md:p-8 bg-gray-900 rounded-lg shadow-lg border-2 border-gray-700 m-4 sm:m-6 md:m-8 flex flex-col items-center justify-start">
        
      

        {/* Centered Camera Preview with Circular Border */}
        <div className="relative w-72 h-72 bg-black rounded-full overflow-hidden flex items-center justify-center shadow-lg border-4 border-gray-700 mt-20">
          {cameraPermission === true ? (
            <video
              ref={videoRef}
              autoPlay
              playsInline
              muted
              className="absolute top-0 left-0 w-full h-full object-cover rounded-full"
              onLoadedMetadata={() => videoRef.current && videoRef.current.play()}
            ></video>
          ) : cameraPermission === false ? (
            <div className="flex flex-col items-center justify-center h-full text-gray-400">
              <FaCamera size={32} />
              <p>Camera access is denied. Please allow camera access to continue.</p>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center h-full text-gray-400">
              <FaCamera size={32} />
              <p>Requesting camera access...</p>
            </div>
          )}

          {/* Circular Progress Indicator */}
          {faceDetected && (
            <motion.div
              className="absolute inset-0 flex items-center justify-center rounded-full border-2 border-t-green-500 border-b-transparent border-r-transparent border-l-green-500"
              initial={{ rotate: 0 }}
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              style={{ width: '100%', height: '100%' }} // Larger than video for effect
            ></motion.div>
          )}
        </div>
        <h2 className="text-lg md:text-2xl font-semibold text-center mb-4 mt-5">
          Liveness Check
        </h2>
        <p className="text-center mb-6 text-sm md:text-base text-gray-400">
          Turn your head slowly in a circle following the <br></br> green indicator.
        </p>

      </div>
    </div>
  );
}

export default LivenessCheck;
