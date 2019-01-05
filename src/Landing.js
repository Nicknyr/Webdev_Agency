import React from 'react';
import Jumbotron from 'react-bootstrap/lib/Jumbotron';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Button from 'react-bootstrap/lib/Button';


const Landing = () => {
    return (
        <Jumbotron>
        <Row className="show-grid">
            <Col xs={12} md={5} mdPush={2} className="blah">
                <h1>New York Web Developers</h1>
                <h2>
                    The Best in the City
                </h2>
                <h3>Want the best in the business? You're in the right place!</h3>
                <Button bsClass="my-button" id="landing-button">Learn More</Button>
            </Col>
        </Row>
        </Jumbotron>
    );
}

export default Landing;
