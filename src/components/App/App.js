import React from 'react';
import './App.css';
import LineChart from '../LineChart/LineChart';
import { Card, Container, Row, Col, Button, Form } from 'react-bootstrap';
import Commandline from '../Commandline/Commandline';
import Log from '../Log/Log';
function App() {
  return (
    <div className="App">

      <Container fluid>
        <Row>
          <Col>
            <header className="App-header">
              <h1>Embedded UI</h1>
            </header>
          </Col>
        </Row>
        <Row>
          <Col sm={8}>
            <LineChart />
          </Col>
          <Col >
            <Log />
          </Col>
        </Row>
        <Row>
          <Col>
            <Commandline />
          </Col>
        </Row>
      </Container>

    </div>
  );
}

export default App;
