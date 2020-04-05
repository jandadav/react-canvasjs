import React from 'react';
import { Card, Container, Row, Col, Button, Form } from 'react-bootstrap';

function Log() {

    return (
        <Card bg="light" text="black">
            <Card.Header><h5>Logs</h5></Card.Header>
            <Card.Title></Card.Title>
            <Card.Body>
                <Form>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Control as="textarea" rows="15" ></Form.Control>
                    </Form.Group>
                    <Button >Clear</Button>
                </Form>
            </Card.Body>
        </Card>
    );
}

export default Log;