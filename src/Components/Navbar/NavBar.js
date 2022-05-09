import React from 'react';
import { Button, Container, Form, FormControl, Nav, Navbar, NavDropdown } from 'react-bootstrap';

const NavBar = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container fluid>
                <Navbar.Brand href="#">
                    Technext Limited</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <NavDropdown title="Launch Date" id="navbarScrollingDropdown">
                            <NavDropdown.Item href="#action3">Last Week</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">Last Month</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">Last Year</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#" >
                            Launch Status
                        </Nav.Link>
                        <Nav.Link href="#" >
                            Upcoming
                        </Nav.Link>
                    </Nav>
                    <Form className="d-flex">
                        <FormControl
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-danger">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBar;