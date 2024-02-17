import React, { useState } from 'react';
import { IoMenu } from "react-icons/io5";
import { IoIosCloseCircle } from "react-icons/io";
import Wedding from "../images/wedding1.jpeg"

const Pricing = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div style={{ backgroundImage: `url('${Wedding}')`, backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '100vh' }}>
      <div className='flex flex-row justify-between p-8 items-center'>
        <div className="hidden lg:flex">
          <div className='transition-all duration-300 hover:text-lg hover:font-semibold'>
            <h3 className='pr-10 text-[20px] text-white font-bold '><a href='/'>HOME</a></h3>
          </div>
          <div className='transition-all duration-300 hover:text-lg hover:font-semibold'>
            <h3 className='pr-10 text-[20px] text-white font-bold '><a href='/about'>ABOUT</a></h3>
          </div>
          <div className='transition-all duration-300 hover:text-lg hover:font-semibold'>
            <h3 className='text-[20px]  text-white font-bold '><a href='/portfolio'>PORTFOLIO</a></h3>
          </div>
        </div>

        <div className=' bg-black  text-white   hover:bg-white hover:text-black rounded-md '>
          <h1 className='text-[30px] font-sixtyfour font-bold  px-5 py-2 '><a href='/'>Maurine G</a></h1>
        </div>

        <div className="hidden lg:flex flex-wrap lg:flex-nowrap">
          <div className='transition-all duration-300 hover:text-lg hover:font-semibold lg:block'>
            <h3 className='pr-10 text-[20px] text-white font-bold '><a href='/clients'>CLIENTS</a></h3>
          </div>
          <div className='transition-all duration-300 hover:text-lg hover:font-semibold lg:block'>
            <h3 className='pr-10 text-[20px] text-white font-bold '><a href='/contact'>CONTACTS</a></h3>
          </div>
          <div className='transition-all duration-300 hover:text-lg hover:font-semibold lg:block'>
            <h3 className='text-[20px] text-white font-bold '><a href='/pricing'>PRICING</a></h3>
          </div>
        </div>

        <div className='lg:hidden ml-auto' onClick={() => setMenuOpen(!menuOpen)}>
          <IoMenu className=' text-[40px] text-[#cc7656]' />
        </div>
      </div>
      <div className="flex justify-center items-center text-center mb-[200px]">
        <div>
          {/* Replace currentDescription with your desired content */}
          <h1 className='text-[50px] lg:text-[66px] text-white font-[Helvetica]'>Your Content Here</h1>
          <h2 className='text-[25px] text-white font-[Helvetica] uppercase '>Your Content Here</h2>
        </div>
      </div>
      {menuOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
          <div className="bg-white  w-[100%] h-[100vh] ">
            <div className='flex justify-end mr-[20px] mt-[20px]'>
              <IoIosCloseCircle className='text-[35px] text-[#cc7656]' onClick={() => setMenuOpen(false)} />
            </div>
            <div className='flex flex-col justify-center pt-[100px]  items-center text-center '>
              <h3 className='text-[20px] text-[#cc7656] font-bold mb-[25px]'><a href='/'>HOME</a></h3>
              <h3 className='text-[20px] text-[#cc7656] font-bold  mb-[25px]'><a href='/about'>ABOUT</a></h3>
              <h3 className='text-[20px] text-[#cc7656] font-bold  mb-[25px]'><a href='/portfolio'>PORTFOLIO</a></h3>
              <h3 className='text-[20px] text-[#cc7656] font-bold  mb-[25px]'><a href='/clients'>CLIENTS</a></h3>
              <h3 className='text-[20px] text-[#cc7656] font-bold  mb-[25px]'><a href='/contacts'>CONTACTS</a></h3>
              <h3 className='text-[20px] text-[#cc7656] font-bold'><a href='/pricing'>PRICING</a></h3>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Pricing;
