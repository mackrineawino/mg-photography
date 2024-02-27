import React from 'react';
import Wedding from "../images/New folder/WED.jpg"
import Navbar from "./Nav"
import Footer from "./Footer"
import { WeddingList } from "../helpers/WeddingList";



const Weddings = () => {

  return (
    <div style={{ position: 'relative' }}>
      <div style={{
        backgroundImage: `url('${Wedding}')`,
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
            <h1 className='text-[50px] lg:text-[66px] text-white font-[Helvetica]'>WEDDINGS</h1>
          </div>
        </div>

      </div>
      <div className='mt-[-50px] flex flex-col justify-center items-center bg-[#f3f1ee] mx-[40px] text-black shadow-lg py-[20px] ' style={{ position: 'relative', zIndex: 50 }}>
        <h2 className='text:[30px] lg:text-[40px] font-[Helvetica] uppercase'>Love sealed in a moment. </h2>
        <h2 className='text:[25px] lg:text-[30px] font-[Helvetica]'>My Wedding Photography Portfolio</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[35px] mt-[50px] px-10 rounded-md">
        {WeddingList.map((wedd, key) => (
          <div key={key} className="gridItem h-[500px] relative transition-all duration-300 hover:scale-105">
            <img src={wedd.image} className="w-full h-full object-cover" alt="Wedding" />
          </div>
        ))}
      </div>
      

      <Footer />
    </div>
  );
}

export default Weddings;
