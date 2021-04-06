import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div className="container">
            <Navbar bg="light" expand="lg">
                <Navbar.Brand className="">
                    <Link to="/home">SMART SHOP</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <li><Link Link to="/home">Home</Link></li>
                        <li><Link link to="/order">Order</Link></li>
                        <li><Link Link to="/delete">Delete Item</Link></li>
                        <li><Link Link to="/addProduct">Admin</Link></li>
                        <li>

                            <Link to="/login">Login</Link>

                        </li>

                    </Nav>

                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default Header;