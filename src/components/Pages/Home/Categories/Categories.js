import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Link } from 'react-router-dom';

const Categories = () => {
    const { data: categories = [] } = useQuery({
        queryKey: ['categories'],
        queryFn: () => fetch('https://good-books-server.vercel.app/categories')
        .then(res=> res.json())
    });

    return (
        <div className='my-5'>
            <h2 className='text-center mb-5'>Our Collection</h2>
            <div className='row row-cols-lg-3 row-cols-md-3 row-cols-sm-1 row-cols-1 mx-0'>
            {
                categories.map((category,i)=>
                    <Link to={`/category/${category.category_name}`}
                        key={i}
                        >
                        <div className="card px-0 mt-2 mb-2">
                        <img className="card-img-top" src={category.img} alt="cateegories"/>
                        <div className="card-img-overlay pt-5 text-center text-white">
                            <h4 className="card-title mt-5 bg-dark opacity-75 text-uppercase">{category.category_name}</h4>
                        </div>
                    </div>
                    </Link>
                    
                )
            }
            </div>
        </div>
       
    );
};

export default Categories;