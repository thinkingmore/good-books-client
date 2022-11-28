import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import { useFetch } from '../../../hooks/useFetch';
import Admin from './Admin';
import Buyer from './Buyer';
import Seller from './Seller';

const Dashboard = () => {
    const { user } = useContext(AuthContext);   
    const [ userInfo] = useFetch(user?.email)
    console.log(userInfo,user.uid);

    return (
        <div>
            { userInfo.role === "seller" && <Seller userInfo={userInfo}></Seller>} 
            { userInfo.role === "buyer" && <Buyer userInfo={userInfo}></Buyer>} 
            { 
                user.uid !== null  && 
                userInfo.role == null &&       
                <Buyer userInfo={userInfo}></Buyer>
            }  
            { userInfo.role === "admin" && <Admin userInfo={userInfo}></Admin>} 
        </div>
    );
};

export default Dashboard;