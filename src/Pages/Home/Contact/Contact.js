import React from 'react';
import './contact.css'
const Contact = () => {
    return (
        <section className='contact-banner py-10 px-10 mb-10' >
           <form className='justify-center items-center text-center w-full md:w-2/5 m-auto'>
                <h3 className='font-semibold text-lg text-sky-500'>contact us</h3>
                <h2 className='text-4xl text-white font-semibold mb-7'>Stay connected with us</h2>
                <input className='w-full rounded-lg mb-5 p-3' type="email" name="text" id="" placeholder='Email'/>
                <input className='w-full rounded-lg mb-5 p-3' type="text" name="text" id="" placeholder='subject'/>
                <textarea name="" id="" placeholder='message' className='w-full h-24 rounded-lg p-3'></textarea>
                <input className='bg-sky-500 font-semibold text-white px-8 mt-3 rounded-lg py-2' type="submit" value="Submit" />
           </form>
       </section>
    );
};

export default Contact;