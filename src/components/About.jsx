import React from 'react';
import Footer from "./Footer"
import Hero from "../images/mg1.jpeg"
import potraits from "../images/ppp.jpeg"
import weddings from '../images/New folder/wed4.jpg'
import lifestyle from '../images/New folder/pp.JPG'
import Wedding from "../images/New folder/aa.jpg";
import {ReactTyped} from "react-typed";


import Navbar from "./Nav"

const About = () => {

  return (

    <div style={{ position: 'relative' }}>
      <div className='pb-[60px]' style={{
        backgroundImage: `url('${Wedding}')`,
        // backgroundColor: '#030617',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: 'auto',
        position: 'relative',
      }}>
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.3)',
            zIndex: 10,
          }}
        />
        <div style={{ position: 'relative', zIndex: 100 }}>
          <Navbar />
        </div>
        <div className=' flex flex-col lg:flex-row justify-between items-center text-center lg:text-left  font-[Helvetica] mt-[-20px] z-50 bg-[#000] h-auto mx-[40px]  rounded-lg' style={{ position: 'relative', zIndex: 50 }}>
          <div className=' flex  flex-col justify-center '>
            <h1 className='text-[30px] px-[40px] lg:w-[700px] w-auto font[Helvetica]'><span className=' lg:text-[20px] text-[15px] text-[#EB2837] mb-4'>Hello,
             Welcome</span><br></br><span className='lg:text-[50px] text-[30px] text-[white]'>
             <ReactTyped
                  className=""
                  strings={[
                    "I'm MAUREEN GILBERT",
                  ]}
                  typeSpeed={120}
                  backSpeed={150}
                  loop
                />
                </span>  <br></br> <span className='text-[#b1bacc] lg:text-[20px] md:text-[18px] text-[15px]'>Am not just a photographer and videographer,
              I am a storyteller who crafts narratives through my lens.</span></h1>
            <a href='/contact'><button className='lg:ml-[40px] mt-6 font-bold bg-[#EB2837] text-white py-[8px] lg:w-[25%] md:w-[550px] w-[300px] rounded-md'>CONTACT ME</button></a>
          </div>

          <div className=' flex justify-center items-center lg:mr-[80px] md:w-[550px] w-[300px] lg:w-[400px] h-[450px]  rounded-md mt-[40px] mb-[40px]'>
            <img src={Hero} className=" w-full h-full object-cover" alt="" />
          </div>
        </div>
      </div>

      <div className='bg-[#000] flex justify-center items-center mb-[50px]  h-[20vh]'>
        <h1 className='hidden'>End</h1>
      </div>
      <div>
        <h1 className='flex justify-center  mt-[-128px] text-black text-[30px] font-[Helvetica] font-bold bg-white mx-[40px] py-[40px]'>SEE MORE</h1>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  mx-[40px]'>
        <a href='/weddings'>
          <div className='relative overflow-hidden h-[500px] flex items-center justify-center '>
            <img
              src={weddings}
              className='w-full h-full object-cover'
              alt='weddings'
              style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}
            />
            <h1 className='absolute bottom-0 mb-7 text-3xl text-black transition-transform duration-300 hover:-translate-y-full'>
              WEDDINGS
            </h1>
          </div>

        </a>
        <a href='/lifestyle'>
          <div className='relative overflow-hidden h-[500px] flex items-center justify-center '>
            <img
              src={lifestyle}
              className='w-full h-full object-cover'
              alt='lifestyle'
              style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}
            />
            <h1 className='absolute bottom-0 mb-7 text-3xl text-black transition-transform duration-300 hover:-translate-y-full'>
              LIFESTYLE
            </h1>
          </div>

        </a>
        <a href='/potraits'>
          <div className='relative overflow-hidden h-[500px] flex items-center justify-center '>
            <img
              src={potraits}
              className='w-full h-full object-cover'
              alt='potraits'
              style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}
            />
            <h1 className='absolute bottom-0 mb-7 text-3xl text-black transition-transform duration-300 hover:-translate-y-full'>
              POTRAITS
            </h1>
          </div>

        </a>
      </div>
      <Footer />
    </div>
  );
}

export default About;
