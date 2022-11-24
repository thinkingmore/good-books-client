import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Card } from 'react-bootstrap';

const Categories = () => {
    const { data: categories = [] } = useQuery({
        queryKey: ['categories'],
        queryFn: () => fetch('categories.json')
        .then(res=> res.json())
    });

    return (
        <div className='row row-cols-lg-3 row-cols-md-3 row-cols-sm-1 row-cols-1 mx-0'>
            {
                categories.map(category=>
                    <div className="card px-0 mt-2">
                        <img className="card-img-top" src={category.img} alt="cateegories"/>
                        <div className="card-img-overlay pt-5  text-center text-white">
                            <h4 className="card-title mt-5">{category.category_name}</h4>
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default Categories;