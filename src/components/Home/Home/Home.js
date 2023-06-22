import React from 'react';
import Header from '../Header/Header';
import FoodContainer from '../FoodContainer/FoodContainer';
import Service from '../Service/Service';
import Footer from '../Footer/Footer';

const Home = () => {
    return (
        <div className='relative'>
            <Header />
            <FoodContainer />
            <Service />
            <Footer />
        </div>
    );
};

export default Home;