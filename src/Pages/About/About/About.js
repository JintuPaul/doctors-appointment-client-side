import React from 'react';
import AboutBanner from '../AboutBanner/AboutBanner';
import Choose from '../Choose/Choose';
import Primaries from '../Primary/Primaries';
import Doctors from '../Doctors/Doctors';

const About = () => {
    return (
        <div>
            <AboutBanner/>
            <Choose></Choose>
            {/* <Primaries/> */}
            <Doctors/>
        </div>
    );
};

export default About;