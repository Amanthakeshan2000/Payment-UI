// src/App.jsx
import React from 'react';
import VerificationPage from './components/VerificationPage';
import CountrySelection from './components/CountrySelection';
import VerificationSteps from './components/VerificationSteps';
import DocumentSelection from './components/DocumentSelection';
import UploadDocument from './components/UploadDocument';
import LivenessCheck from './components/LivenessCheck';
import SelfieCheckTips from './components/SelfieCheckTips';
import CameraPreparation from './components/CameraPreparation';
import VerificationStatus from './components/VerificationStatus';

function App() {
  return (
    <div>
      <VerificationPage />
      {/* Uncomment each component to view individually */}
       <CountrySelection /> 
       <VerificationSteps />
       <DocumentSelection /> 
       <UploadDocument /> 
       <LivenessCheck /> 
       <SelfieCheckTips /> 
       <CameraPreparation />
       <VerificationStatus />
    </div>
  );
}

export default App;
