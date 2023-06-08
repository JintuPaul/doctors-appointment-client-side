import React from "react";
import first from "../../../assets/about/doctor.jpg";
import second from "../../../assets/about/patient2.jpg";
import { Link } from "react-router-dom";
const AboutBanner = () => {
  return (
    <section className="Section01 text-center">
      <div className="flex justify-center items-center h-[100vh] md:h-[75vh]  md:px-10 mb-20">
        <div className=" text-start container items-center grid grid-cols-1 md:grid-cols-2 gap-2 mt-10">
          <div className="mr-5 ml-5 lg:ml-0 lg:mr-16 ">
            <h2 className="text-5xl font-[emoji] font-semibold text-start">About Keep Smile</h2>
            <p className="text-justify mt-4 mb-6 text-lg mr-5 font-[sans-serif]">
            Welcome to our keep smile hospital, where your oral health is our top priority! We understand that scheduling a dental appointment can sometimes be a daunting task, but we assure you that your comfort and care are at the forefront of our practice. In this section, we will guide you through the process of booking an appointment with our skilled and compassionate team of dental professionals.
            </p>
            <Link to='/appointment' className="py-2 px-4 text-white text-xl font-semibold mb-4 banner-btn">Get Booking</Link>
          </div>

          <div className="relative items-center flex justify-center md:mt-5">
            <img className="w-[75%] h-[50vh] rounded-md" src={first} alt="" />
            <div className="absolute h-[65%] w-[50%] bottom-[-90px] left-[-10px] border shadow-2xl">
              <img className="w-[100%] h-[100%]" src={second} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutBanner;
