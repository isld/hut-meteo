import React from "react";
import Nav from 'react-bootstrap/lib/Nav'
import Navbar from 'react-bootstrap/lib/Navbar'
import NavItem from 'react-bootstrap/lib/NavItem';

const navItems = [{
    key: 'home',
    title: 'Current Weather',
    url: '/'
}, {
    key: 'history',
    title: 'History',
    url: '/history',
    disabled: true
}, {
    key: 'camera',
    title: 'Camera',
    url: '/camera',
    disabled: true
}].map(
    props => <NavItem key={props.key} eventKey={props.key} href={props.url} disabled={props.disabled}>
        {props.title}
    </NavItem>
);

const Navigation = () => (
    <Navbar>
        <Navbar.Header>
            <Navbar.Brand>
                <a href="/">х. Червената шапчица</a>
            </Navbar.Brand>
        </Navbar.Header>
        <Nav>
            {navItems}
        </Nav>
    </Navbar>
);

export default Navigation;
