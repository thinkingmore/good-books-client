import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';

const Admin = () => {
    const { data: users = [],refetch} = useQuery({
        queryKey: ['users'],
        queryFn: () => fetch(`http://localhost:5000/users`)
        .then(res=> res.json())      
    });

    const handleDelete = (id) => {
        fetch(`http://localhost:5000/users/${id}`, {
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
                            <Link className="nav-link active" to="/allsellers">All Buyers</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/allbuyers">All Sellers</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/report">Reported Items</Link>
                        </li>
                    </ul>
                </div>
                <div className='col-9'>
                <h3 className='text-center mt-2'>All Users</h3>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Serial</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Role</th>
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
                                <td>{
                                    user.role !== "admin" &&
                                    <button onClick={()=> handleDelete(user._id)} type="button" className="btn btn-danger btn-sm">Delete</button>
                                    }
                                </td>
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

export default Admin;