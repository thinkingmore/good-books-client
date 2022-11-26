import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import { useFetch } from '../../../hooks/useFetch';

const Dashboard = () => {
    const { user } = useContext(AuthContext);   
    const [ userInfo] = useFetch(user?.email)

    return (
        <div>
            <h2>Welcome {userInfo.name}, what is your role?</h2>
            { userInfo.role === "seller" && <p>Your role is seller</p>} 
            { userInfo.role === "buyer" && <p>Your role is buyer</p>} 
            { userInfo.role === "admin" && <p>Your role is admin</p>} 
        </div>
    );
};

export default Dashboard;