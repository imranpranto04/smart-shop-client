import React, { useEffect, useState } from 'react';
import OrderDetails from '../OrderDetails/OrderDetails';

const Order = () => {

    const [order, setOrder] = useState([]);

    useEffect( ()=>{

        fetch('http://localhost:5000/orders')
        .then(res => res.json())
        .then(data => setOrder(data));
    }, [])

    return (
        <div className="container">
            
            <h2>Order Items Here</h2>
            <h4>Total Order Items: {order.length}</h4>
            <div className="row">
                {
                    order.map(order => <OrderDetails order={order}></OrderDetails>)
                }
            </div>

        </div>
    );
};

export default Order;