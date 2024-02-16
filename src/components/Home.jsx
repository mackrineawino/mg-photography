import React, { useRef, useEffect, useState } from 'react';
import WeddingImage1 from '../images/wedding1.jpeg';
import WeddingImage2 from '../images/bebybump2.jpeg';
import WeddingImage3 from '../images/outdoor1.jpeg';
import babyImage from '../images/baby.jpeg'
import { FaLocationArrow } from "react-icons/fa6";


const Home = () => {
  const sliderRef = useRef(null);
  const [descriptions, setDescriptions] = useState([
    { h1: 'WEDDING COVERAGE', h2: 'Beautiful moments captured forever.' },
    { h1: 'BABY BUMP', h2: 'Cherish the anticipation of a new life.' },
    { h1: 'OUTDOOR PHOTOSHOOT', h2: 'Embrace nature in every frame.' },
  ]);
  const [currentDescription, setCurrentDescription] = useState(descriptions[0]);

  useEffect(() => {
    const images = [WeddingImage1, WeddingImage2, WeddingImage3];
    let currentImageIndex = 0;

    const nextSlide = () => {
      currentImageIndex = (currentImageIndex + 1) % images.length;
      sliderRef.current.style.backgroundImage = `url(${images[currentImageIndex]})`;
      setCurrentDescription(descriptions[currentImageIndex]);
    };

    const interval = setInterval(nextSlide, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div ref={sliderRef} className="h-screen bg-cover flex flex-col justify-between transition-opacity duration-500 ease-in-out">
        <div className='flex flex-row justify-between p-8 items-center'>
          <div className="flex">
            <h3 className='pr-10 text-[20px] text-black font-bold transition-all duration-300 hover:text-lg hover:font-semibold'><a href='/'>HOME</a></h3>
            <h3 className='pr-10 text-[20px] text-black font-bold transition-all duration-300 hover:text-lg hover:font-semibold'><a href='/about'>ABOUT</a></h3>
            <h3 className='text-[20px]  text-black font-bold transition-all duration-300 hover:text-lg hover:font-semibold'><a href='/portfolio'>PORTFOLIO</a></h3>
          </div>
          <div>
            <h1 className='text-[30px] font-sixtyfour font-bold rounded-md bg-black text-white px-5 py-2 transition-all duration-300 hover:bg-black hover:text-white'><a href='/'>Maurine G</a></h1>
          </div>

          <div className="flex">
            <h3 className='pr-10 text-[20px]  text-black font-bold transition-all duration-300 hover:text-lg hover:font-semibold'><a href='clents'>CLIENTS</a></h3>
            <h3 className='pr-10 text-[20px]  text-black font-bold transition-all duration-300 hover:text-lg hover:font-semibold'><a href='/contact'>CONTACTS</a></h3>
            <h3 className='text-[20px]  text-black font-bold transition-all duration-300 hover:text-lg hover:font-semibold'><a href='/pricing'>PRICING</a></h3>
          </div>
        </div>
        <div className="flex justify-center items-center text-center mb-[200px]">
          <div>
            <h1 className='text-[66px] text-black font-[Helvetica]'>{currentDescription.h1}</h1>
            <h2 className='text-[25px] text-black font-[Helvetica] uppercase '>{currentDescription.h2}</h2>
          </div>
        </div>
      </div>
      <div className='mt-[80px] flex flex-col justify-center items-center bg-white'>
        <h3 className='font-sans  text-[35px]'>“Today, everything exists to end in a photograph.”</h3>
        <h5 className='mt-[20px] uppercase text-[20px] mb-[50px]'>-Susan Sontag.</h5>
      </div>
      <div className='flex mt-[50px] '>

        <div className='w-[900px] h-[400px]' style={{ backgroundImage: `url(${babyImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>

        <a href='/potraits' className='bg-[#f5f3f0] w-[600px]'>
        <div >
          <div className='flex flex-col justify-center items-center text-center mt-[150px]'>
            <h2 className='uppercase text-[#575d64] font-[Helvetica] text-[20px]'>CAPTURING YOUR MEMORABLE POTRAITS</h2>
            <h2 className='font-bold text-[40px] font-[Helvetica] text-[#594d44]'>Potraits</h2>
            <h2 className='font-[30px]'><FaLocationArrow className='text-[35px] text-[#575d64] mt-4 hover:text-[40px]' /></h2>
          </div>

        </div>
        </a>
      </div>
      <div className='flex  '>
        <a href='/weddings' className='bg-[#f5f3f0] w-[600px]'>
        <div>
          <div className='flex flex-col justify-center items-center text-center mt-[150px]'>
            <h2 className='uppercase text-[#575d64] font-[Helvetica] text-[20px]'>Beautiful moments captured forever</h2>
            <h2 className='font-bold text-[40px] font-[Helvetica] text-[#594d44]'>Weddings</h2>
            <h2><FaLocationArrow className='text-[35px] text-[#575d64] mt-4 hover:text-[40px]'/></h2>
          </div>
        </div>
        </a>
       
        <div className='w-[800px] h-[400px]' style={{ backgroundImage: `url(${babyImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
      </div>
      <div className='flex mb-[50px] '>

        <div className='w-[800px] h-[400px]' style={{ backgroundImage: `url(${babyImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
       <a href='/graduation' className='bg-[#f5f3f0] w-[600px]'>
       <div >
          <div className='flex flex-col justify-center items-center text-center mt-[150px]'>
            <h2 className='uppercase text-[#575d64] font-[Helvetica] text-[20px]'>Beautiful moments captured forever</h2>
            <h2 className='font-bold text-[40px] font-[Helvetica] text-[#594d44]'>Graduation</h2>
            <h2><FaLocationArrow className='text-[35px] text-[#575d64] mt-4 hover:text-[40px]' /></h2>
          </div>
        </div>
        </a> 
      </div>
    </div>
  );
}

export default Home;
