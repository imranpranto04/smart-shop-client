import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Button } from 'react-bootstrap';
import { UserContext } from '../../App';


const Checkout = () => {

    const { _id } = useParams();
    const [showProduct, setShowProduct] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);


    useEffect(() => {
        fetch(`http://localhost:5000/products${_id}`)
            .then(res => res.json())
            .then(data => setShowProduct(data));
    }, [])

    const orderClick = () =>{
        const orderInfo = { ...loggedInUser, ...showProduct, time: new Date()}
        console.log(orderInfo);
        fetch(`http://localhost:5000/addOrder`,{
            method: 'POST',
            headers: {
                'Content-type' : 'application/json'
            },
            body: JSON.stringify(orderInfo)
    
        })
        .then(res=> res.json())
        .then(data=> console.log(data));
    };

    return (
        <div className="container">
            <h2>Checkout</h2>
            
            {/* <h1>{_id}</h1>
            <h4>Product Name: {showProduct.name}</h4>
            <h4>Price: ${showProduct.price}</h4>
            <h4>Quantity: 1</h4> */}

            <table className="table">
                <thead className="thead-light">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Description</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Price</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>{showProduct.name}</td>
                        <td>1</td>
                        <td>${showProduct.price}</td>
                    </tr>
                  
                    <tr>
                        <th scope="row"></th>
                        <td><b>Total</b></td>
                        <td></td>
                        <td><b>${showProduct.price}</b></td>
                    </tr>
                </tbody>
            </table>
            <div className="d-flex justify-content-end">
            <Button onClick={orderClick} variant="danger">Order</Button>
            </div>
        </div>
    );
};

export default Checkout;