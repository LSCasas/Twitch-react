import React from 'react';

function Filter() {
  return (
    <div className="ml-10 my-10">
      {/* Primer div con texto "Categories" y "Live Channels" */}
      <div className="flex gap-8 mb-10">
        <div>
        <button className="border border-[#BF94FF] border-t-0 border-r-0 border-l-0 border-b-2 h-5 w-[50px] text-[#BF94FF] text-center md:text-lg md:h-10 md:w-[50px] font-mono text-3xl font-black tracking-tighter">
  <p>Categories</p>
</button>
       
        </div>
        <div>
          <p className="text-lg font-medium ml-10 mt-1">Live Channels</p>
        </div>
      </div>

      {/* Segundo div con el input de búsqueda y el select */}
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



