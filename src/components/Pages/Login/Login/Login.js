import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../../contexts/AuthProvider/AuthProvider';
import useToken from '../../../../hooks/useToken';

const Login = () => {
    
    const { register, handleSubmit, formState: { errors }, } = useForm();
    const [loginError, setLoginError] = useState('');

    const [loginUserEmail, setLoginUserEmail] = useState('');

    const [token] = useToken(loginUserEmail);

    const { login,providerLogin } = useContext(AuthContext);
    
    const location = useLocation();
    const navigate = useNavigate();
    
    const form = location.state?.form?.pathname || '/';

    
    if(token){
        navigate(form, {replace: true});
    }
    
    const googleProvider = new GoogleAuthProvider();
    
    const handleGoogleSignIn = () => {
        const role ="buyer"
        providerLogin (googleProvider)
        .then(result => {
            const user = result.user;
            console.log(user.email);
            saveUser(user.uid,user.email,role);
        })
        .catch(error => console.error(error))
    }
    
    
    
    
    const handleLogin = (data) => {
        setLoginError('');
        console.log(data)
        login(data.email, data.password)
        .then(result => {
            const user = result.user;
            console.log(user);
            setLoginUserEmail(data.email);         
        })
        .catch(error => {
            console.error(error)
            setLoginError(error.message);
        });
    }

    const saveUser = (name, email, role) =>{
        const user ={name, email, role};
        fetch('http://localhost:5000/users/', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data =>{
            setLoginUserEmail(email);
        })
    }
    
    // const handleLogin = (data) =>{

    //     login( data.email, data.password)
    //     .then(res=> {
    //       const user = res.user;
    //       console.log(user);

    //       const currentUser =  {
    //         email: user?.email
    //       }

    //       console.log(currentUser);
    //     })  
    // }

    return (
        <div className='mx-auto' style={{maxWidth:"25rem"}}>
            <form onSubmit={handleSubmit(handleLogin)}  className='mt-2 mx-auto'>
                <div className="form-group my-3">
                    <label htmlFor="email">Email</label>
                    <input type="email" {...register("email")} 
                    className="form-control mt-2" id="email" placeholder="Email"/>
                </div>
                <div className="form-group my-3">
                    <label htmlFor="password">Password</label>
                    <input type="password" {...register("password",{
                                required: "Password is required",
                                minLength: { value: 6, message: "Password must be 6 characters or longer" }
                            })}
                    className="form-control mt-2" id="password" placeholder="Password"/>
                    {errors.password && <p className='text-danger' role="alert">{errors.password?.message}</p>}
                </div>
                <button type="submit" className="btn btn-primary w-100 mt-2">Submit</button>
                { loginError && <p className='text-danger'>{loginError}</p>}
            </form>
            <div className=" my-2 text-danger">
                <button onClick={handleGoogleSignIn} className='btn btn-dark w-100 my-2'><FaGoogle className='me-2'></FaGoogle>Sign in with Google</button>         
            </div>
            <p className='my-2'>Already have an account? Click here to <Link to="/signup">create account</Link></p>
        </div>
    );
};

export default Login;