import { format } from 'date-fns';
import React, { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import banner from '../../../assets/images/chair.png'
const AppointmentBanner = ({selectedDate, setSelectedDate}) => {
   
    return (
        <div className='m-auto max-w-[1280px]'>
            <div className='grid grid-cols-1 lg:grid-cols-2 justify-center py-20 items-center'>
            <div className=''>
            <DayPicker 
                mode='single'
                selected={selectedDate}
                onSelect={setSelectedDate}
            />
            </div>
            <div>
                <img src={banner} alt="" />
            </div>
        </div>
        </div>
    );
};

export default AppointmentBanner;