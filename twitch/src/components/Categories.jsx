

function Categories() {
  return (
    <div className='hidden md:block p-4'>
      
      <div className='ml-4 mt-10 mb-1 sm:ml-8'>
        <p className="text-3xl sm:text-6xl font-semibold">EXPLORE</p>
      </div>
      <div className="flex flex-wrap gap-4 mt-9 mb-4 ml-4 sm:ml-8 justify-center sm:justify-start">
        <div className="relative">
          <button className="text-sm sm:text-lg py-2 sm:py-3 px-8 sm:px-16 rounded-lg bg-violet-700 text-white font-sans font-medium flex items-center justify-center relative">
            <img
              src="https://static-cdn.jtvnw.net/c3-vg/verticals/gaming.svg"
              className="w-6 h-6 sm:w-10 sm:h-10 absolute left-0 top-0 mt-2 ml-3"
              alt="icon"
            />
            GAMES
          </button>
        </div>

        <div className="relative">
          <button className="text-sm sm:text-lg py-2 sm:py-3 px-8 sm:px-16 rounded-lg bg-violet-700 text-white font-sans font-medium flex items-center justify-center relative">
            <img
              src='https://static-cdn.jtvnw.net/c3-vg/verticals/irl.svg'
              className="w-6 h-6 sm:w-10 sm:h-10 absolute left-0 top-0 mt-2 ml-3"
              alt="icon"
            />
            IRL
          </button>
        </div>

        <div className="relative">
          <button className="text-sm sm:text-lg py-2 sm:py-3 px-8 sm:px-16 rounded-lg bg-violet-700 text-white font-sans font-medium flex items-center justify-center relative">
            <img
              src='https://static-cdn.jtvnw.net/c3-vg/verticals/music.svg'
              className="w-6 h-6 sm:w-10 sm:h-10 absolute left-0 top-0 mt-2 ml-3"
              alt="icon"
            />
            Music
          </button>
        </div>

        <div className="relative">
          <button className="text-sm sm:text-lg py-2 sm:py-3 px-8 sm:px-16 rounded-lg bg-violet-700 text-white font-sans font-medium flex items-center justify-center relative">
            <img
              src='https://static-cdn.jtvnw.net/c3-vg/verticals/creative.svg'
              alt="Icon"
              className="w-6 h-6 sm:w-10 sm:h-10 absolute left-0 top-0 mt-2 ml-3"
              style={{ zIndex: 5 }}
            />
            Creative
          </button>
        </div>

        <div className="relative">
          <button className="text-sm sm:text-lg py-2 sm:py-3 px-8 sm:px-16 rounded-lg bg-violet-700 text-white font-sans font-medium flex items-center justify-center relative">
            <img
              src='https://static-cdn.jtvnw.net/c3-vg/verticals/esports.svg'
              alt="Icon"
              className="w-6 h-6 sm:w-10 sm:h-10 absolute left-0 top-0 mt-2 ml-3"
            />
            Esports
          </button>
        </div>
      </div>
    </div>
  );
}

export default Categories;






