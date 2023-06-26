import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";

import { createBrowserRouter } from "react-router-dom";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Appointment from "../Pages/Appointment/Appointment/Appointment";
import DashBoard from "../Pages/DashBoard/DashBoard/DashBoard";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import DashboardLayout from "../Layout/DashboardLayout";
import MyAppointment from "../Pages/DashBoard/MyAppointment/MyAppointment";
import AllUsers from "../Pages/DashBoard/AllUsers/AllUsers";
import AdminRoute from "./AdminRoute/AdminRoute";
import AddDoctor from "../Pages/DashBoard/AddDoctor/AddDoctor";
import About from "../Pages/About/About/About";
import ManageDoctors from "../Pages/DashBoard/ManageDoctors/ManageDoctors";
import PrimaryDetails from "../Pages/About/Primary/PrimaryDetails";
import Payment from "../Pages/DashBoard/Payment/Payment";
import DisplayError from "../Pages/Shared/DisplayError/DisplayError";



const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <DisplayError/>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <SignUp></SignUp>

            },
            {
                path: '/appointment',
                element: <Appointment></Appointment>
            },
            {
                path: '/about',
                element: <About></About>
            },
        ]  
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        errorElement: <DisplayError/>,
        children: [
            {
                path: '/dashboard',
                element: <MyAppointment/>
            },
            {
                path: '/dashboard/users',
                element:<AdminRoute><AllUsers/></AdminRoute>
            },
            {
                path: '/dashboard/addDoctor',
                element: <AdminRoute><AddDoctor/></AdminRoute>
            },
            {
                path: '/dashboard/manageDoctors',
                element: <AdminRoute><ManageDoctors/></AdminRoute>
            },
            {
                path: '/dashboard/payment/:id',
                element: <Payment/>,
                loader: ({params}) => fetch(`http://localhost:5000/bookings/${params.id}`)
            }
        ]
    }
])
export default router;