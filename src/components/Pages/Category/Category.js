import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { FaCheckCircle } from 'react-icons/fa';
import BookingModal from './BookingModal';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import { useFetch } from '../../../hooks/useFetch';
import { Button } from 'react-bootstrap';
import toast from 'react-hot-toast';

const Category = () => {

    const { user } = useContext(AuthContext); 
    const [ userInfo ] = useFetch(user?.email)
 
    const books = useLoaderData();

    const handleReportToAdmin = (id) => {
        fetch(`http://localhost:5000/report/${id}`, {
            method: 'PUT', 
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount > 0){
                toast.success(`The product has been reported to admin`)
               
            }
        })
        .catch(error=>console.log(error))
    }
 
    return (
        <div className="row row-cols-1 g-0">
            {   
                books.map(book=>              
                <div className="mx-auto"
                    key={book._id}
                    >
                   <div className="card my-2 d-flex">
                       <div className="row px-4">
                        <div className="col-lg-4 col-sm-2">
                            <img className='img-fluid' style={{maxWidth: "18rem"}} src={book.img} alt="" />
                        </div>
                        <div className="col-lg-8 py-5">
                            <h3 className='my-2'>{book.name}</h3>
                            <div className="my-2 d-flex justify-content-between">
                                <span className='mx-2 fs-6'><strong>Original Price:</strong> ${book.original_price}</span>
                                <span className='mx-2 fs-6'><strong>Resell Price:</strong> ${book.resale_price}</span>
                            </div>
                            <div className="my-2 d-flex justify-content-between">
                                <span className='mx-2 fs-6'><strong>Location:</strong> {book.location}</span>
                                <span className='mx-2 fs-6'>Used about {book.years_of_use} years</span>
                            </div>
                            <div className="my-2 d-flex justify-content-between">
                                <span className='mx-2 fs-6'><strong>Posted on:</strong> {book.time_of_posting}</span>
                                <span className='mx-2 fs-6'><strong>Seller Name:</strong> {book.seller_name} 
                                { book.seller_status && <span className='ms-2 text-primary'><FaCheckCircle/></span>}</span>                    
                            </div>
                            <div className='mt-4 d-flex justify-content-between'>
                                {
                                    userInfo.role ==="buyer" && 
                                    <Button onClick={()=>handleReportToAdmin(book._id)} variant="dark text-white">Report to Admin</Button>
                                }
                                { userInfo.role === "buyer" &&  book?.available !== "no" &&
                                    <BookingModal 
                                        book={book}
                                        user={user}
                                        userInfo= {userInfo}
                                    ></BookingModal>
                                }
                                {
                                    userInfo.role === "seller"  &&
                                        <Button variant="primary" size="md" disabled>
                                            Book Now
                                        </Button>
                                } 
                                {
                                    book.available === "no" && 
                                    <p className='badge bg-light text-dark'>This book has been already sold</p>
                                }                          
                            </div>
                        </div>
                       </div>
                   </div>
                </div>
            )
            }
        </div>
    );
};

export default Category;