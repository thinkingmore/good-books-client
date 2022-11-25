import React, { useContext } from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';


const Header = () => {

    const { user } =  useContext( AuthContext)
    return (
        <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
            <div className="container-fluid">
                <Link className="navbar-brand"to="/">Good Books</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page"to="/">Home</Link>
                        </li>
                        {
                            user?
                            <>
                                <li className="nav-item">
                                    <Link className="nav-link">Dashboard</Link>
                                </li>                      
                                <li className="nav-item">
                                    <Link className="nav-link disabled">{ user?.email}</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link">Logout</Link>
                                </li>
                                
                            </>
                                :  
                            <>
                                <li className="nav-item">
                                    <Link className="nav-link"to="/login">Login</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link"to="/signup">Sign up</Link>
                                </li>
                            
                            </>                    
                           
                        }
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;