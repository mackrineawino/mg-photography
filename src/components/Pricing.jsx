import React from 'react';
import pricing from "../images/New folder/pricing.jpg"
import Navbar from "./Nav"
import Footer from "./Footer"

const Pricing = () => {
 
  return (
  
   <div style={{ position: 'relative' }}>
      <div style={{ 
        backgroundImage: `url('${pricing}')`, 
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
      <div className="flex justify-center items-center text-center mb-[200px]" style={{ position: 'relative', zIndex: 20 }}>
        <div>
          {/* Replace currentDescription with your desired content */}
          <h1 className='text-[50px] lg:text-[66px] text-white font-[Helvetica]'>AVAILABLE PACKAGES</h1>
        </div>
      </div>
     
    </div>
    <Footer/>
    </div>
  );
}

export default Pricing;
