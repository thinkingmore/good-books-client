import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (       
        <div className="row p-4 align-items-center bg-light mx-auto">
        <div className="col-lg-7 p-3 p-lg-5">
            <div className="lc-block mb-3">
                <div editable="rich">
                    <h2 className="fw-bold display-4">Buy and Sell your used books&nbsp;<p></p>
                        <p></p>
                    </h2>
                </div>
            </div>
            <div className="lc-block mb-3">
                <div editable="rich">
                    <p className="lead">
                        Good Books is the best platform for buying and selling used books.Take a look at out collection.
                        Have some books that you would like to sell? Then put them for sale.
                    </p>
                </div>
            </div>
            <div className="lc-block d-grid gap-2 d-md-flex justify-content-md-start">
                <Link className="btn btn-dark px-4 me-md-2 keychainify-checked" href="#" role="button">Find Books</Link>               
            </div>
        </div>
        <div className="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
            <div className="lc-block"><img className="rounded-start" src="https://images.unsplash.com/photo-1618365908648-e71bd5716cba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="banner"/></div>
        </div>
    </div>  
    );
};

export default Banner;