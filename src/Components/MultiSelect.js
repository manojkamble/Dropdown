import React, { useState } from 'react';

const options = ['Option 1', 'Option 2', 'Option 3', 'Option 4'];

const MultiSelectDropdown = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleOptionChange = (option) => {
    if (selectedOptions.includes(option)) {
      setSelectedOptions(selectedOptions.filter((item) => item !== option));
    } else {
      setSelectedOptions([...selectedOptions, option]);
    }
  };

  return (
    <div className="relative inline-block w-full content-center">

      
      <div className="relative content-center">
        <input
          type=""
          className="absolute mt-1 ml-1"
          style={{ transform: 'scale(1.5)' }}
        />
        <button className="px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm w-full">
          {selectedOptions.length === 0
            ? 'select value'
            : selectedOptions.join(', ')}
        </button>
      </div>
      <div className="absolute z-10 w-full mt-2 bg-white border border-gray-300 rounded-md shadow-lg">
        {/* <select multiple="multiple"> */}
        {options.map((option) => (
          <label
            key={option}
            className="flex items-center px-4 py-2 cursor-pointer hover:bg-gray-100"
          >
            <input
              type="checkbox"
              className="mr-2 form-checkbox"
              checked={selectedOptions.includes(option)}
              onChange={() => handleOptionChange(option)}
            />
            {option}
          </label>
        ))}
        {/* </select> */}
      </div>
    </div>
  );
};

export default MultiSelectDropdown;
