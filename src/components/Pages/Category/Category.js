import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { FaCheckCircle } from 'react-icons/fa';


const Category = () => {
    const books = useLoaderData();
    console.log(books);
    
    return (
        <div className="row row-cols-1 g-0">
            {   
                books.map(book=>              
                <div className="mx-auto"
                    key={book._id}
                    >
                   <div className="card my-2 d-flex">
                       <div className="row px-4">
                        <div className="col-md-4">
                            <img className='img-fluid' style={{maxWidth: "18rem"}} src={book.img} alt="" />
                        </div>
                        <div className="col-md-7 py-5">
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