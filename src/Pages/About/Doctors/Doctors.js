import React from 'react';
import first from '../../../assets/about/doctors/1.jpg'
import second from '../../../assets/about/doctors/2.jpg'
import third from '../../../assets/about/doctors/3.jpg'
import fourth from '../../../assets/about/doctors/4.jpg'
import Doctor from './Doctor';
const Doctors = () => {
    const doctors = [
            {
                id: 1,
                name: "DR. Nicholas ",
                description: "Cosmetic Dentistry",
                img: first,
                bgColor: "bg-cyan-600"
            },
            {
                id: 2,
                name: "DR. Jessisa Tailor",
                description: "Teeth Orthodontics",
                img: second,
                bgColor: "bg-cyan-600"
            },
            {
                id: 3,
                name: "DR. Brain Adam",
                description: "Teeth Cleaning",
                img: fourth,
                bgColor: "bg-cyan-600"
            }
    ]
    return (
        <div className='m-auto max-w-[1280px]'>
            <div className='m-auto w-2/3'>
            <h2 className='text-4xl font-medium text-center'>Our <span className='text-[#1196CC]'>Dentist</span></h2>
            <p className='mt-4 mb-6 text-lg mr-5 font-[sans-serif] text-center '>At Our Doctor, we are proud to have a team of dedicated and compassionate doctors who are committed to providing exceptional medical care to our patients.</p>
            </div>
            <div className='grid grid-cols-1 mx-6 lg:mx-0 md:grid-cols-2 lg:grid-cols-3 gap-6 py-10'>
            
           {
               doctors.map(doc => <Doctor
                    doc={doc}
                    key={doc.id}
               ></Doctor>)
           }
        </div>
        </div>
    );
};

export default Doctors;