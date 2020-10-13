import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Appointment from '../Appointment/Appointment';
import Blog from '../Blog/Blog';
import Contact from '../Contact/Contact';
import Doctors from '../Doctors/Doctors';
import FeatureService from '../FeatureService/FeatureService';
import Header from '../Header/Header';
import Services from '../Services/Services';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    return (
        <>
        <Header></Header>
        <Services></Services>
        <FeatureService></FeatureService>
        <Appointment></Appointment>
        <Testimonial></Testimonial>
        <Blog></Blog>
        <Doctors></Doctors>
        <Contact></Contact>
        <Footer></Footer>
        </>
    );
};

export default Home;