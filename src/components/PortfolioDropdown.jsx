
import React from 'react';

const PortfolioDropdown = () => {
  return (
    <div className="absolute top-full left-0  w-[180px] h-[150px] bg-white ml-[120px] lg:ml-[-23px] lg:mt-[10px] shadow-lg  z-10 flex flex-col justify-center items-center">
      <a href="/weddings" className="block px-4 py-2 text-[#000] uppercase text-[16px] hover:bg-blue-100 hover:text-black w-[100%] text-center">Weddings</a>
      <a href="/potraits" className="block px-4 py-2 text-[#000] uppercase text-[16px]  hover:bg-blue-100 hover:text-black w-[100%] text-center">Portraits</a>
      <a href="/lifestyle" className="block px-4 py-2 text-[#000] uppercase text-[16px]  hover:bg-blue-100 hover:text-black w-[100%] text-center">LifeStyle</a>
    </div>
  );
}

export default PortfolioDropdown;
