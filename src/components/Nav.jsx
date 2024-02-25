import React, { useState } from 'react'
import { IoMenu } from "react-icons/io5";
import { IoIosCloseCircle } from "react-icons/io";
import logo from "../images/Screenshot_from_2024-02-19_11-09-16-removebg-preview.png";
import PortfolioDropdown from './PortfolioDropdown';

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [portfolioOpen, setPortfolioOpen] = useState(false);
 
  return (
    <div>
      <div className='flex flex-row justify-between p-8 items-center relative z-50'>
        <div className="hidden lg:flex">
          <div className='transition-all duration-300 hover:text-lg hover:font-semibold'>
            <h3 className='pr-10 text-[20px] text-white font-bold '><a href='/'>HOME</a></h3>
          </div>
          <div className='transition-all duration-300 hover:text-lg hover:font-semibold'>
            <h3 className='text-[20px]  text-white font-bold cursor-pointer relative' onClick={() => setPortfolioOpen(!portfolioOpen)}>
                PORTFOLIO
                {portfolioOpen && <PortfolioDropdown />}
              </h3>
            </div>

        </div>

        <div className=''>
          <h1 className='text-[30px] font-sixtyfour font-bold  px-5 py-2 '></h1>
          <a href='/'> <img src={logo} className="w-[150px] h-[100px] lg:w-[250px] lg:h-[130px]" alt="" /> </a>
        </div>

        <div className="hidden lg:flex flex-wrap lg:flex-nowrap">
          <div className='transition-all duration-300 hover:text-lg hover:font-semibold lg:block'>
            <h3 className='pr-10 text-[20px] text-white font-bold '><a href='/about'>ABOUT</a></h3>
          </div>
          <div className='transition-all duration-300 hover:text-lg hover:font-semibold lg:block'>
            <h3 className='pr-10 text-[20px] text-white font-bold '><a href='/contact'>CONTACTS</a></h3>
          </div>
        </div>
        <div className='lg:hidden ml-auto' onClick={() => setMenuOpen(!menuOpen)}>
          <IoMenu className=' text-[40px] text-white' />
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
              <h3 className='text-[20px] text-[#cc7656] font-bold mb-[25px] relative' onClick={() => setPortfolioOpen(!portfolioOpen)}>
                PORTFOLIO
                {portfolioOpen && <PortfolioDropdown />}
              </h3>
              <h3 className='text-[20px] text-[#cc7656] font-bold  mb-[25px]'><a href='/about'>ABOUT</a></h3>
              <h3 className='text-[20px] text-[#cc7656] font-bold  mb-[25px]'><a href='/contact'>CONTACTS</a></h3>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Nav
