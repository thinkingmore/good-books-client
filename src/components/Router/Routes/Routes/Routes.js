import React from 'react';
import Main from '../../../Layout/Main/Main';
import Category from '../../../Pages/Category/Category';
import Home from '../../../Pages/Home/Home/Home';
const {createBrowserRouter} = require('react-router-dom');

export const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children: [
            {
                path: '/',
                element:<Home></Home>
            },
            {
                path: '/category/:id',
                element:<Category></Category>,
                loader: ({params})=>fetch(`http://localhost:5000/books/${params.id}`)
            }
        ]
    }
])

