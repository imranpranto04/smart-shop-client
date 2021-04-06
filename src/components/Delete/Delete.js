import React, { useEffect, useState } from 'react';
import DeleteItemList from './DeleteItemList/DeleteItemList';

const Delete = () => {

    const [products, setProducts] = useState([]);

    useEffect( ()=> {
        fetch('http://localhost:5000/products')
        .then(res=> res.json())
        .then(data=> setProducts(data));
    }, [])

    return (
        <div className="container">
            <h1>Delete Items</h1>
            {/* <h1>Items {products.length}</h1> */}
            {
                products.map(product => <DeleteItemList product={product} key={product._id}></DeleteItemList>)
            }
        </div>
    );
};

export default Delete;