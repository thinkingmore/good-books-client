import React from 'react';
import About from '../About/About';
import Advertised from '../Advertised/Advertised';
import Banner from '../Banner/Banner';
import Categories from '../Categories/Categories';

const Home = () => {
    return (
        <>
          <Banner></Banner>
          <Advertised></Advertised>
          <About></About>
          <Categories></Categories>
        </>
        
    );
};

export default Home;