// src/components/DocumentSelection.jsx
import React from 'react';
import Select from 'react-select';
import Flag from 'react-world-flags'; // Importing Flag component for country flags
import { FaChevronDown } from 'react-icons/fa';

const countryOptions = [
  { value: 'lk', label: 'Sri Lanka', icon: <Flag code="lk" className="h-4 w-6 mr-2" /> },
  { value: 'us', label: 'United States', icon: <Flag code="us" className="h-4 w-6 mr-2" /> },
  { value: 'ca', label: 'Canada', icon: <Flag code="ca" className="h-4 w-6 mr-2" /> },
];

const customStyles = {
  control: (provided) => ({
    ...provided,
    backgroundColor: '#374151', // Tailwind's gray-700
    color: '#fff',
    padding: '0.5rem',
    borderRadius: '0.375rem', // Tailwind's rounded-md
    borderColor: '#374151',
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isSelected ? '#1F2937' : '#374151', // Tailwind's gray-900 for selected and gray-700 otherwise
    color: '#fff',
    display: 'flex',
    alignItems: 'center',
    padding: '0.5rem',
  }),
  singleValue: (provided) => ({
    ...provided,
    display: 'flex',
    alignItems: 'center',
    color: '#fff',
  }),
};

function DocumentSelection() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-800 text-white">
      <div className="w-full max-w-md min-h-screen sm:min-h-[90vh] p-4 sm:p-6 md:p-8 bg-gray-900 rounded-lg shadow-lg border-2 border-gray-700 m-4 sm:m-6 md:m-8 flex flex-col justify-between">
        
        {/* Top Aligned Text */}
        <h2 className="text-lg md:text-2xl font-semibold text-center mb-4">
          Select type and issuing country of your identity document
        </h2>

        {/* Issuing Country Dropdown with react-select */}
        
        <div className="mb-20">
        <div className="relative mb-6 space-y-3">

        <span>Issuing Country*</span>
        <div className="w-auto h-px bg-gray-500 mt-1 mb-2"></div> {/* Line under the label */}

          <Select
            options={countryOptions}
            styles={customStyles}
            placeholder={<span className="text-white">Select country</span>}
            components={{
              IndicatorSeparator: () => null, // Removes the default separator line
              DropdownIndicator: () => <FaChevronDown className="text-gray-400 mr-2" />,
            }}
            formatOptionLabel={(country) => (
              <div className="flex items-center">
                {country.icon}
                <span>{country.label}</span>
              </div>
            )}
          />
        </div>

        {/* Document Type Options with Radio Buttons */}
        <div className="space-y-3">
        <span>Document Type*</span>
        <div className="w-auto h-px bg-gray-500 mt-1 mb-2"></div> {/* Line under the label */}
          <label className="flex items-center justify-between w-full bg-gray-700 hover:bg-gray-800 py-2 px-3 rounded-md cursor-pointer">
            <span>Driver's License</span>
            <input type="radio" name="documentType" className="form-radio text-blue-500" />
          </label>
          <label className="flex items-center justify-between w-full bg-gray-700 hover:bg-gray-800 py-2 px-3 rounded-md cursor-pointer">
            <span>ID Card</span>
            <input type="radio" name="documentType" className="form-radio text-blue-500" />
          </label>
          <label className="flex items-center justify-between w-full bg-gray-700 hover:bg-gray-800 py-2 px-3 rounded-md cursor-pointer">
            <span>Residence Permit</span>
            <input type="radio" name="documentType" className="form-radio text-blue-500" />
          </label>
          <label className="flex items-center justify-between w-full bg-gray-700 hover:bg-gray-800 py-2 px-3 rounded-md cursor-pointer">
            <span>Passport</span>
            <input type="radio" name="documentType" className="form-radio text-blue-500" />
          </label>
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

export default DocumentSelection;
