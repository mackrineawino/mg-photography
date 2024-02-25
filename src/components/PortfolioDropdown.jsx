
import React from 'react';

const PortfolioDropdown = () => {
  return (
    <div className="absolute top-full left-0  w-[180px] h-[150px] bg-white ml-[120px] lg:ml-[2px] shadow-lg  rounded-md z-10 flex flex-col justify-center items-center">
      <a href="/weddings" className="block px-4 py-2 text-[#646363]">Weddings</a>
      <a href="/potraits" className="block px-4 py-2 text-[#646363] ">Portraits</a>
      <a href="/lifestyle" className="block px-4 py-2 text-[#646363]   ">LifeStyle</a>
    </div>
  );
}

export default PortfolioDropdown;
