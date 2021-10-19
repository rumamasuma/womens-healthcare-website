import React from 'react';
import AboutUs from '../AboutUs/AboutUs';

import Banner from '../Banner/Banner';
import Mission from '../Mission/Mission';
import Services from '../Services/Services';


const Home = () => {
    return (
        <div id = "home">
            <Banner></Banner>
            <Services></Services>
            <AboutUs></AboutUs>
            <Mission></Mission>
        </div>
    );
};

export default Home;