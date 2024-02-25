import React, { useState } from 'react';
import about from "../images/New folder/about.jpg"
import baby from "../images/pricing-removebg-preview.png"
import potraits from "../images/ppp.jpeg"
import weddings from '../images/New folder/wed4.jpg'
import lifestyle from '../images/New folder/pp.JPG'
import Navbar from "./Nav"
import Footer from "./Footer"
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceId = 'service_ea4i9ip';
    const templateId = 'template_om0oz6g';
    const publicKey = 'lbDe_9OpRzACbOnBy';

    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: 'Awino Mackrine',
      message: message,
    };

    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log('Email sent successfully!', response);
        setName('');
        setEmail('');
        setMessage('');
        setSuccessMessage('Email sent successfully!');
        setErrorMessage('');
        setTimeout(() => {
          setSuccessMessage('');
        }, 5000); // Clear the success message after 5 seconds
      })
      .catch((error) => {
        console.error('Error sending email:', error);
        setErrorMessage('Error sending email. Please try again later.');
        setSuccessMessage('');
      });
  }

  return (
    <div style={{ position: 'relative' }}>
      <div style={{
        backgroundImage: `url('${about}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '60vh',
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
        <div style={{ position: 'relative', zIndex: 50 }}>
          <Navbar />
        </div>

        <div className="flex justify-center items-center text-center mb-[200px]" style={{ position: 'relative', zIndex: 20 }}>
          <div>
            <h1 className='text-[50px] lg:text-[66px] text-white font-[Helvetica]'>GET IN TOUCH</h1>
          </div>
        </div>
      </div>
      <div>
        <div className='flex flex-col lg:flex-row items-center justify-between mt-[50px] mb-[80px]  '>

          <form onSubmit={handleSubmit} className='lg:ml-[50px]  bg-gradient-to-b from-blue-400 rounded-md p-8 transition-all duration-300 hover:scale-105'>
            {successMessage && (
              <div className="bg-green-500 text-white py-2 text-center mb-4 rounded-sm">
                {successMessage}
              </div>
            )}
            {errorMessage && (
              <div className="bg-red-500 text-white py-2 text-center mb-4 rounded-sm">
                {errorMessage}
              </div>
            )}
            <h2 className='mb-[30px] text-[30px] text-white text-center'>Lets Talk</h2>
            <label htmlFor="name" className='pl-[10px]'>Name</label><br></br>
            <input type="text" value={name}
              onChange={(e) => setName(e.target.value)} id="name" name="name" placeholder='Enter Your Name' className='placeholder:text-[15px] pl-[10px] w-[100%]  lg:w-[600px] py-[6px] rounded-md focus:outline-none' required /><br></br><br></br>

            <label htmlFor="email" className='pl-[10px]'>Email</label><br></br>
            <input type="email" value={email}
              onChange={(e) => setEmail(e.target.value)} id="email" name="email" placeholder='Enter Your Email' className=' placeholder:text-[15px] pl-[10px] w-[100%]  lg:w-[600px] py-[6px] rounded-md focus:outline-none' required /><br></br><br></br>

            <label htmlFor="message" className='pl-[10px]'>Message</label><br></br>
            <textarea id="message" value={message}
              onChange={(e) => setMessage(e.target.value)} name="message" rows="4" placeholder='Type Your Message' className='placeholder:text-[15px] pl-[10px] w-[100%]  lg:w-[600px] rounded-md focus:outline-none bg-none' required></textarea><br></br>

            <button type="submit" className=' bg-[#cc7656]  text-white w-[600px] py-[6px] mt-[50px] mb-[50px] rounded-md transition-all duration-300 hover:scale-105'>SEND</button>
          </form>
          <a href='/about'>
            <div className='bg-[#d2dae2] rounded-md  w-[600px] lg:w-[500px] h-[570px] lg:ml-[40px] lg:mr-[50px] flex flex-col justify-end items-center transition-all duration-300 hover:scale-105' style={{ backgroundImage: `url('${baby}')`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
              <div className='pb-[30px] text-center text-white'>
                <h1 className='text-[30px] font-semi-bold'>About</h1>
                <h1 className='text-[20px]'>READ MY STORY</h1>
              </div>
            </div>
          </a>
        </div>
      </div>
      <div>
        <div>
          <hr></hr>
          <h1 className='flex justify-center mb-[30px] mt-[30px] text-[30px] font-[Helvetica] font-bold'>SEE MORE</h1>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  mx-[40px]'>
          <a href='/weddings'>
            <div className='flex flex-col justify-end items-center h-[500px]' style={{ backgroundImage: `url('${weddings}')`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
              <h1 className='text-[30px] mb-7 text-black'>WEDDINGS</h1>
            </div>
          </a>
          <a href='/lifestyle'>
            <div className='flex flex-col justify-end items-center h-[500px]' style={{ backgroundImage: `url('${lifestyle}')`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
              <h1 className='text-[30px] mb-7 text-black'>LIFESTYLE</h1>
            </div>
          </a>
          <a href='/potraits'>
            <div className='flex flex-col justify-end items-center h-[500px]' style={{ backgroundImage: `url('${potraits}')`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
              <h1 className='text-[30px] mb-7 text-black'>POTRAITS</h1>
            </div>
          </a>



        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Contact;
