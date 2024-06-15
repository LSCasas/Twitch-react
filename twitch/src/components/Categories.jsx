import React from 'react';

function Categories() {
  return (
    <div className=''>
      {/* Primer div con texto "EXPLORE" */}
      <div className='ml-8 mt-10 mb-1'>
        <p className="text-6xl font-semibold">EXPLORE</p>
      </div>

      {/* Segundo div con botones */}
      <div className="flex gap-4 mt-9 mb-4 ml-8">
        {/* Botón y logo para GAMES */}
        <div className="relative">
          <button className="text-lg py-3 px-16 rounded-lg bg-violet-700 text-white font-sans font-medium flex items-center justify-center relative">
            <img
              src="https://static-cdn.jtvnw.net/c3-vg/verticals/gaming.svg"
              className="w-10 h-10 absolute left-0 top-0 mt-2 ml-3"
              alt="icon"
            />
            GAMES
          </button>
        </div>

        {/* Botón y logo para IRL */}
        <div className="relative">
          <button className="text-lg py-3 px-16 rounded-lg bg-violet-700 text-white font-sans font-medium flex items-center justify-center relative">
            <img
              src='https://static-cdn.jtvnw.net/c3-vg/verticals/irl.svg'
              className="w-10 h-10 absolute left-0 top-0 mt-2 ml-3"
              alt="icon"
            />
            IRL
          </button>
        </div>

        {/* Botón y logo para Music */}
        <div className="relative">
          <button className="text-lg py-3 px-16 rounded-lg bg-violet-700 text-white font-sans font-medium flex items-center justify-center relative">
            <img
              src='https://static-cdn.jtvnw.net/c3-vg/verticals/music.svg'
              className="w-10 h-10 absolute left-0 top-0 mt-2 ml-3"
              alt="icon"
            />
            Music
          </button>
        </div>

        {/* Botón y logo para Creative */}
        <div className="relative">
          <button className="text-lg py-3 px-16 rounded-lg bg-violet-700 text-white font-sans font-medium flex items-center justify-center relative">
            <img
              src='https://static-cdn.jtvnw.net/c3-vg/verticals/creative.svg'
              alt="Icon"
              className="w-10 h-10 absolute left-0 top-0 mt-2 ml-3"
              style={{ zIndex: 5 }}
            />
            Creative
          </button>
        </div>

        {/* Botón y logo para Esports */}
        <div className="relative">
          <button className="text-lg py-3 px-16 rounded-lg bg-violet-700 text-white font-sans font-medium flex items-center justify-center relative">
            <img
              src='https://static-cdn.jtvnw.net/c3-vg/verticals/esports.svg'
              alt="Icon"
              className="w-10 h-10 absolute left-0 top-0 mt-2 ml-3"
            />
            Esports
          </button>
        </div>
      </div>
    </div>
  );
}

export default Categories;





