import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const SignUp = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();


    const handleSignUp = (data) => {
        console.log(data)
    }

    return (
        <form onSubmit={handleSubmit(handleSignUp)} style={{maxWidth:"25rem"}} className='mt-2 mx-auto'>
            <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="name" {...register("name",{
                    required: "Name is required"
                })} 
                className="form-control mt-2" id="name" placeholder="Name"/>
                {errors.name && <p className='text-danger' role="alert">{errors.name?.message}</p>}
            </div>
            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" {...register("email",{
                    required: "Email is required"
                })} 
                className="form-control mt-2" id="email" placeholder="Email"/>
                {errors.email && <p className='text-danger' role="alert">{errors.email?.message}</p>}
            </div>
            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" {...register("password",{
                            required: "Password is required",
                            minLength: { value: 6, message: "Password must be 6 characters or longer" },
                            pattern: { value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/, message: 'Password must have uppercase, number and special characters'}
                        })}
                className="form-control mt-2" id="password" placeholder="Password"/>
                {errors.password && <p className='text-danger' role="alert">{errors.password?.message}</p>}
            </div>
            <button type="submit" className="btn btn-primary w-100 mt-2">Submit</button>
            <p>Already have an account? Click here to <Link to="/login">Login</Link></p>
        </form>
    );
};

export default SignUp;