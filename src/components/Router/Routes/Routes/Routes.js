import React from 'react';
import Main from '../../../Layout/Main/Main';
import Blog from '../../../Pages/Blog/Blog';
import Category from '../../../Pages/Category/Category';
import Dashboard from '../../../Pages/Dashboard/Dashboard';
import MyProduct from '../../../Pages/Dashboard/MyProduct';
import Home from '../../../Pages/Home/Home/Home';
import Login from '../../../Pages/Login/Login/Login';
import SignUp from '../../../Pages/Login/SignUp/SignUp';
import NotFound from '../../../Pages/NotFound/NotFound';
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
            },
            {
                path: '/login',
                element:<Login></Login>
            },
            {
                path: '/signup',
                element:<SignUp></SignUp>
            },
            {
                path: '/blog',
                element:<Blog></Blog>
            },
            {
                path: '/dashboard',
                element:<Dashboard></Dashboard>
            },
            {
                path: '/myproducts',
                element: <MyProduct></MyProduct>
            },
            {
                path: '*',
                element: <NotFound></NotFound>
            }
        ]
    }
])

