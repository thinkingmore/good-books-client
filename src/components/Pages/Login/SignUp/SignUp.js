import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../../contexts/AuthProvider/AuthProvider';
import useToken from '../../../../hooks/useToken';

const SignUp = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const { createUser,updateUser } = useContext(AuthContext);
    const [signUpError, setSignUpError] = useState('');
    const [createdUserEmail, setCreatedUserEmail] = useState('')
    const [token] = useToken(createdUserEmail);
    const navigate = useNavigate();
    
    if(token){
        navigate('/');
    }
    
    const handleSignUp = (data) => {
        console.log(data);
        setSignUpError('');
        createUser(data.email, data.password, data.role)
            .then(result => {
                const user = result.user;
                console.log(user);
                console.log('User Created Successfully.')
                const userInfo = {
                    displayName: data.name
                }
                updateUser(userInfo)
                    .then(() => { 
                        saveUser(data.name, data.email, data.role)
                    })
                    .catch(err => console.log(err));
            })
            .catch(error => {
                console.log(error)
                setSignUpError(error.message)
            });

            const saveUser = (name, email, role) =>{
                const user ={name, email, role};
                fetch('http://localhost:5000/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(user)
                })
                .then(res => res.json())
                .then(data =>{
                    setCreatedUserEmail(email);
                })
            }
    }
    return (
        <form onSubmit={handleSubmit(handleSignUp)} style={{maxWidth:"25rem"}} className='mt-2 mx-auto'>
            <div className="form-group my-3">
                <label htmlFor="name">Name</label>
                <input type="name" {...register("name",{
                    required: "Name is required"
                })} 
                className="form-control mt-2" id="name" placeholder="Name"/>
                {errors.name && <p className='text-danger' role="alert">{errors.name?.message}</p>}
            </div>
            <div className="form-group my-3">
                <label htmlFor="email">Email</label>
                <input type="email" {...register("email",{
                    required: "Email is required"
                })} 
                className="form-control mt-2" id="email" placeholder="Email"/>
                {errors.email && <p className='text-danger' role="alert">{errors.email?.message}</p>}
            </div>
            <div className="form-group my-3">
                <label htmlFor="password">Password</label>
                <input type="password" {...register("password",{
                            required: "Password is required",
                            minLength: { value: 6, message: "Password must be 6 characters or longer" },
                            pattern: { value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/, message: 'Password must have uppercase, number and special characters'}
                        })}
                className="form-control mt-2" id="password" placeholder="Password"/>
                {errors.password && <p className='text-danger' role="alert">{errors.password?.message}</p>}
            </div>
            <div className="form-group my-3">
                <label htmlFor="role">Sign up as:</label>
                <select {...register("role")}
                    className="form-select my-4" aria-label="Default select example">
                    <option selected>Seller</option>
                    <option value="1">Buyer</option>
                </select> 
                {errors.password && <p className='text-danger' role="alert">{errors.password?.message}</p>}
            </div>
            <button type="submit" className="btn btn-primary w-100 mt-2">Submit</button>
            <p>Already have an account? Click here to <Link to="/login">Login</Link></p>
            {signUpError && <p className='text-danger'>{signUpError}</p>}
        </form>
    );
};

export default SignUp;