import React from 'react';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';

const OrderDetails = ({ order }) => {

    const { name, price, imageURL, _id, email, time } = order;
    
    return (

        <div className="col-md-4 mt-5">

            <Card className='h-100 mt-5' >
                <Card.Img className='h-50' variant="top" src={imageURL} />
                <Card.Body>
                    <Card.Title>Product Name:<b> {name}</b></Card.Title>
                    
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroupItem>Price: <b>${price}</b></ListGroupItem>
                    <ListGroupItem>Quantity: <b>1</b></ListGroupItem>
                    <ListGroupItem>Email: <b>{email}</b></ListGroupItem>
                    <ListGroupItem>Order Time: {time}</ListGroupItem>
                </ListGroup>
                <Card.Body>
                <Card.Text>
                        You will get delivery within 7 days.
                    </Card.Text>
                </Card.Body>
                
            </Card>
        </div>
    );
};

export default OrderDetails;