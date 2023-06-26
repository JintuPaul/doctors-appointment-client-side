import React from 'react';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import InfoItems from '../InfoCards/InfoItems';
import MakeAppointment from '../MakeAppointment/MakeAppointment';
import Services from '../Services/Services';
import Terms from '../Terms/Terms';
import Testimonial from '../Testimonial/Testimonial';
import Slider from '../Slider/Slider';

const Home = () => {
    return (
        <div>
            <Slider/>
            <Banner></Banner>
            <Terms></Terms>
            <InfoItems></InfoItems>
            <Services></Services>
            <MakeAppointment></MakeAppointment>
            <Testimonial></Testimonial>
            <Contact></Contact>
        </div>
    );
};

export default Home;