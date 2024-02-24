import React from 'react';
import about from "../images/New folder/about.jpg"
import baby from "../images/pricing-removebg-preview.png"
import Navbar from "./Nav"
import Footer from "./Footer"

const Contact = () => {
  return (
    <div style={{ position: 'relative' }}>
      <div style={{
        backgroundImage: `url('${about}')`,
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

        <div className="flex justify-center items-center text-center mb-[200px]" style={{ position: 'relative', zIndex: 20 }}>
          <div>
            <h1 className='text-[50px] lg:text-[66px] text-white font-[Helvetica]'>GET IN TOUCH</h1>
          </div>
        </div>
      </div>
      <div>
        <div className='flex items-center justify-between mt-[50px]  '>

          <form action="" className='ml-[50px] '>
            <h2 className='mb-[30px] text-[30px] '>Lets Talk</h2>
            <label htmlFor="name" className=''>Name</label><br></br>
            <input type="text" id="name" name="name" placeholder='Enter Your Name' className=' outline w-[600px] py-[6px] rounded-md' required /><br></br><br></br>

            <label htmlFor="email">Email</label><br></br>
            <input type="email" id="email" name="email" placeholder='Enter Your Email' className='outline w-[600px] py-[6px] rounded-md' required /><br></br><br></br>

            <label htmlFor="message" className=''>Message</label><br></br>
            <textarea id="message" name="message" rows="4" placeholder='Type Your Message' className='outline w-[600px] rounded-md' required></textarea><br></br>

            <button type="submit" className=' bg-[#cc7656]  text-white w-[600px] py-[6px] mt-[50px] rounded-md transition-all duration-300 hover:scale-105'>SEND</button>
          </form>
         <a href='/about'>
         <div className='bg-[#d2dae2] rounded-md w-[500px] h-[500px] mr-[50px] flex flex-col justify-end items-center transition-all duration-300 hover:scale-105' style={{ backgroundImage: `url('${baby}')`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
  <div className='pb-[30px] text-center text-white'>
    <h1 className='text-[30px] font-semi-bold'>About</h1>
    <h1 className='text-[20px]'>READ MY STORY</h1>
  </div>
</div>

         </a>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Contact;
