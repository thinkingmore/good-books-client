import React from 'react';
import { Container } from 'react-bootstrap';
import { Outlet} from 'react-router-dom';
import Header from '../../Shared/Header/Header';
import Footer from '../../Shared/Footer/Footer';

const Main = () => {
    return (
        <Container className="min-vw-100 px-5">
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>   
        </Container>                             
    );
};

export default Main;