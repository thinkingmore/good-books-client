import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Login = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const handleLogin = data => {
        console.log(data);
       
    }
    return (
        <form onSubmit={handleSubmit(handleLogin)} style={{maxWidth:"25rem"}} className='mt-2 mx-auto'>
            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" {...register("email")} 
                className="form-control mt-2" id="email" placeholder="Email"/>
            </div>
            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" {...register("password",{
                            required: "Password is required",
                            minLength: { value: 6, message: "Password must be 6 characters or longer" }
                        })}
                className="form-control mt-2" id="password" placeholder="Password"/>
                {errors.password && <p className='text-danger' role="alert">{errors.password?.message}</p>}
            </div>
            <button type="submit" className="btn btn-primary w-100 mt-2">Submit</button>
            <p>Already have an account? Click here to <Link to="/signup">create account</Link></p>
        </form>
    );
};

export default Login;