import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Button } from 'react-bootstrap';


const Checkout = () => {

    const { _id } = useParams();
    const [showProduct, setShowProduct] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/products${_id}`)
            .then(res => res.json())
            .then(data => setShowProduct(data));
    }, [])

    return (
        <div className="container">
            <h2>Checkout</h2>
            
            {/* <h1>{_id}</h1>
            <h4>Product Name: {showProduct.name}</h4>
            <h4>Price: ${showProduct.price}</h4>
            <h4>Quantity: 1</h4> */}

            <table class="table">
                <thead class="thead-light">
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
            <Button variant="danger">Order</Button>
            </div>
        </div>
    );
};

export default Checkout;