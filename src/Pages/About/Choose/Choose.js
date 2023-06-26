import React from "react";
import "./choose.css";
import { FaHeartbeat, FaUsers, FaUserMd } from "react-icons/fa";
const Choose = () => {
  return (
    <div className="choose px-6 my-20 py-10 ">
      <h2 className="text-5xl font-semibold text-center text-white mb-10">
        Why Choose
      </h2>
      <div className="m-auto max-w-[1280px]">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mx-5 lg:mx-0 ">
          <div className="bg-white py-8 px-12 rounded-3xl shadow-2xl text-center choose-card">
            <span className=" font-bold text-4xl flex justify-center">
              <FaHeartbeat />
            </span>
            <h2 className="text-2xl my-5 font-semibold font-[cursive]">Quality Control System</h2>
            <p className=" mt-4 mb-6 mr-5 font-[sans-serif]">
            At Keep Smile, we understand the importance of a seamless and enjoyable experience for both patients and healthcare providers. One key factor that sets us apart is our robust Quality Control System.
            </p>
          </div>
          <div className="bg-white py-8 px-12 rounded-3xl shadow-2xl text-center choose-card">
            <span className=" font-bold text-4xl flex justify-center">
              <FaUsers />
            </span>
            <h2 className="text-2xl my-5 font-semibold font-[cursive]">Professional Staffs</h2>
            <p className=" mt-4 mb-6 mr-5 font-[sans-serif]">
            At Keep Smile, we pride ourselves on having a team of highly qualified and professional staff members dedicated to delivering exceptional care to our patients.
            </p>
          </div>
          <div className="bg-white py-8 px-12 rounded-3xl shadow-2xl text-center choose-card">
            <span className=" font-bold text-4xl flex justify-center">
              <FaUserMd />
            </span>
            <h2 className="text-2xl my-5 font-semibold font-[cursive]">Emergency Doctor</h2>
            <p className=" mt-4 mb-6 mr-5 font-[sans-serif]">
             At Keep Smile, we are proud to have a team of experienced and compassionate emergency doctors who specialize in providing urgent and life-saving care. 
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Choose;
