import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
       <div className='bg-[#d2dae2]'>
        <div className='flex justify-center text-[30px] lg:text-[40px] pt-[50px] my-[100px] text-[#cc7656] text-center'>
          <div className='hover:text-[50px]'>  <a href='/'><FaFacebook className='lg:mx-[70px] mx-[50px]' /></a></div>
          <div className='hover:text-[50px]'>  <a href='/'><FaInstagram className='lg:mx-[70px] mx-[50px]' /></a></div>
          <div className='hover:text-[50px]'><a href='/'><FaLinkedin className='lg:mx-[70px] mx-[50px]' /></a></div>
        </div >
        <div className='pb-[50px] flex flex-col justify-center items-center'>
          <h2 className='text-[15px] lg:text-[18px] font-bold font-[Helvetica]'>All content Copyright © 2024 Maurine Gilbert</h2>
        </div>
      </div>
    </div>
  )
}

export default Footer
