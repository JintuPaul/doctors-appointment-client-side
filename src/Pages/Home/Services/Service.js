import React from 'react';

const Service = ({service}) => {
    const {img, id, title, name} = service;
    return (
        <div className='shadow-2xl p-5 rounded-xl text-center'>
            <div className='text-center w-full flex justify-center items-center '>
                <img className='text-center' src={img} alt="" />
            </div>
            <h2 className='text-2xl mb-3 mt-4 font-[cursive] font-semibold'>{name}</h2>
            <p className='font-[sans-serif] text-[16px]'>{title}</p>
        </div>
    );
};

export default Service;