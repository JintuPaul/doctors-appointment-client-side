import React from "react";
import { Link } from "react-router-dom";

const Primary = ({ primary }) => {
  const { name, img } = primary;
  return (
    <div>
      <div className="grid grid-cols-2 gap-2 shadow-xl">
        <figure>
          <img className="h-full"
            src={img}
            alt=""
          />
        </figure>
        <div className="">
          <Link to={`/priDetails/${primary._id}`} className="text-lg font-semibold text-white">{name}</Link>
          <p>Click the button to watch on Jetflix app.</p>
        </div>
      </div>
    </div>
  );
};

export default Primary;
