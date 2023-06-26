import React from 'react';
import banner from '../../../assets/images/chair.png'
import './banner.css'
import { Link } from 'react-router-dom';
const Banner = () => {
    return (
        <div className='m-auto max-w-[1280px]'>
            <div className='grid grid-cols-1 lg:grid-cols-2 justify-center py-20 items-center mx-6 lg:mx-0'>
            <div className=''>
                <h1 className='text-5xl font-[emoji] font-semibold'>Your New Smile Starts <br /> Here</h1>
                <p className='mt-4 mb-6 text-lg mr-5 font-[sans-serif]'>At Keep smile hospital, we understand the importance of a confident and radiant smile. That's why we're dedicated to providing exceptional dental care that will give you the smile you've always dreamed of. With our state-of-the-art facilities and experienced team of dental professionals, we're here to transform your dental health and enhance your overall well-being.</p>
                <Link to='/appointment' className="py-2 px-4 text-start text-white text-xl font-semibold mb-6 banner-btn">Get Booking</Link>
            </div>
            <div className='mt-8 lg:mt-0'>
                <img src={banner} alt="" />
            </div>
        </div>
        </div>
    );
};

export default Banner;