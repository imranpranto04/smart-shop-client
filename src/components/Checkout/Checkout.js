import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Checkout = () => {

    const {_id} = useParams();
    const [showProduct, setShowProduct] = useState([]);

    useEffect( () => {
        fetch(`http://localhost:5000/products${_id}`)
        .then(res=> res.json())
        .then(data => setShowProduct(data));
    },[])

    return (
        <div>
            <h2>This is checkout.</h2>
            <h1>{_id}</h1>
            <h4>Product Name: {showProduct.name}</h4>
        </div>
    );
};

export default Checkout;