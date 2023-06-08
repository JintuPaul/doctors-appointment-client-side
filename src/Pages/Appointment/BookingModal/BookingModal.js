import { format, formatDistanceToNow } from "date-fns";
import React, { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthProvider";
import { toast } from "react-hot-toast";

const BookingModal = ({ treatment, setTreatment, selectedDate, refetch }) => {
  const { name, slots } = treatment;
  const date = format(selectedDate, 'PP');
  const { user } = useContext(AuthContext);
  const handleBooking = (event) => {
    event.preventDefault();
    const form = event.target;
    const slot = form.slot.value;
    const patientName = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;

    const booking = {
      appointmentDate: date,
      treatment: name,
      patient: patientName,
      slot,
      email,
      phone,
    };
    console.log(booking);

    fetch("http://localhost:5000/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking)
    })
      .then((res) => res.json())
      .then((data) => {
        if(data.acknowledged){
          setTreatment(null);
          toast.success("Booking confirmed...");
          refetch()
        }
        else{
          toast.error(data.message)
        }
      })

  };
  return (
    <>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold mb-4 text-center">{name}</h3>
          <form onSubmit={handleBooking}>
            <input
              name="date"
              type="text"
              value={date}
              className="input input-bordered  w-full mb-3"
              disabled
            />

            <select name="slot" className="select select-ghost w-full mb-4">
              {slots.map((slot, i) => (
                <option value={slot} key={i}>
                  {slot}
                </option>
              ))}
            </select>
            <input
              type="text"
              name="name"
              defaultValue={user?.displayName}
              disabled
              placeholder="Name"
              className="input input-bordered  w-full mb-3"
            />

            <input
              type="email"
              name="email"
              defaultValue={user?.email}
              readOnly
              placeholder="Your email"
              className="input input-bordered  w-full mb-3"
            />

            <input
              type="text"
              name="phone"
              placeholder="Phone number"
              className="input input-bordered  w-full mb-3"
            />

            <input
              className="mt-5 text-center w-full bg-slate-900 py-2 px-5 text-white font-bold rounded-xl"
              type="submit"
              value="Submit"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default BookingModal;
