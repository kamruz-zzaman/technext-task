import React from 'react';
import { InputGroup, FormControl, Button } from 'react-bootstrap';

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
            </section>
        </>
    );
};

export default RocketCard;