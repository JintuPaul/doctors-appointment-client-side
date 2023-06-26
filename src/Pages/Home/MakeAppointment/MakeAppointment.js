import React from "react";
import appointment from "../../../assets/images/appointment.png";
import doctor from "../../../assets/images/doctor-small.png";
import { Link } from "react-router-dom";
const MakeAppointment = () => {
  return (
    <section
      className=" my-20"
      style={{
        background: `url(${appointment})`,
      }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 justify-center items-center my-32">
        <div>
          <img className=" -mt-32" src={doctor} alt="" />
        </div>
        <div className="mx-6 lg:mx-0 pb-10 lg:pb-0">
          <h3 className="text-xl font-bold text-sky-500">Appointment</h3>
          <p className="my-8 text-slate-200 text-lg mr-8 font-[sans-serif] text-justify">
            At Keep smile hospital, we understand the importance of convenience
            and flexibility when it comes to scheduling dental appointments. We
            have carefully crafted our working schedule to accommodate the needs
            of our patients. Our dedicated team of dental professionals is
            available to serve you during the following hours:
          </p>
          <Link
            to="/appointment"
            className="py-2 px-4 text-start text-white text-xl font-semibold mb-4 banner-btn"
          >
            Get Booking
          </Link>
        </div>
      </div>
    </section>
  );
};

export default MakeAppointment;
