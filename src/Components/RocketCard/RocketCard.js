import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { Card, Row, Col, Spinner, FormControl, Form, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../../Slice/getAllData';

const RocketCard = () => {
    const { rockets, isLoading } = useSelector(state => state);
    // console.log(rockets, isLoading);
    const dispatch = useDispatch();
    const [search, setSearch] = useState();
    useEffect(() => {
        dispatch(fetchData());
    }, [dispatch]);
    const onChangeHandle = (e) => {
        e.preventDefault();
        setSearch(rockets.filter(res => (res.rocket.rocket_name.toLowerCase().indexOf(e.target.value.toLowerCase()) !== -1)));
    }
    const handleSearch = (e) => {
        e.preventDefault();
        setSearch(rockets.filter(res => (res.rocket.rocket_name.toLowerCase().indexOf(e.target.search.value.toLowerCase()) !== -1)));
        console.log(search);
    }

    return (
        <>
            <section>
                <div className="d-flex justify-content-center my-5">
                    <Form onSubmit={handleSearch} className="d-flex w-25 my-5">
                        <FormControl
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                            name='search'
                            onChange={onChangeHandle}
                        />
                        <Button type='submit' variant="outline-danger">Search</Button>
                    </Form>
                </div>
                {
                    isLoading ?
                        <div className='d-flex justify-content-center mt-5'>
                            <Spinner animation="border" variant="primary" />
                        </div>
                        :
                        search.length === 0 ?
                            <div className='container my-5'>
                                <Row xs={1} md={3} className="g-4 w-100">
                                    {rockets.map((data) => (
                                        <Col >
                                            <Card>
                                                <Card.Img variant="top" src={data.links.mission_patch} />
                                                <Card.Body>
                                                    <Card.Title>{data.mission_name} | {data.rocket.rocket_name} | {data.rocket.rocket_type}</Card.Title>
                                                    <Card.Text>
                                                        {moment(data.launch_date_local).format('llll')}, {data.launch_site.site_name_long} ,{data.launch_success ? <span>Successfully Launch</span> : <span>Launch Failed</span>},
                                                        {data.upcoming ? <span>Upcoming</span> : <span>Not Upcoming</span>}.
                                                        <div className='d-flex '>
                                                            <p><a href={data.links.article_link} target='_blank' rel="noreferrer">DETAILS</a></p>
                                                            <p className='ms-4'><a href={data.links.video_link} target='_blank' rel="noreferrer">WATCH</a></p>
                                                        </div>
                                                    </Card.Text>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                    ))}
                                </Row>
                            </div> :
                            <div className='container my-5'>
                                <Row xs={1} md={3} className="g-4 w-100">
                                    {search.map((data) => (
                                        <Col >
                                            <Card>
                                                <Card.Img variant="top" src={data.links.mission_patch} />
                                                <Card.Body>
                                                    <Card.Title>{data.mission_name} | {data.rocket.rocket_name} | {data.rocket.rocket_type}</Card.Title>
                                                    <Card.Text>
                                                        {moment(data.launch_date_local).format('llll')}, {data.launch_site.site_name_long} ,{data.launch_success ? <span>Successfully Launch</span> : <span>Launch Failed</span>},
                                                        {data.upcoming ? <span>Upcoming</span> : <span>Not Upcoming</span>}.
                                                        <div className='d-flex '>
                                                            <p><a href={data.links.article_link} target='_blank' rel="noreferrer">DETAILS</a></p>
                                                            <p className='ms-4'><a href={data.links.video_link} target='_blank' rel="noreferrer">WATCH</a></p>
                                                        </div>
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