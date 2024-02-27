import React from 'react';
import life from "../images/New folder/11.jpg"
import Navbar from "./Nav"
import Footer from "./Footer"
import {LifestyleList} from "../helpers/LifestyleList"


const LifeStyle = () => {

  return (
    <div style={{ position: 'relative' }}>
      <div style={{
        backgroundImage: `url('${life}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '70vh',
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
        <div style={{ position: 'relative', zIndex: 100 }}>
          <Navbar />
        </div>
      <div className="flex justify-center items-center text-center mb-[200px]" style={{ position: 'relative', zIndex: 20 }}>
        <div>
          <h1 className='text-[50px] lg:text-[66px] text-white font-[Helvetica]'>LIFESTYLE</h1>
        </div>
      </div>
     
    </div>
    <div className='mt-[-50px] flex flex-col justify-center items-center bg-[#424140] mx-[40px] text-white py-[20px] ' style={{ position: 'relative', zIndex: 50 }}>
        <h2 className='text:[30px] lg:text-[40px] font-[Helvetica] text-center uppercase'>Embracing the everyday magic.</h2>
        <h2 className='text:[25px] lg:text-[30px] font-[Helvetica]'>My Lifestyle Photography Portfolio</h2>
      </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[35px] mt-[50px] px-10 rounded-md">
        {LifestyleList.map((lifestyle, key) => (
          <div key={key} className="gridItem h-[500px] relative bg-black transition-all duration-300 hover:scale-105">
            <img
              src={lifestyle.image}
              className="w-full h-full object-cover"
              alt="portraits"
            />
          </div>
        ))}
      </div>

      <Footer/>
    </div>
  );
}

export default LifeStyle;
