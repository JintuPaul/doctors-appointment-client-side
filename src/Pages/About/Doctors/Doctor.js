import React from "react";
import "./doctor.css";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
const Doctor = ({ doc }) => {
  const { name, id, description, img, bgColor } = doc;
  return (
    <div>
      <div className="doctor-card px-24 py-10">
        <div className="img-bx">
          <img className="flex justify-center w-full" src={img} alt="img" />
        </div>
        <div className="content mt-10">
          <div className="detail">
            <h2>
              {name}
              <br />
              <span>{description}</span>
            </h2>
            <ul className="sci">
              <li>
                <a href="#">
                  <i className="fab fa-facebook-f">
                    <FaFacebookF />
                  </i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fab fa-twitter">
                    <FaTwitter />
                  </i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fab fa-linkedin-in">
                    <FaLinkedinIn />
                  </i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fab fa-instagram">
                    <FaInstagram />
                  </i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Doctor;
