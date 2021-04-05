import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";


const AddProduct = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [imageURL, setImageURL] = useState(null);

    const onSubmit = data => {
        const productData = {
            name: data.example,
            price: data.number,
            imageURL: imageURL
        }
        const url = `http://localhost:5000/addProduct`;
        console.log(productData);

        fetch(url,{
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(productData)
        })
        .then(res=> console.log('server site response', res));
    };

    const handleImageUp = (event) =>{
        console.log(event.target.files[0]);
        const imageData = new FormData();
        imageData.set('key', 'c9fc94199be53a64c2f605ef8c3e3832');
        imageData.append('image', event.target.files[0]);


        axios.post('https://api.imgbb.com/1/upload', imageData)
          .then(function (response) {
            setImageURL(response.data.data.display_url);
          })
          .catch(function (error) {
            console.log(error);
          });
    }

    return (
        <div className="container">
            <h2>Admin</h2>
            <h4>Create Product</h4>

            <form className="mt-3" onSubmit={handleSubmit(onSubmit)}>
                <label>input product name</label>
                <input name="name" defaultValue="New Product" {...register("example")}/>
                <br/>
                
                <label>input product price </label>
                <input type="number" defaultValue="price" {...register("number")}/>
                <br/>

                <input type="file" onChange={handleImageUp}/>
                <br/>

                <input type="submit" />
            </form>

        </div>
    );
};

export default AddProduct;