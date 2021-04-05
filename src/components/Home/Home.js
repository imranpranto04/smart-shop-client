import React, { useEffect, useState } from 'react';
import ShowProduct from '../ShowProduct/ShowProduct';
import CircularProgress from '@material-ui/core/CircularProgress';


const Home = () => {

    const [products, setProducts] = useState([]);

    useEffect( ()=> {
        fetch('http://localhost:5000/products')
        .then(res=> res.json())
        .then(data=> setProducts(data));
    }, [])

    return (
        <div className="container">
            <h1 className="text-success">This is Home.</h1>
            {
                products.length === 0 && <CircularProgress />
            }
            <div className="row">
                {
                    products.map(product => <ShowProduct product={product}></ShowProduct>)
                }

            </div>

        </div>
    );
};

export default Home;