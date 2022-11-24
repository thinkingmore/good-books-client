import React from 'react';
import Main from '../../../Layout/Main/Main';
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
            }
        ]
    }
])

