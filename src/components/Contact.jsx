import React, { useState } from 'react';
import about from "../images/New folder/about.jpg"
import baby from "../images/Screenshot_from_2024-02-19_11-09-16-removebg-preview.png"
import potraits from "../images/mg3.jpeg"
import weddings from '../images/New folder/wed4.jpg'
import lifestyle from '../images/New folder/pp.JPG'
import Navbar from "./Nav"
import Footer from "./Footer"
import emailjs from '@emailjs/browser';
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { ImSpinner9 } from "react-icons/im";

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);

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

    setLoading(true); // Start loading when the form is submitted

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
      })
      .finally(() => {
        setLoading(false); // Stop loading regardless of success or failure
      });
  }


  return (
    <div style={{ position: 'relative' }}>
      <div style={{
        backgroundImage: `url('${about}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '65vh',
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

        <div className="flex justify-center items-center text-center mb-[100px]" style={{ position: 'relative', zIndex: 20 }}>
          <div>
            <h1 className='text-[50px] lg:text-[66px] text-white font-[Helvetica]'>GET IN TOUCH</h1>
          </div>
        </div>
      </div>
      <div>

        <div className='flex justify-between text-[30px] lg:text-[40px] mt-[-50px] pb-[50px] mb-[30px] text-[#cc7656] text-center'  style={{ position: 'relative', zIndex: 20 }}>
          <div className='hover:text-[50px]  bg-gray-500 w-[150px] h-[130px]  flex justify-center items-center shadow-lg rounded-md ml-[50px] '>
            <a href='/'>
              <div className="rounded-full bg-blue-600 p-2 flex items-center justify-center" style={{ width: '70px', height: '70px', overflow: 'hidden' }}>
                <FaFacebook className='text-white' />
              </div>
            </a>
          </div>
          <div className='hover:text-[50px] bg-gray-500 w-[150px] h-[130px]  flex justify-center items-center shadow-lg rounded-md'>
            <a href='/'>
              <div className="rounded-full bg-blue-600 p-2 flex items-center justify-center" style={{ width: '70px', height: '70px', overflow: 'hidden' }}>
                <FaInstagram className='text-white' />
              </div>
            </a>
          </div>
          <div className='hover:text-[50px]  bg-gray-500 w-[150px] h-[130px]  flex justify-center items-center shadow-lg rounded-md mr-[50px]'>
            <a href='/'>
              <div className="rounded-full bg-blue-600 p-2  flex items-center justify-center" style={{ width: '70px', height: '70px', overflow: 'hidden' }}>
                <FaLinkedin className='text-white' />
              </div>
            </a>
          </div>
        </div>
        <div className=' flex justify-center '>
        <h1 className=' text-[30px] font-[Helvetica] font-bold '>REACH OUT</h1>
        </div>
      
<hr></hr>
        <div className='flex flex-col lg:flex-row items-center justify-between mt-[50px] mb-[80px] mx-[40px] '>

          <form onSubmit={handleSubmit} className=' bg-gradient-to-b from-blue-600 p-8 rounded-md mx-[40px] transition-all duration-300 hover:scale-105 font-[Helvetica]'>
            {successMessage && (
              <div className="bg-green-500 text-white py-3 text-center mb-4 rounded-sm">
                {successMessage}
              </div>
            )}
            {errorMessage && (
              <div className="bg-red-500 text-white py-3 text-center mb-4 rounded-sm">
                {errorMessage}
              </div>
            )}
            <h2 className='mb-[30px] text-[30px] text-white text-center font-bold'>DM</h2>
            <label htmlFor="name" className='pl-[10px]'>Name</label><br></br>
            <input type="text" value={name}
              onChange={(e) => setName(e.target.value)} id="name" name="name" placeholder='Enter Your Name' className='placeholder:text-[15px] pl-[10px] w-[100%]  lg:w-[600px] py-[6px] rounded-md focus:outline-none' required /><br></br><br></br>

            <label htmlFor="email" className='pl-[10px]'>Email</label><br></br>
            <input type="email" value={email}
              onChange={(e) => setEmail(e.target.value)} id="email" name="email" placeholder='Enter Your Email' className=' placeholder:text-[15px] pl-[10px] w-[100%]  lg:w-[600px] py-[6px] rounded-md focus:outline-none' required /><br></br><br></br>

            <label htmlFor="message" className='pl-[10px]'>Message</label><br></br>
            <textarea id="message" value={message}
              onChange={(e) => setMessage(e.target.value)} name="message" rows="4" placeholder='Type Your Message' className='placeholder:text-[15px] pl-[10px] w-[100%]  lg:w-[600px] rounded-md focus:outline-none bg-none' required></textarea><br></br>

            <button type="submit" className=' bg-blue-700  text-white w-[600px] py-[6px] mt-[50px] mb-[50px] rounded-md transition-all duration-300 hover:scale-105'  disabled={loading}> {loading ? (
                <ImSpinner9 className="animate-spin inline-block mr-2" />
              ) : (
                'SUBMIT'
              )}
</button>
          </form>
          <a href='/about'>
            <div className='bg-gray-500 shadow-2xl rounded-md  md:w-[600px] w-[500px] lg:w-[500px] h-[570px]  flex flex-col justify-end items-center' style={{ backgroundImage: `url('${baby}')`, backgroundPosition: 'center', backgroundSize: '700px', backgroundRepeat: 'no-repeat' }}>
              <div className='pb-[30px] text-center text-black font-bold'>
                <h1 className='text-[30px] font-semi-bold uppercase font-[Helvetica]'>About me</h1>
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
    </div>
  );
}

export default Contact;
