import React from 'react';

const About = () => {
    return (
        <div className='bg-light py-4'>
            <div className="row my-5 text-center">
                <h2>Why Good Books</h2>
            </div>
            <div className='row row-cols-lg-2 align-items-center mx-auto row-cols-1 '>
                <div className='col-lg-7'>
                    <img className='img-fluid' src="https://images.unsplash.com/photo-1521056787327-165dc2a32836?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Ym9va3MlMjBzdG9yeXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="about" />
                </div>
                <div className='col-lg-4 my-2 p-4'>
                    <p className='fs-5 lh-base'>Good Books started as a noble intiative to save readers.Every year we 
                    process thousands of books.One can find many old books to our collection.
                    Sell the books that you don't need and buy some new.This is what we spread.
                    People love our service.
                    </p>
                </div>
            </div>
        </div>
        
    );
};

export default About;