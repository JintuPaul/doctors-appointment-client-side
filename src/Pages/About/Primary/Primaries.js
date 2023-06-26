import React, { useEffect, useState } from 'react';
import Primary from './Primary';

const Primaries = () => {
    const [primaryOptions, setPrimaryOptions]  = useState([])
    useEffect(() => {
        fetch("http://localhost:5000/primary")
          .then((res) => res.json())
          .then((data) => {
            setPrimaryOptions(data);
          });
      }, []);
    return (
        <div className='bg-[#e5f0fb] px-8 py-16 my-20'>
            <h1 className='text-4xl font-bold text-sky-900 text-center my-6 '>First Aid</h1>
            <p className='pb-10 w-1/2 m-auto font-[sans-serif] text-[16px]'>When it comes to dental emergencies, knowing how to provide immediate first aid can make a significant difference in preserving your oral health and minimizing discomfort.</p>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-6 m-auto max-w-[1280px]'>
            {
                primaryOptions.map( primary => <Primary
                    key={primary._id}
                    primary={primary}
                ></Primary>)
            }
            </div>
        </div>
    );
};

export default Primaries;