import React, { useEffect } from 'react';
import { Card, Row, Col, Spinner } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../../Slice/getAllData';

const RocketCard = () => {
    const { rockets, isLoading } = useSelector(state => state);
    console.log(rockets, isLoading);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchData());
    }, [dispatch]);

    return (
        <>
            <section>
                {
                    isLoading ?
                        <div className='d-flex justify-content-center mt-5'>
                            <Spinner animation="border" variant="primary" />
                        </div>
                        :
                        <div className='container my-5'>
                            <Row xs={1} md={3} className="g-4 w-100">
                                {rockets.map((data) => (
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
                }
            </section>
        </>
    );
};

export default RocketCard;