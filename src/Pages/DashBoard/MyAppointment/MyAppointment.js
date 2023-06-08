
import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider';
import { useQuery } from 'react-query';

const Myappointment = () => {
    const {user} = useContext(AuthContext)

    const url = `http://localhost:5000/bookings?email=${user?.email}`;
    const { data: bookings = [] } = useQuery({
        queryKey: ['bookings', user?.email],
        queryFn: async () => {
            const res = await fetch(url, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            })
            const data = await res.json()
            console.log(' bookings data: ',data)
            return data;
    }
    }) 
    
    return (
        <div>
            <h3 className='text-3xl font-semibold mb-5'>my appointment</h3>

            <div className="overflow-x-auto">
            <table className="table w-full">

                <thead>
                <tr>
                    <th></th>
                    <th>Name</th>
                    <th>Treatment</th>
                    <th>Date</th>
                    <th>Time</th>
                </tr>
                </thead>
                <tbody>
                    {
                        bookings.length > 0 &&
                        bookings?.map((booking, i) => <tr
                            key={booking._id}
                        >
                            <th>{i+1}</th>
                            <td>{booking?.treatment}</td>
                            <td>{booking?.patient}</td>
                            <td>{booking?.appointmentDate}</td>
                            <td>{booking?.slot}</td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
        </div>
    );
};

export default Myappointment;