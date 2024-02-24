import React from 'react';
import Wedding from "../images/wedding1.jpeg"
import Wed from "../images/New folder/pot2.JPG"
import wed1 from "../images/2.jpeg"
import wed2 from "../images/New folder/1.JPG"
import wed3 from "../images/New folder/pot.JPG"
import Navbar from "./Nav"
import Footer from "./Footer"


const Graduation = () => {

  return (
    <div>
    <div style={{ backgroundImage: `url('${Wedding}')`, backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '60vh' }}>
    <Navbar/>
      <div className="flex justify-center items-center text-center mb-[200px]">
        <div>
          <h1 className='text-[50px] lg:text-[66px] text-white font-[Helvetica]'>GRADUATIONS</h1>
        </div>
      </div>
     
    </div>
    <div className='flex mt-[40px]'>
        <div className='h-[300px] w-[300px] px-[20px] rounded-md'>
          <img src={Wed} alt="1" />
        </div>
        <div className='h-[300px] w-[300px] px-[20px] rounded-md'>
          <img src={wed1} alt="1" />
        </div>
        <div className='h-[300px] w-[300px] px-[20px] rounded-md'>
          <img src={wed2} alt="1" />
        </div>
        <div className='h-[300px] w-[300px] px-[20px] rounded-md'>
          <img src={wed3} alt="1" />
        </div>
       
      </div>
      <Footer/>
    </div>
  );
}

export default Graduation;
