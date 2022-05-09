import React from 'react';
import { Card, Row, Col, InputGroup, FormControl, Button } from 'react-bootstrap';

const RocketCard = () => {
    return (
        <>
            <section className=''>
                <InputGroup className="my-5 w-25 mx-auto">
                    <FormControl
                        placeholder="Search"
                        aria-describedby="basic-addon1"
                    />
                    <Button className='ms-5 bg-danger border-danger'>Go</Button>
                </InputGroup>
                <div className='container my-5'>
                    <Row xs={1} md={3} className="g-4 w-100">
                        {Array.from({ length: 4 }).map((_, idx) => (
                            <Col >
                                <Card>
                                    <Card.Img variant="top" src="holder.js/100px160" />
                                    <Card.Body>
                                        <Card.Title>Card title</Card.Title>
                                        <Card.Text>
                                            This is a longer card with supporting text below as a natural
                                            lead-in to additional content. This content is a little bit longer.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </div>
            </section>
        </>
    );
};

export default RocketCard;