import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
     <footer className='row row-cols-md-5 row-cols-sm-2 row-cols-1 py-5 my-5 border-top bg-dark text-white mx-auto'>
        <div className="col mb-3">
            <Link to="/" className="d-flex ms-5 align-items-center text-white mb-3 link-dark text-decoration-none keychainify-checked">
                <h5>Good Books</h5>
            </Link>
            <p className="text-muted ms-5">© 2022, Good Books</p>
        </div>
        <div className="col mb-3">
        </div>
        <div className="col mb-3">
            <h5>Section</h5>
            <ul className="nav flex-column">
            <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text-muted keychainify-checked">Home</Link></li>
            <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text-muted keychainify-checked">Features</Link></li>
            <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text-muted keychainify-checked">Pricing</Link></li>
            <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text-muted keychainify-checked">FAQs</Link></li>
            <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text-muted keychainify-checked">About</Link></li>
            </ul>
        </div>

        <div className="col mb-3">
            <h5>Section</h5>
            <ul className="nav flex-column">
            <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text-muted keychainify-checked">Home</Link></li>
            <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text-muted keychainify-checked">Features</Link></li>
            <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text-muted keychainify-checked">Pricing</Link></li>
            <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text-muted keychainify-checked">FAQs</Link></li>
            <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text-muted keychainify-checked">About</Link></li>
            </ul>
        </div>

        <div className="col mb-3">
            <h5>Section</h5>
            <ul className="nav flex-column">
            <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text-muted keychainify-checked">Home</Link></li>
            <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text-muted keychainify-checked">Features</Link></li>
            <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text-muted keychainify-checked">Pricing</Link></li>
            <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text-muted keychainify-checked">FAQs</Link></li>
            <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text-muted keychainify-checked">About</Link></li>
            </ul>
        </div>
     </footer> 
    
    );
};

export default Footer;