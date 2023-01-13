import Carousel from 'react-bootstrap/Carousel';
import React from 'react';
import { Card } from 'react-bootstrap';

const Testimonial = () => {
    return (
        <div className='mt-5'>
            <h2 className='my-5 py-5 text-center'>Testimonial</h2>
            <Carousel variant="dark">
            <Carousel.Item>
                <div style={{maxWidth: "900px", margin:"auto"}}>
                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp"
                    alt="Generic placeholder" class="img-fluid img-thumbnail mt-4 mb-2 d-block"
                    style={{width: "200px"}}/>
                    <Carousel.Caption>
                        <h5>Fahim Faisal</h5>
                        <p>I have been using good books for several<br/> months,it has many
                            rare books in its collection   
                        </p>          
                    </Carousel.Caption>          
                </div>             
            </Carousel.Item>
            <Carousel.Item>   
                <div style={{maxWidth: "900px", margin:"auto"}}>
                    <img src="https://images.pexels.com/photos/1300402/pexels-photo-1300402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="Generic placeholder" class="img-fluid img-thumbnail mt-4 mb-2 d-block"
                    style={{width: "200px"}}/>
                    <Carousel.Caption>
                        <h5>Mir Hossain</h5>
                        <p>Good books is a good website,I highly recommend 
                            <br/>
                            it to everyone,I will definitely use their platform again.  
                        </p>          
                    </Carousel.Caption>          
                </div>  
            </Carousel.Item>
            <Carousel.Item>
                <div style={{maxWidth: "900px", margin:"auto"}}>
                    <img src="https://images.pexels.com/photos/709188/pexels-photo-709188.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="Generic placeholder" class="img-fluid img-thumbnail mt-4 mb-2 d-block"
                    style={{width: "200px"}}/>
                    <Carousel.Caption>
                        <h5>Rakibul Hasan</h5>
                        <p>Good books is a good website <br/>
                           I highty recommend it to everyone 
                        </p>          
                    </Carousel.Caption>          
                </div>  
            </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Testimonial;