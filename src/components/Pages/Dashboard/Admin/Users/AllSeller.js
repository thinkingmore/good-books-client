import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';

const AllSeller = () => {
    const { data: users = [],refetch} = useQuery({
        queryKey: ['users'],
        queryFn: () => fetch(`https://good-books-server.vercel.app/allusers/seller`)
        .then(res=> res.json())      
    });


    const handleAddStatus = (id) => {
        fetch(`https://good-books-server.vercel.app/allsellers/${id}`, {
            method: 'PUT', 
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount > 0){
                toast.success(`This user has become successfully verified`)       
            }
            refetch();
        })
        .catch(error=> console.error(error))
    }



    const handleDelete = (id) => {
        fetch(`https://good-books-server.vercel.app/users/${id}`, {
            method: 'DELETE', 
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount > 0){
                toast.success(`User deleted successfully`)
               
            }
            refetch();
        })
        .catch(error=> console.log(error))
    }
    return (
        <div>
            <div className="row row-cols-2">
                <div className='col-3 bg-light'>
                <ul className="nav flex-column text-center p-4">
                    <li className="nav-item">
                        <Link className="nav-link active" to="/allbuyers">All Buyers</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/allsellers">All Sellers</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/report">Reported Items</Link>
                    </li>
                </ul>
                </div>
                <div className='col-9'>
                <h3 className='text-center mt-2'>All Sellers</h3>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Serial</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Role</th>
                        <th scope="col">Verification</th>
                        <th scope="col">Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user,i) => 
                            <tr
                                key={i}
                                >
                                <td>{i +1 }</td>
                                <td>{user.name}</td>                 
                                <td>{user.email}</td>
                                <td>{user.role}</td>
                                <td>
                                    {    
                                        user.seller_status === "verified"?
                                        <span className="badge text-bg-light">Verfied</span>
                                        :
                                        <button onClick={()=> handleAddStatus(user._id)} type="button" 
                                        className="btn btn-primary btn-sm">Make verified</button>
                                    }
                                </td>
                                <td><button onClick={()=> handleDelete(user._id)} type="button" className="btn btn-danger btn-sm">Delete</button></td>
                            </tr>   
                        )                
                    }       
                </tbody>
            </table>   
            </div>
            </div>
        </div>
    );
};

export default AllSeller;