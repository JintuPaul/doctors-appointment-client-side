import React from 'react';
import clock from "../../../assets/icons/clock.svg";
import market from "../../../assets/icons/marker.svg";
import phone from "../../../assets/icons/phone.svg";
import InfoCards from './InfoCards';

const InfoItems = () => {
    const infoCards = [
        {
            id: 1,
            name: "Opening Hours",
            description: "Lorem Ipsum is simply dummy text of the pri",
            img: clock,
            bgColor: "bg-cyan-600"
        },
        {
            id: 2,
            name: "Visit our location",
            description: "Brooklyn, NY 10036, United States",
            img: market,
            bgColor: "bg-gray-800"
        },
        {
            id: 3,
            name: "Contact us now",
            description: "+8801757146195",
            img: phone,
            bgColor: "bg-sky-500"
        },
    ]
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 py-10'>
           {
                infoCards.map(info => <InfoCards
                    info={info}
                    key={info.id}
                ></InfoCards>)
           }
        </div>
    );
};

export default InfoItems;