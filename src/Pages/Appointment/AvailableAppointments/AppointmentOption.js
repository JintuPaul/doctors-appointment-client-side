import React from "react";

const AppointmentOption = ({ appointmentOptions, setTreatment }) => {
  const { name, slots, price, img } = appointmentOptions;
  return (
    <div className="shadow-2xl rounded-xl text-center">
        <div>
            <img className=" w-full" src={img} alt="" />
        </div>
      <div className="py-6">
      <h2 className="text-sky-400 font-bold text-2xl"> {name}</h2>
      <p>{slots.length > 0 ? slots[0] : "try another day"}</p>
      <p className="mb-3">
        {slots.length} {slots.length > 1 ? "spaces" : "space"} available
      </p>
      <p className="text-lg">price: <small className="text-sky-400 font-bold">${price}</small></p>
      <button>
        <label
          disabled={slots.length === 0}
          htmlFor="booking-modal"
          className="btn btn-primary text-white mt-4"
          onClick={() => setTreatment(appointmentOptions)}
        >
          Book Appointment
        </label>
      </button>
      </div>
    </div>
  );
};

export default AppointmentOption;
