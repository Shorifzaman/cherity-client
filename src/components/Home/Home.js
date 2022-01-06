
import React from 'react';
// import Sliders from './../Hero/Sliders';
import Banner from './Banner/Banner';
import Contact from './Contact/Contact';
import OurAchievement from './OurAchivement/OurAchievement';
import OurExpert from './OurExpert/OurExpert';
import ServiceDetail from './Services/ServiceDetail';
import Services from './Services/Services';
import Testimonial from './Testimonial/Testimonial';
import Servicesmy from './../Services/Servicesmy';
import About from './../About/About';
import DonationWidget from './../Donation/DonationWidget';

const Home = () => {
    return (
        <>
            <Banner />
            <Services />
            <ServiceDetail></ServiceDetail>
            <About></About>
            <OurAchievement />
            <OurExpert />
            <Testimonial />
            <DonationWidget></DonationWidget>
            <Servicesmy></Servicesmy>
            <Contact />
        </>
    );
};

export default Home;