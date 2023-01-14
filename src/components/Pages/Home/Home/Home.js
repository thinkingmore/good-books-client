import React, { useContext, useEffect } from 'react';
import { AuthContext } from '../../../../contexts/AuthProvider/AuthProvider';
import { useFetch } from '../../../../hooks/useFetch';
import About from '../About/About';
import Advertised from '../Advertised/Advertised';
import Banner from '../Banner/Banner';
import Categories from '../Categories/Categories';
import Featured from '../Featured/Featured';
import Newsletter from '../Newsletter/Newsletter';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {

    return (
        <>
          <Banner></Banner>
          <Advertised></Advertised>
          <About></About>
          <Categories></Categories>
          <Featured></Featured>
          <Testimonial></Testimonial>
          <Newsletter></Newsletter>        
        </>
        
    );
};

export default Home;