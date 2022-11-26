import { useQuery } from '@tanstack/react-query';
import React from 'react';

const Buyer = () => {
    const { data: bookings = [] } = useQuery({
        queryKey: ['bookings'],
        queryFn: () => fetch('http://localhost:5000/orders')
        .then(res=> res.json())
        
    });
    return (
        <div>
            {
                bookings.map(book =>console.log(book))
                
            }
        </div>
    );
};

export default Buyer;