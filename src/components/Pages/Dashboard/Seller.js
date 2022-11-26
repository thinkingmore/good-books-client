import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useFetch } from '../../../hooks/useFetch';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import { format } from 'date-fns';

const Seller = ( ) => {

    const { register, handleSubmit, formState: {errors} } = useForm();

    const currentDate = (new Date());
    const date = format(currentDate,'PP')
    
    const {user} = useContext(AuthContext);
    const [userInfo] = useFetch(user?.email);

    const navigate = useNavigate();

    const imageHostKey = process.env.REACT_APP_imgbb_key;
    console.log(imageHostKey);
    
    const handleAddItem = (data) => {
        console.log(data);
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        fetch(`https://api.imgbb.com/1/upload?key=${imageHostKey}`,{
            method: 'POST',
            body: formData
        })
        .then(res=> res.json())
        .then(imgData=>{
            if(imgData.success){
                console.log(imgData.data.url);
                const product = {
                    name: data.name,	
                    img: imgData.data.url,	
                    category_name: data.category_name,	
                    location: data.location,	
                    resale_price: data.resale_price,	
                    original_price: data.original_price ,	
                    years_of_use: data.years_of_use,	
                    time_of_posting: date,	
                    seller_name: userInfo.name,	
                    seller_status: user?.email
                }
                // save products information to the database
                fetch(`http://localhost:5000/books`,{
                    method: 'POST',
                    headers: {
                        'content-type' : 'application/json',
                        authorization: `bearer ${localStorage.getItem('accessToken')}`
                    },
                    body: JSON.stringify(product)
                })
                .then(res=> res.json())
                .then(result =>{
                    console.log(result)
                    toast.success(`Item ${data.name} is added successfully`);
                    navigate('/dashboard')
                })
            }
        })
        .catch(error => console.error(error));
    }

    return (
        <div>
            <h2>Add a product</h2>
            <form onSubmit={handleSubmit(handleAddItem)} style={{maxWidth:"25rem"}} className='mt-2 mx-auto'>
            <div className="form-group my-3">
                <input type="text" {...register("name")} 
                className="form-control mt-2" id="name" placeholder="name"/>
            </div>
            <div className="form-group my-3">
                <input type="text" {...register("category_name")} 
                className="form-control mt-2 text-lowercase" id="category_name" placeholder="category name"/>
            </div>
            <div className="form-group my-3">
                <input type="text" {...register("location")} 
                className="form-control mt-2" id="location" placeholder="location"/>
            </div>
            <div className="form-group my-3">
                <input type="text" {...register("resale_price")} 
                className="form-control mt-2" id="resale_price" placeholder="resale_price"/>
            </div>
            <div className="form-group my-3">
                <input type="text" {...register("original_price")} 
                className="form-control mt-2" id="original_price" placeholder="original_price"/>
            </div>
            <div className="form-group my-3">
                <input type="text" {...register("years_of_use")} 
                className="form-control mt-2" id="years_of_use" placeholder="years_of_use"/>
            </div>
            <div className="form-group my-3">
                <input type="file" {...register("image")} 
                className="form-control mt-2" id="formFile"/>
            </div>
            <button type="submit" className="btn btn-primary w-100 mt-2">Submit</button>
        </form>

        </div>
    );
};

export default Seller;