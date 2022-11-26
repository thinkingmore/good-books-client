import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import { useFetch } from '../../../hooks/useFetch';
import Admin from './Admin';
import Buyer from './Buyer';
import Seller from './Seller';

const Dashboard = () => {
    const { user } = useContext(AuthContext);   
    const [ userInfo] = useFetch(user?.email)

    return (
        <div>
            { userInfo.role === "seller" && <Seller></Seller>} 
            { userInfo.role === "buyer" && <Buyer></Buyer>} 
            { userInfo.role === "admin" && <Admin></Admin>} 
        </div>
    );
};

export default Dashboard;