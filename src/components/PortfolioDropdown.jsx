
import React from 'react';

const PortfolioDropdown = () => {
  return (
    <div className="absolute top-full left-0  w-[200px] h-[150px]  lg:bg-none  ml-[120px] lg:ml-[80px] shadow-lg  rounded-md z-10">
      <a href="/weddings" className="block px-4 py-2 text-[rgb(0,0,0)] lg:text-white ">Weddings</a>
      <a href="/potraits" className="block px-4 py-2 text-[#000]  lg:text-white ">Portraits</a>
      <a href="/lifestyle" className="block px-4 py-2 text-[#000]  lg:text-white ">LifeStyle</a>
    </div>
  );
}

export default PortfolioDropdown;
