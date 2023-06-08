import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

import useAdmin from '../../Hooks/useAdmin';
import { AuthContext } from '../../contexts/AuthProvider';

const AdminRoute = ({children}) => {
   const {user, loading} = useContext(AuthContext)
   const [ isAdmin, isAdminLoading ] = useAdmin(user?.email)
    const location = useLocation()
    if(loading || isAdminLoading ){
        return <div className='text-center my-8' ><progress className="progress w-56"></progress></div>
    }
    if(user && isAdmin){
        return children;
    }
    return <Navigate to='/login' state={{from: location}} replace></Navigate>
};

export default AdminRoute;