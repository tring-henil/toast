"use client"
import React, { useState } from 'react';
import ToastContainer, { showToast } from './ToastContainer';
const Home = () => {
  const [selectedOption, setSelectedOption] = useState('top-left');

  const handleOptionChange = (event: any) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className='mt-[15%] ml-[15%]'>
      <div className="flex flex-col space-y-4 w-1/4 bg-gray-100 rounded">
        <div className="flex justify-between">
          <input type="radio" value="top-left" name="radios" className="mr-1" 
            onChange={handleOptionChange}
            checked={selectedOption === 'top-left'}/>
          <label htmlFor="radio1">top-left</label>

          <input type="radio" value="top-right" name="radios" className="mr-1" 
            onChange={handleOptionChange}
            checked={selectedOption === 'top-right'}/>
          <label htmlFor="radio2">top-right</label>

          <input type="radio" value="top-center" name="radios" className="mr-1" 
            onChange={handleOptionChange}
            checked={selectedOption === 'top-center'}/>
          <label htmlFor="radio3">top-center</label>

          <input type="radio" value="bottom-center" name="radios" className="mr-1" 
            onChange={handleOptionChange}
            checked={selectedOption === 'bottom-center'}/>
          <label htmlFor="radio4">bottom-center</label>
        </div>
        <button
        onClick={()=> showToast(selectedOption,"success")}
        className="bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Success
        </button>
        <button
        onClick={()=> showToast(selectedOption,"info")}
        className="bg-blue-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
          Info
        </button>
        <button
        onClick={()=> showToast(selectedOption,"warning")}
        className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded">
          Warning
        </button>
        <button
        onClick={()=> showToast(selectedOption,"error")}
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
          Error
        </button>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Home;
