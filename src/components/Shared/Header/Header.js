import React, { useContext } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';


const Header = () => {

    const { user, logOut } =  useContext( AuthContext)
    const handleLogOut = () => {
        logOut()
        .then( () => {})
        .catch( error => console.log(error))
        toast.success("Log out successfull")
    }
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
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/blog">Blog</Link>
                        </li>
                        {
                            user?
                            <>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/dashboard">Dashboard</Link>
                                </li>                      
                                <li className="nav-item">
                                    <Link className="nav-link disabled"><small>{ user?.email}</small></Link>
                                </li>
                                <li className="nav-item">
                                    <Link onClick={ handleLogOut } className="nav-link">Logout</Link>
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
                <Toaster/>
            </div>
        </nav>
    );
};

export default Header;