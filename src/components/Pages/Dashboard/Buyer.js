import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';

const Buyer = () => {
    const { data: bookings = [],refetch } = useQuery({
        queryKey: ['bookings'],
        queryFn: () => fetch('http://localhost:5000/orders')
        .then(res=> res.json())
        
    });

    const handleDelete = id => {
        fetch(`https://doctors-portal-server-rust.vercel.app/doctors/${id}`, {
            method: 'DELETE', 
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount > 0){
                refetch();
                toast.success(`Item ${id} deleted successfully`)
            }
        })
    }
    return (
        <div>
            <h3 className='text-center mt-2'>My orders</h3>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">Serial</th>      
                        <th scope="col">Cover</th>
                        <th scope="col">Name</th>
                        <th scope="col">Price</th>
                        <th scope="col">Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        bookings.map((book,i) => 
                            <tr>
                                <td>{i +1 }</td>
                                <td><img src= {book?.img} style={{height: "150px", width: "120px"}}  alt="book-cover"/></td>
                                <td>{book.book_name}</td>                 
                                <td>{book.price}</td>
                                <td><button type="button" className="btn btn-primary my-2">Delete</button></td>
                            </tr>   
                        )                
                    }       
                </tbody>
            </table>                 
        </div>
    );
};

export default Buyer;