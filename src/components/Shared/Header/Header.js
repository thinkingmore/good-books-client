import React, { useContext } from 'react';
import { Button, Container, Image, Nav, Navbar } from 'react-bootstrap';
import toast, { Toaster } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import { useFetch } from '../../../hooks/useFetch';


const Header = () => {

    const { user, logOut } =  useContext( AuthContext)

    const handleLogOut = () => {
        logOut()
        .then( () => {})
        .catch( error => console.log(error))
        toast.success("Log out successfull")
    }
    return (
        <Navbar collapseOnSelect className="mb-4" expand="lg" bg="dark" variant="dark">
        <Container>
            <Navbar.Brand><Link to='/' className='text-decoration-none text-white'>Good Books</Link></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
                <Nav.Link><Link to='/' className='text-decoration-none text-white'>Home</Link></Nav.Link>
                <Nav.Link><Link to='/blog' className='text-decoration-none text-white'>Blog</Link></Nav.Link>
                <Nav.Link><Link to='/dashboard' className='text-decoration-none text-white'>Dashboard</Link></Nav.Link>
                
            </Nav>
            <Nav>
                <Nav.Link href="#deets">
                    {
                        user?.uid ?
                        <>
                            <span className='me-2'>{user?.email}</span>
                            <Button variant="light" onClick={handleLogOut}>Log out</Button>
                        </>
                        :
                        <>
                            <Link to="/login" className='text-decoration-none text-white'>Login</Link>
                            <Link to="/signup" className='ms-2 text-decoration-none text-white'>Signup</Link>
                        </>
                    }
                </Nav.Link>
            </Nav>
            </Navbar.Collapse>
            <Toaster/>
        </Container>
    </Navbar>             
        
    );
};

export default Header;