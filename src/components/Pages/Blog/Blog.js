import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import { useFetch } from '../../../hooks/useFetch';

const Blog = () => {
    const {user} = useContext(AuthContext)
    const [userInfo] = useFetch(user?.email)
    return (
        <div>
            <h2>This is blog for {userInfo.role}</h2>
        </div>
    );
};

export default Blog;