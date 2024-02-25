import React from 'react';
import Wedding from "../images/New folder/pot2.JPG"
import Navbar from "./Nav"
import Footer from "./Footer"
import { PotraitList } from "../helpers/Potraits"

const Portraits = () => {

  return (
    <div>
      <div style={{ backgroundImage: `url('${Wedding}')`, backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '60vh' }}>
        <Navbar />
        <div className="flex justify-center items-center text-center mb-[200px]">
          <div>
            <h1 className='text-[50px] lg:text-[66px] text-white font-[Helvetica]'>POTRAITS</h1>
          </div>
        </div>

      </div>
      <div className='mt-[50px] flex flex-col justify-center items-center'>
        <h2 className='text:[30px] lg:text-[40px] font-[Helvetica]'>Capturing the Essence of Personality </h2>
        <h2 className='text:[25px] lg:text-[30px] font-[Helvetica]'>My Passion for Portrait Photography</h2>
      </div>
      <hr className='mt-[50px]'></hr>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[35px] mt-[50px] px-10 rounded-md">
        {PotraitList.map((potrait, key) => (
          <div key={key} className="gridItem h-[500px] relative bg-black">
            <img
              src={potrait.image}
              className="w-full h-full object-cover"
              alt="portraits"
            />
          </div>
        ))}
      </div>


      <Footer />
    </div>
  );
}

export default Portraits;
