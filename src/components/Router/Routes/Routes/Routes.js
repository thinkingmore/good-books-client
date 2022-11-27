import React from 'react';
import Main from '../../../Layout/Main/Main';
import Blog from '../../../Pages/Blog/Blog';
import Category from '../../../Pages/Category/Category';
import Admin from '../../../Pages/Dashboard/Admin';
import Dashboard from '../../../Pages/Dashboard/Dashboard';
import MyProduct from '../../../Pages/Dashboard/MyProduct';
import AllBuyer from '../../../Pages/Dashboard/Admin/Users/AllBuyer';
import AllSeller from '../../../Pages/Dashboard/Admin/Users/AllSeller';
import Home from '../../../Pages/Home/Home/Home';
import Login from '../../../Pages/Login/Login/Login';
import SignUp from '../../../Pages/Login/SignUp/SignUp';
import NotFound from '../../../Pages/NotFound/NotFound';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import Report from '../../../Pages/Dashboard/Admin/Users/Report/Report';
import AdminRoute from '../AdminRoute/AdminRoute';


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
                element:<PrivateRoute><Category></Category></PrivateRoute>,
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
                element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>
            },
            {
                path: '/myproducts',
                element: <PrivateRoute><MyProduct></MyProduct></PrivateRoute>
            },
            {
                path: '*',
                element: <NotFound></NotFound>
            },
            {
                path: '/admin',
                element:<PrivateRoute><AdminRoute><Admin></Admin></AdminRoute></PrivateRoute>
            },
            {
                path: '/allsellers',
                element: <PrivateRoute><AdminRoute><AllSeller></AllSeller></AdminRoute></PrivateRoute>
            },
            {
                path: 'allbuyers',
                element:<PrivateRoute><AdminRoute><AllBuyer></AllBuyer></AdminRoute></PrivateRoute>
            },
            {
                path: 'Report',
                element: <PrivateRoute><AdminRoute><Report></Report></AdminRoute></PrivateRoute>
            }
        ]
    }
])

