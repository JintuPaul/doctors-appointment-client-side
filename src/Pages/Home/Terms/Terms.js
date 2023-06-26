import React from "react";
import treatment from "../../../assets/images/images.png";
import './terms.css'
import { Link } from "react-router-dom";
const Terms = () => {
  return (
    <div className="grid terms grid-cols-1 lg:grid-cols-2 items-center justify-center py-28 my-20 gap-10">
      <div>
        <img src={treatment} alt="" />
      </div>
      <div className="mx-6 lg:mx-0">
        <h1 className="text-5xl font-[emoji] font-semibold text-white">Working Schedule & <br /> Booking Management</h1>
        <p className="my-10 text-slate-200 text-lg mr-8 font-[sans-serif] text-justify">
        At Keep smile hospital, we understand the importance of convenience and flexibility when it comes to scheduling dental appointments. We have carefully crafted our working schedule to accommodate the needs of our patients. Our dedicated team of dental professionals is available to serve you during the following hours:
        </p>
        <Link to='/appointment' className="py-2 px-4 text-start text-white text-xl font-semibold mb-4 banner-btn">Get Booking</Link>
      </div>
    </div>
  );
};

export default Terms;
