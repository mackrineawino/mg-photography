import React, { useRef, useEffect, useState } from 'react';
import WeddingImage1 from '../images/wedding1.jpeg';
import WeddingImage2 from '../images/New folder/111.jpg';
import WeddingImage3 from '../images/New folder/outdoor.jpg';
import babyImage from '../images/baby.jpeg'
import { FaLocationArrow } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import { IoIosCloseCircle } from "react-icons/io";
import potrait from  "../images/New folder/pot.JPG"
import wed from '../images/WED1.jpg'

const Home = () => {
  const sliderRef = useRef(null);
  const [descriptions, setDescriptions] = useState([
    { h1: 'WEDDING COVERAGE', h2: 'Beautiful moments captured forever.' },
    { h1: 'BABY BUMP', h2: 'Cherish the anticipation of a new life.' },
    { h1: 'OUTDOOR PHOTOSHOOT', h2: 'Embrace nature in every frame.' },
  ]);
  const [currentDescription, setCurrentDescription] = useState(descriptions[0]);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const images = [WeddingImage1, WeddingImage2, WeddingImage3];
    let currentImageIndex = 0;

    const nextSlide = () => {
      currentImageIndex = (currentImageIndex + 1) % images.length;
      sliderRef.current.style.backgroundImage = `url(${images[currentImageIndex]})`;
      setCurrentDescription(descriptions[currentImageIndex]);
    };

    const interval = setInterval(nextSlide, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
         <div ref={sliderRef} className="h-screen bg-cover relative flex flex-col justify-between transition-opacity duration-500 ease-in-out">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className='flex flex-row justify-between p-8 items-center relative z-10'>
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
        <div className="flex justify-center items-center text-center mb-[200px] relative z-10">
          <div>
            <h1 className='text-[50px] lg:text-[66px] text-white font-[Helvetica]'>{currentDescription.h1}</h1>
            <h2 className='text-[25px] text-white font-[Helvetica] uppercase '>{currentDescription.h2}</h2>
          </div>
        </div>
      </div>
      {menuOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
          <div className="bg-white  w-[100%] h-[100vh] ">
            <div className='flex justify-end mr-[20px] mt-[20px]'>
            <IoIosCloseCircle className='text-[35px] text-[#cc7656]'  onClick={() => setMenuOpen(false)} />
            </div>
         
            <div className='flex flex-col justify-center pt-[100px]  items-center text-center '>
            <h3 className='text-[20px] text-[#cc7656] font-bold mb-[25px]'><a href='/'>HOME</a></h3>
            <h3 className='text-[20px] text-[#cc7656] font-bold  mb-[25px]'><a href='/about'>ABOUT</a></h3>
            <h3 className='text-[20px] text-[#cc7656] font-bold  mb-[25px]'><a href='/portfolio'>PORTFOLIO</a></h3>
            <h3 className='text-[20px] text-[#cc7656] font-bold  mb-[25px]'><a href='/clients'>CLIENTS</a></h3>
            <h3 className='text-[20px] text-[#cc7656] font-bold  mb-[25px]'><a href='/contact'>CONTACTS</a></h3>
            <h3 className='text-[20px] text-[#cc7656] font-bold'><a href='/pricing'>PRICING</a></h3>
            </div>
           
          </div>
        </div>
      )}
      <div className='mt-[80px] text-center flex flex-col justify-center items-center bg-white'>
        <h3 className='font-sans text-[30px] lg:text-[35px]'>“Today, everything exists to end in a photograph.”</h3>
        <h5 className='mt-[20px] uppercase text-[15px] lg:text-[20px] mb-[50px]'>-Susan Sontag.</h5>
      </div>
      <div className='flex flex-col lg:flex-row mt-[50px] '>

        <div className='w-[100%] lg:w-[900px] h-[400px]' style={{ backgroundImage: `url(${potrait})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>

        <a href='/potraits' className='bg-[#f5f3f0] w-[100%] lg:w-[600px]'>
          <div >
            <div className='flex flex-col justify-center items-center text-center mt-[150px]'>
              <h2 className='uppercase text-[#575d64] font-[Helvetica] text-[20px]'>CAPTURING YOUR MEMORABLE POTRAITS</h2>
              <h2 className='font-bold text-[40px] font-[Helvetica] text-[#594d44]'>Potraits</h2>
              <h2 className='font-[30px]'><FaLocationArrow className='text-[35px] text-[#cc7656] mt-4 hover:text-[40px]' /></h2>
            </div>

          </div>
        </a>
      </div>
      <div className='flex flex-col lg:hidden mt-[50px] '>

        <div className='w-[100%] lg:w-[900px] h-[400px]' style={{ backgroundImage: `url(${wed})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>

        <a href='/weddings' className='bg-[#f5f3f0] w-[100%] lg:w-[600px]'>
          <div >
            <div className='flex flex-col justify-center items-center text-center mt-[150px]'>
              <h2 className='uppercase text-[#575d64] font-[Helvetica] text-[20px]'>Beautiful moments captured forever</h2>
              <h2 className='font-bold text-[40px] font-[Helvetica] text-[#594d44]'>Weddings</h2>
              <h2 className='font-[30px]'><FaLocationArrow className='text-[35px] text-[#cc7656] mt-4 hover:text-[40px]' /></h2>
            </div>

          </div>
        </a>
      </div>
      <div className=' hidden lg:flex  lg:flex-row '>
        <a href='/weddings' className='bg-[#f5f3f0] w-[100%] lg:w-[600px]'>
          <div>
            <div className='flex flex-col justify-center items-center text-center mt-[150px]'>
              <h2 className='uppercase text-[#575d64] font-[Helvetica] text-[20px]'>Beautiful moments captured forever</h2>
              <h2 className='font-bold text-[40px] font-[Helvetica] text-[#594d44]'>Weddings</h2>
              <h2><FaLocationArrow className='text-[35px] text-[#cc7656] mt-4 hover:text-[40px]' /></h2>
            </div>
          </div>
        </a>

        <div className='w-[100%] lg:w-[900px]  h-[400px]' style={{ backgroundImage: `url(${wed})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
      </div>
      <div className='flex mb-[150px] flex-col lg:flex-row'>

        <div className='w-[100%] lg:w-[900px] h-[400px]' style={{ backgroundImage: `url(${babyImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
        <a href='/graduation' className='bg-[#f5f3f0] w-[100%] lg:w-[600px]'>
          <div >
            <div className='flex flex-col justify-center items-center text-center mt-[150px]'>
              <h2 className='uppercase text-[#575d64] font-[Helvetica] text-[20px]'>Beautiful moments captured forever</h2>
              <h2 className='font-bold text-[40px] font-[Helvetica] text-[#594d44]'>Graduation</h2>
              <h2><FaLocationArrow className='text-[35px] text-[#cc7656] mt-4 hover:text-[40px]' /></h2>
            </div>
          </div>
        </a>
      </div>
      <div className='flex flex-col lg:flex-row justify-between px-[90px] mb-[50px] items-center text-center font-[Helvetica]'>
        <a href='/about' className='flex flex-col items-center bg-[#f5f3f0] w-[100%] p-[90px] rounded-md mb-[20px] lg: mr-[20px]'>
          <div>
            <h2 className='uppercase text-[15px] font-extralight'>Get to know me</h2>
            <h2 className='mt-[15px] text-[30px] font-bold'>About</h2>
          </div>
          <FaLocationArrow className='text-[35px] text-[#cc7656] mt-4' />
        </a>
        <a href='/pricing' className='flex flex-col items-center bg-[#f5f3f0] w-[100%] p-[90px] rounded-md mb-[20px] lg: mr-[20px]'>
          <div>
            <h2 className='uppercase text-[15px] font-extralight'>Explore available packages</h2>
            <h2 className='mt-[15px] text-[30px] font-bold'>Pricing</h2>
          </div>
          <FaLocationArrow className='text-[35px] text-[#cc7656] mt-4 ' />
        </a>
        <a href='/contacts' className='flex flex-col items-center bg-[#f5f3f0] w-[100%] p-[90px] rounded-md  mb-[20px] lg: mr-[20px]'>
          <div>
            <h2 className='uppercase text-[15px] font-extralight'>Get in touch</h2>
            <h2 className='mt-[15px] text-[30px] font-bold'>Contact</h2>
          </div>
          <FaLocationArrow className='text-[35px] text-[#cc7656] mt-4 ' />
        </a>
      </div>
      <div>
        <div className='flex justify-center text-[30px] lg:text-[40px] my-[100px] text-[#cc7656] text-center'>
          <div className='hover:text-[50px]'>  <a href='/'><FaFacebook className='lg:mx-[70px] mx-[50px]' /></a></div>
          <div className='hover:text-[50px]'>  <a href='/'><FaInstagram className='lg:mx-[70px] mx-[50px]' /></a></div>
          <div className='hover:text-[50px]'><a href='/'><FaLinkedin className='lg:mx-[70px] mx-[50px]' /></a></div>
        </div >
        <div className='mb-[50px] flex flex-col justify-center items-center'>
          <h2 className='text-[15px] lg:text-[18px] font-bold font-[Helvetica]'>All content Copyright © 2024 Maurine Gilbert</h2>
        </div>
      </div>
    </div>
  );
}

export default Home;
