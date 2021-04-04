import React from 'react';
import { Button, Card } from 'react-bootstrap';


const ShowProduct = ({ product }) => {
    return (
        <div className="col-md-4 mt-5">

            {/* <img style={{height: '300px'}} src={product.imageURL} alt=""/>
            <p>{product.name}</p>
            <p>{product.price}</p> */}

            <Card className='h-100 m-3 p-3'>
                <Card.Img className='h-50' variant="top" src={product.imageURL} />
                <Card.Body>
                    <Card.Title>{product.name}</Card.Title>
                </Card.Body>
                
                <Card.Body>
                    <Card.Link href="#">${product.price}</Card.Link>
                    {/* <Card.Link href="#">Another Link</Card.Link> */}
                    <Button className="ml-5">Buy now</Button>
                </Card.Body>
            </Card>

        </div>
    );
};

export default ShowProduct;