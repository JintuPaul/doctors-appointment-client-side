import React from 'react';
import fluoride from '../../../assets/images/fluoride.png'
import cavity from '../../../assets/images/cavity.png'
import teeth from '../../../assets/images/whitening.png'
import Service from './Service';

const Services = () => {
    const services = [
        {
            id:1,
            name: 'Fluoride Treatment',
            img: fluoride,
            title: "At keep smile hospital, we prioritize your dental health and strive to provide comprehensive care to help you maintain a beautiful smile."
        },
        {
            id:2,
            name: 'Cavity Filling',
            img: cavity,
            title: "If you're experiencing tooth pain or sensitivity, it may be a sign of a cavity. At keep smile hospital, we specialize in expert cavity filling procedures to restore the health and beauty of your teeth"
        },
        {
            id:3,
            name: 'Teeth Whitening',
            img: teeth,
            title: "If you're looking to enhance your smile and restore its natural radiance, professional teeth whitening at keep smile hospital is the answer. Our dental experts understand the impact of a bright, white smile on your confidence and self-esteem."
        }
    ]
    return (
       <div className='m-auto max-w-[1280px]'>
        <div className='text-center py-3'>
            <h4 className=' text-xl font-bold text-teal-500 mb-3'>OUR SERVICES</h4>
            <h4 className='text-3xl font-semibold'>Services We Provide</h4>
        </div>
         <div className='grid grid-cols-1 lg:grid-cols-3 py-10 gap-3'>
            {
                services.map(service => <Service
                    key={service.id}
                    service={service}
                >
                </Service>
                )
            }
        </div>
       </div>
    );
};

export default Services;