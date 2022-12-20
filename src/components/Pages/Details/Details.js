import React, { useRef } from 'react';
import { FaAddressBook, FaHome, FaPen, FaPhone } from 'react-icons/fa';
import emailjs from '@emailjs/browser';


const Details = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(`${process.env.REACT_APP_EJ_SID}`, `${process.env.REACT_APP_EJ_TID}`, form.current, `${process.env.REACT_APP_EJ_PK}` )
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };
    return (
        <div>
            <div className='w-75 mx-auto text-center'>
                <h3>About Us</h3>
                <p>Good Books is a noble intiative to increase reading habits among people.
                   We take no profit from the transaction from our web page.We only charge a 
                   small amount of maintainance fee from our members.
                </p>
            </div>
            <div className='row w-75 mx-auto my-5'>
                <div className="col-lg-4 text-center">
                    <div className='border py-2' style={{ height: '8rem' }} >
                        <div className='fs-2 mb-2'>
                            <FaHome></FaHome>
                        </div>
                        <p>
                            Ap #651-8679 Sodales Av.
                            <br/>
                            Tamuning PA 10855 
                        </p>
                    </div>        
                </div> 
                <div className="col-lg-4 text-center">
                    <div className='border py-2' style={{ height: '8rem' }} >
                        <div className='fs-2 mb-2'>
                            <FaPhone></FaPhone>
                        </div>
                        <p>
                            +792 346568
                        </p>
                    </div>        
                </div> 
                <div className="col-lg-4 text-center">
                    <div className='border py-2' style={{ height: '8rem' }}>
                        <div className='fs-2 mb-2'>
                            <FaPen></FaPen>
                        </div>
                        <p>
                           goodbooks@gmail.com
                        </p>
                    </div>        
                </div> 
            </div>
            <div className="row">
            <div id="contact" className='mx-auto' style={{maxWidth:"40rem"}}>
                    <h2 className='my-6 text-center'> Contact Us</h2>
                    {/* <Jotform src="https://form.jotform.com/223433440146447"></Jotform> */}
                    <form ref={form} onSubmit={sendEmail}>
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlInput1"  className="form-label">Name</label>
                            <input type="text" name="user_name" className="form-control"  placeholder="Name"/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlInput1"  className="form-label">Email</label>
                            <input type="email" name="user_email"  className="form-control"  placeholder="Email"/>
                        </div>
                        <div className="mb-3">
                            <textarea className="form-control" name="message"  rows="3"/>
                        </div>
                        <button type="submit" className="btn btn-primary mb-3">Send</button>
                    </form>       
                </div>
            </div>
        </div>
    );
};

export default Details;