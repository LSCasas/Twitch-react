import React from 'react';
import Twitch from './TwitchLogo';

export default function NavBar() {
  return (
    <nav className="col-start-1 col-end-3 grid grid-cols-3">
      
      <div className="flex flex-row items-center gap-1 pl-4">
        <Twitch height="1.8rem" width="3rem" />
        <button className="border border-[#BF94FF] border-t-0 border-r-0 border-l-0 border-b-2  h-5 w-[50px] text-[#BF94FF]
         text-center md:text-sm md:h-10 md:w-[50px] font-mono text-lg font-black tracking-tighter">
          <p>Explorar</p>
        </button>
       

        <img
          src="https://img.icons8.com/?size=100&id=98963&format=png&color=FFFFFF"
          alt=""
          className="w-5 h-5 rounded-full ml-10"
        />
      </div>
      
      
      
      <div className="flex justify-center items-center" id="search-container">
        <input
          type="text"
          placeholder="Search"
          className="w-full px-4 py-2 border border-gray-800 rounded-lg bg-transparent"
        />
      </div>



      <div className="flex grid-cols-3 items-center gap-4 justify-end">
  
  <div className="col-span-1 flex justify-end">
    <img
      src="https://img.icons8.com/?size=100&id=stn4wvRvzzZs&format=png&color=FFFFFF"
      alt="corona"
      className="w-5 h-5 rounded-full"
    />
  </div>


  <div className="col-span-1 flex justify-center space-x-4">
    <button className="text-sm py-1 px-2 rounded-lg bg-zinc-800 text-white font-sans font-medium" >
      Sign In
    </button>
    <button className="text-sm py-1 px-2 rounded-lg bg-violet-600 text-white font-sans font-medium">
      Register
    </button>
  </div>

  
  <div className="col-span-1 flex justify-start">
    <img
      src="https://img.icons8.com/?size=100&id=Cssf43cjx2fu&format=png&color=FFFFFF"
      alt="perfil icon"
      className="w-6 h-6 rounded-full"
    />
  </div>
</div>

    </nav>
  );
}
