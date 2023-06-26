import React, { useContext } from 'react';
import Navbar from '../Pages/Shared/Navbar/Navbar';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';
import useAdmin from '../Hooks/useAdmin';

const DashboardLayout = () => {
    const {user} = useContext(AuthContext)
   const [isAdmin] = useAdmin(user?.email)
    return (
        <div>
            <Navbar/>
                <div className="drawer drawer-mobile">
                    <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                   <Outlet></Outlet> 
                </div> 
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label> 
                    <ul className="menu p-4 w-80 text-base-content border-r-2 border-b-slate-600 mr-6">
                    <li><Link to='/dashboard' className='text-xl font-semibold'>My appointment</Link></li>
                        {
                            isAdmin && <>
                                 <li><Link to='/dashboard/users' className='text-xl  font-semibold'>All users</Link></li>
                                 <li><Link to='/dashboard/addDoctor' className='text-xl  font-semibold'>Add a doctor</Link></li>
                                 <li><Link to='/dashboard/manageDoctors'className='text-xl  font-semibold'>Manage doctor</Link></li>
                            </>
                        }
                    </ul>
                
                </div>          
            </div>
        </div>
    );
};

export default DashboardLayout;