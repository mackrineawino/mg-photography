import React from 'react';
import Wedding from "../images/New folder/aa.jpg"
import Footer from "./Footer"

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
        <div style={{ position: 'relative', zIndex: 20 }}>
          <Navbar />
        </div>

        <div className="flex justify-center items-center text-center mb-[200px]" style={{ position: 'relative', zIndex: 20}}>
          <div>
          
            <h1 className='text-[50px] lg:text-[66px] text-white font-[Helvetica]'>Hey?</h1>
            <h1 className='text-[50px] lg:text-[66px] text-white font-[Helvetica]'>Am Maureen</h1>
            
          </div>
        </div>
      
      </div>
      <Footer/>
    </div>
  );
}

export default About;
