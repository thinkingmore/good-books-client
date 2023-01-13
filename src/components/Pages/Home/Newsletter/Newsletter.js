import React from 'react';

const Newsletter = () => {
    return (
        <div>
            <div class="row d-flex justify-content-center align-items-center rows">
            <h2 className='my-5 py-5 text-center'>Subscribe to our newsletter</h2>
                <div class="col-md-12">
                    <div class="card">
                        <div class="text-center">
                            <img src="https://img.freepik.com/premium-vector/email-newsletter-illustration_123815-37.jpg?w=2000" width="200"/>
                            <span class="d-block mt-3"><h4>Stay connected with us,subscribe to our newsletter</h4> <br/></span>

                            <div class="mx-5">
                            <div class="input-group mb-3 mt-4">
                                <input type="text" class="form-control" placeholder="Enter email" aria-label="Recipient's username" aria-describedby="button-addon2"/>
                                <button class="btn btn-primary border-rad" type="button" id="button-addon2">Subscribe</button>
                                </div>
                            </div>
                        </div>
                        
                    </div> 
                </div>
            </div>
        </div>
    );
};

export default Newsletter;