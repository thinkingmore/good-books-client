import React from 'react';
import { useLoaderData } from 'react-router-dom';

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
                                <span className='mx-2 fs-6'>Original Price: ${book.original_price}</span>
                                <span className='mx-2 fs-6'>Resell Price: ${book.resale_price}</span>
                            </div>
                            <div className="my-2 d-flex justify-content-between">
                                <span className='mx-2 fs-6'>Location: {book.location}</span>
                                <span className='mx-2 fs-6'>Used about {book.years_of_use} years</span>
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