import { useQuery } from '@tanstack/react-query';
import React from 'react';


const Advertised = () => {

    const { data: advertise = [] } = useQuery({
        queryKey: ['advertise'],
        queryFn: () => fetch('http://localhost:5000/avertised/')
        .then(res=> res.json())
    });

    return (
        
        <div className='my-4'>
            {
                advertise?.length > 0 &&
                <>
                <h2 className="text-center my-4">Advertised Products {advertise?.length} </h2>
                <div className="row row-cols-lg-3 mx-0 row-cols-md-2 row-cols-sm-1 row-cols-xs-1">
                    {               
                        advertise.map(adv=>
                            <div className="card mb-3" style={{maxWidth:"20rem"}}
                                key={adv._id}
                            >
                                <div>
                                <div className="col-md-4">
                                    <img src={adv.img} className="img-fluid rounded-start" alt="..."/>
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                    <h5 className="card-title">{adv.name}</h5>
                                    <p><span className='fw-bold'>Category:</span> {adv.category_name}</p>
                                    <p><span className='fw-bold'>Price:</span> {adv.resale_price}</p>
                                    <p><span className='fw-bold'>Seller:</span> {adv.seller_name}</p>
                                    <p><span className='fw-bold'>Used for:</span> {adv.years_of_use}</p>
                                    <p><span className='fw-bold'>Posted on:</span> {adv.time_of_posting}</p>
                                    </div>
                                </div>
                                </div>
                            </div> 
                            
                        )          
                    }
                </div>
             </>         
            }        
        </div>
    );
};

export default Advertised;