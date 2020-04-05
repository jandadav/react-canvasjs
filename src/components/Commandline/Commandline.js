import React from 'react';
import { Card, Container, Row, Col, Button, Form } from 'react-bootstrap';

function Commandline() {

    return (
        <Card bg="light" text="black">
            <Card.Header><h5>Command Line</h5></Card.Header>
            <Card.Title></Card.Title>
            <Card.Body>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        {/* <Form.Label>Command</Form.Label> */}
                        <Form.Control type="input" placeholder="Enter command" />
                    </Form.Group>

                    <Button variant="primary" type="button">
                        Submit
                </Button>
                </Form>
            </Card.Body>
        </Card>
    );
}

export default Commandline;