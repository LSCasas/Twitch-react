import React from 'react';

function Filter() {
  return (
    <div className="ml-10 my-10">
     
      <div className="flex gap-8 mb-10">
        <div>
        <p className="text-lg font-medium ml-10 mt-1 text-[#BF94FF]">Categories</p>
       
        </div>
        <div>
          <p className="text-lg font-medium ml-10 mt-1">Live Channels</p>
        </div>
      </div>

      
      <div className="flex justify-between items-center w-full px-4">
        <input
          type="text"
          placeholder="Search for category tags"
          className="w-1/3 px-4 py-2 border border-gray-800 rounded-lg bg-transparent"
        />
        <div className="flex items-center gap-2">
          <p>Sort by:</p>
          <label htmlFor="options" className="sr-only">Choose an option:</label>
          <select id="options" name="options" className="px-2 py-2 border border-gray-800 rounded-lg bg-transparent appearance-none">
            <option value="option1" data-icon="https://cdn-icons-png.flaticon.com/128/420/420105.png">Recomendations for you</option>
            <option value="option2" data-icon="https://cdn-icons-png.flaticon.com/128/420/420105.png">More viewers</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default Filter;



