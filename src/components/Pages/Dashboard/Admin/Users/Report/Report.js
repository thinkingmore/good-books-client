import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';

const Report = () => {
    const { data: report = [],refetch} = useQuery({
        queryKey: ['report'],
        queryFn: () => fetch(`https://good-books-server.vercel.app/report`)
        .then(res=> res.json())      
    });

    const handleDelete = (id) => {
        fetch(`https://good-books-server.vercel.app/report/${id}`, {
            method: 'DELETE', 
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount > 0){
                toast.success(`Item deleted successfully`)
               
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
            <h3 className='text-center mt-2'>Reported Items</h3>
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">Serial</th>
                    <th scope="col">Name</th>
                    <th scope="col">Price</th>
                    <th scope="col">Delete</th>
                </tr>
            </thead>
            <tbody>
                {
                    report.map((rt,i) => 
                        <tr
                            key={i}
                            >
                            <td>{i +1 }</td>
                            <td>{rt.name}</td>                 
                            <td>{rt.email}</td>
                            <td><button onClick={()=> handleDelete(rt._id)} type="button" className="btn btn-danger btn-sm">Delete</button></td>
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

export default Report;