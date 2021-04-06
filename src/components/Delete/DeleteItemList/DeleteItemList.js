import React from 'react';
import { Button } from 'react-bootstrap';


const DeleteItemList = ({ product }) => {

    const { name, price, imageURL, _id } = product;

    const deleteItem = id => {
        console.log(id);
        fetch(`http://localhost:5000/delete/${id}`, {

            method: 'DELETE'
        })
            .then(res => res.json())
            .then(result => {
                console.log('deleted successfully')
            });
        // console.log(id);
    }

    return (
        <div className="container mt-5">

            <table className="table">
                <thead>
                    <tr>
                        
                        <th scope="col">Product Name</th>
                        <th scope="col">Price</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        
                        <td className="text-info">{name}</td>
                        <td>{price}</td>
                        <td><Button variant="danger" onClick={() => deleteItem(product._id)}>Delete Item</Button></td>
                    </tr>
                                      
                </tbody>
            </table>

        </div>
    );
};

export default DeleteItemList;