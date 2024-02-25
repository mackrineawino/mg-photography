import React from 'react';
import Wedding from "../images/New folder/aa.jpg"
import Footer from "./Footer"
import Weddings from "../images/WED-removebg-preview.png"
import babybump from "../images/babybump-removebg-preview.png"
import baby from "../images/pricing-removebg-preview.png"

import Navbar from "./Nav"

const About = () => {

  return (

    <div style={{ position: 'relative' }}>
      <div style={{
        backgroundImage: `url('${Wedding}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '60vh',
        position: 'relative',
      }}>
        {/* Overlay */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.3)',
            zIndex: 10, // Ensure overlay covers the background image
          }}
        />
        <div style={{ position: 'relative', zIndex: 50 }}>
          <Navbar />
        </div>

        <div className="flex justify-center items-center text-center mb-[100px]" style={{ position: 'relative', zIndex: 20 }}>
          <div>

            <h1 className='text-[30px] lg:text-[40px] text-white font-[Helvetica]'>Hey</h1>
            <h1 className='text-[40px] lg:text-[50px] text-white font-[Helvetica]'>Am Maureen</h1>

          </div>
        </div>

      </div>
      <div className='flex flex-col justify-center items-center text-center px-[30px] mb-[50px] mt-[100px]'>
        <p className='font-[Helvetica] text-[20px]'>Am not just a photographer and videographer, I am a storyteller who crafts narratives through my lens.<br /> With an innate passion for capturing life's most precious moments, I brings a unique blend of creativity, professionalism, and warmth to every project I undertake.

        </p>
      </div>
      <div className='bg-[#60376d] flex justify-center items-center mb-[50px]'>
        <img src={Weddings} className="w-300% h-[90vh]" alt="" />
      </div>
      <a href='/weddings'>
      <div className=' flex flex-col lg:flex-row justify-between items-center mx-[50px] font-[Helvetica] mb-[50px]'>
        <div className='w-[100%] lg:w-[500px] flex justify-center'>
          <h1 className='text-[30px]'>WEDDINGS</h1>
        </div>

        <div className='w-[500px] text-[18px]'>  <p> For couples embarking on the journey of a lifetime,
          I am there to immortalize your love story.
          With an eye for detail and a knack for capturing candid moments,
          I ensures that every smile, every tear, and every joyous celebration is preserved for eternity.
          From the tender exchange of vows to the exhilarating dance floor moments, My photographs
          and videos tell a tale of love, commitment, and happily ever after.</p></div>
      </div>
      </a>
      <div className='bg-[#bd793a] flex justify-center items-center mb-[50px]'>
        <img src={babybump} className="w-300% h-[90vh]" alt="" />
      </div>
      <a href='/weddings'>
      <div className=' flex flex-col lg:flex-row justify-between items-center mx-[50px] font-[Helvetica] mb-[50px]'>
        <div className='w-[100%] lg:w-[500px] flex justify-center'>
          <h1 className='text-[30px]'>BABY BUMPS</h1>
        </div>

        <div className='w-[500px] text-[18px]'>  <p>Welcoming a new life into the world is a momentous occasion,
           and I understands the importance of capturing the anticipation,
           excitement, and overwhelming joy of a baby shower.
            With a gentle touch and a keen eye for emotion, 
            I document the tender moments shared between parents-to-be, family, 
            and friends as they eagerly await the arrival of your little bundle of joy. 
            From the heartfelt speeches to the playful games and heartfelt gifts, 
           my photographs and videos serve as cherished
             mementos of this special time in a family's life.</p></div>
      </div>
      </a>
      <div className='bg-[#bd3a71] flex justify-center items-center mb-[50px]'>
        <img src={baby} className="w-300% h-[90vh]" alt="" />
      </div>

      <a href='/potraits'>
      <div className=' flex flex-col lg:flex-row justify-between items-center mx-[50px] font-[Helvetica] mb-[50px]'>
        <div className='w-[100%] lg:w-[500px] flex justify-center'>
          <h1 className='text-[30px]'>POTRAITS</h1>
        </div>

        <div className='w-[500px] text-[18px]'> 
         <p>Every individual has a story to tell, and i believe that
           portraits are a powerful way to capture the essence of a person's 
           character and personality. Whether it's a professional headshot,
            a family portrait, or a creative fashion shoot, i work closely 
            with my clients to ensure that your unique spirit shines through in
             every photograph.

</p></div>
      </div>
      </a>
     
      <Footer />
    </div>
  );
}

export default About;
