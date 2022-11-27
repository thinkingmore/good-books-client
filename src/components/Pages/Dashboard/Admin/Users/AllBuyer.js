import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';

const AllBuyer = () => {
    const { data: users = [],refetch} = useQuery({
        queryKey: ['users'],
        queryFn: () => fetch(`http://localhost:5000/allusers/buyer`)
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
            <ul class="nav flex-column text-center p-4">
                <li class="nav-item">
                    <Link class="nav-link active" to="/allbuyers">All Buyers</Link>
                </li>
                <li class="nav-item">
                    <Link class="nav-link" to="/allsellers">All Sellers</Link>
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

export default AllBuyer;