import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import BookingModal from '../BookingModal/BookingModal';
import AppointmentOption from './AppointmentOption';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading/Loading';

const AvailableAppointments = ({selectedDate}) => {
    // const [appointmentOptions, setAppointmentOptions]= useState([])
    const [treatment, setTreatment] = useState(null)
    const date = format(selectedDate, 'PP')


    const {data: appointmentOptions = [], refetch, isLoading} = useQuery({
        queryKey: ['appointmentOptions', date],
        queryFn: async() =>{
            const res = await fetch(`http://localhost:5000/appointmentOptions?date=${date}`)
            const data = await res.json()
            return data
        }
    })
    if(isLoading){
        return <Loading/>
    }
    // useEffect(() => {
    //     fetch('appointment.json')
    //     .then(res => res.json())
    //     .then(data => {
    //         setAppointmentOptions(data)
    //     })
    // }, [])
    return (
        <div>
            <h2 className='text-center font-bold text-sky-400 text-lg'>Available Appointments {format (selectedDate, "PP")}</h2>

            <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 py-10'>
                {
                    appointmentOptions.map(option => <AppointmentOption
                        appointmentOptions = {option}
                        key={option._id}
                        setTreatment={setTreatment}
                    ></AppointmentOption>)
                }
            </div>
            {
                treatment &&
            <BookingModal
                treatment={treatment}
                selectedDate={selectedDate}
                refetch={refetch}
                setTreatment={setTreatment}
            ></BookingModal>}
        </div>
    );
};

export default AvailableAppointments;