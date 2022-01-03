
import React from 'react';
// import Sliders from './../Hero/Sliders';
import Banner from './Banner/Banner';
import Contact from './Contact/Contact';
import OurAchievement from './OurAchivement/OurAchievement';
import OurExpert from './OurExpert/OurExpert';
import Services from './Services/Services';
import Testimonial from './Testimonial/Testimonial';
import Servicesmy from './../Services/Servicesmy';
import About from './../About/About';

const Home = () => {
    return (
        <>
            <Banner />
            {/* <Sliders></Sliders> */}
            <Services />
            <OurExpert />
            <About></About>
            <OurAchievement />
            <Testimonial />
            <Contact />
            <Servicesmy></Servicesmy>
        </>
    );
};

export default Home;