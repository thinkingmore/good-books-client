import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../../contexts/AuthProvider/AuthProvider';
import useToken from '../../../../hooks/useToken';

const Login = () => {
    
    const { register, handleSubmit, formState: { errors }, } = useForm();
    const [loginError, setLoginError] = useState('');

    const [loginUserEmail, setLoginUserEmail] = useState('');

    const [token] = useToken(loginUserEmail);

    const { login } = useContext(AuthContext);
    
    const location = useLocation();
    const navigate = useNavigate();
    
    const form = location.state?.form?.pathname || '/';
    
    if(token){
        navigate(form, {replace: true});
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
        <form onSubmit={handleSubmit(handleLogin)} style={{maxWidth:"25rem"}} className='mt-2 mx-auto'>
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
            <p className='my-2'>Already have an account? Click here to <Link to="/signup">create account</Link></p>
            { loginError && <p className='text-danger'>{loginError}</p>}
        </form>
    );
};

export default Login;