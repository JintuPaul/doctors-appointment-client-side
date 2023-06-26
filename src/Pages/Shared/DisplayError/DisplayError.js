import React, { useContext } from "react";
import { useNavigate, useRouteError } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider";


const DisplayError = () => {
  const error = useRouteError();
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate()
  const handleLogOut = () => {
    logOut()
      .then(() => {
        navigate('/login')
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="text-center">
      <h1 className="text-3xl font-semibold text-red-600">Oops!</h1>
      <p className="text-red-500 font-semibold">Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <h2 className="text-lg font-medium">please <button className="btn btn-ghost font-semibold" onClick={handleLogOut}> Login out</button></h2>
    </div>
  );
};

export default DisplayError;
