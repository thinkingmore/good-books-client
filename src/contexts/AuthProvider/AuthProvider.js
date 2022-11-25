import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile} from 'firebase/auth'
import app from '../../firebase/firebase.config';

export const AuthContext = createContext();

const auth = getAuth(app);

const AuthProvider = ({children}) => {
    
    const [user,setUser] = useState({});
    const [loading,setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth , email, password)
    } 

    const login = (email,password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const updateUser = (userInfo) =>{
        return updateProfile(user, userInfo);
    }

    const logOut = () => {
        return signOut(auth);
    }

    useEffect(() => {
        
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log(currentUser);
            setUser(currentUser);
        })
        
        return () => {
            return unSubscribe;
        }
    
    }, [])
    
    const authInfo ={
        user,
        loading,
        createUser,
        updateUser,
        login,
        logOut
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;