import React from "react";
import { format } from "date-fns";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
const BookingModal = ({ treatment, date, setTreatment }) => {
  const { name, slots } = treatment;
  const [user, loading, error] = useAuthState(auth);

  if (user) {
    console.log(user.displayName)
  }

  const handleBooking = (e) => {
    e.preventDefault();
    const timeSlot = e.target.slot.value;
    console.log(timeSlot);
    setTreatment(null);
  };

  return (
    <div>
      <input type="checkbox" id="booking-modal"className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <label
            for="booking-modal"
           className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="font-bold text-xl text-secondary">Booking for: {name}</h3>
          <form
            onSubmit={handleBooking}
            className="grid grid-cols-1 gap-3 justify-items-center mt-2"
          >
            <input
              type="text"
              disabled
              value={format(date, "PP")}
             className="input input-bordered w-full max-w-xs"
            />
            <select name="slot"className="select select-bordered w-full max-w-xs">
              {slots.map((slot, index) => (
                <option key={index} value={slot}>{slot}</option>
              ))}
            </select>
            <input
              type="text"
              name="name"
              disabled
              value={user?.displayName}
             className="input input-bordered w-full max-w-xs"
            />
            <input
              type="email"
              name="email"
              disabled
              value={user?.email}
             className="input input-bordered w-full max-w-xs"
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone"
             className="input input-bordered w-full max-w-xs"
            />
            <input
              type="submit"
              value="Submit"
             className="btn btn-secondary w-full max-w-xs"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
