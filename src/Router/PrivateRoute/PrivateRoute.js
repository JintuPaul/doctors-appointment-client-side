import React, { Children, useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';


const PrivateRoute = ({children}) => {
   const {user, loading} = useContext(AuthContext)
    const location = useLocation()
    if(loading){
        return <div className='text-center my-8' ><progress className="progress w-56"></progress></div>
    }
    if(user){
        return children;
    }
    return <Navigate to='/login' state={{from: location}} replace></Navigate>
};

export default PrivateRoute;