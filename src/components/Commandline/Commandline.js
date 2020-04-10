import React,{ useState } from 'react';
import { Card, Container, Row, Col, Button, Form } from 'react-bootstrap';

function Commandline() {

    const [command, setCommand] = useState("");

    function handleSubmit(event) {
        console.log("submit was handled");
        console.log(command); 
        setCommand("");       
    }

    //generic handler that can intercept and set state this.setState({form: {...this.state.form, [fieldName]: fleldVal}})
    //there is just 1 state field so not using json
    function handleChange(event) {
        let fieldName = event.target.name;
        let fieldVal = event.target.value;
        setCommand(fieldVal);
    }

    return (
        <Card bg="light" text="black">
            <Card.Header><h5>Command Line</h5></Card.Header>
            <Card.Title></Card.Title>
            <Card.Body>
                <Form>
                    <Form.Group controlId="formCommand">
                        <Form.Control type="input" name="command" value={command} placeholder="Enter command" onChange={handleChange} />
                    </Form.Group>

                    <Button variant="primary" type="button" onClick={handleSubmit}>
                        Submit
                    </Button>
                </Form>
            </Card.Body>
        </Card>
    );
}
//onClick={submitCommand}
export default Commandline;