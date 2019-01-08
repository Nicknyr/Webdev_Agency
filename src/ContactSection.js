import React from 'react';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Button from 'react-bootstrap/lib/Button';
import Image from 'react-bootstrap/lib/Image';


const ContactSection = () => {
    return (
        <Row className="show-grid" className="contact-section">
            <Col sm={12} md={8} mdOffset={2} >
              <h2>Want to learn more?</h2>
              <p>Et ipsum e sint. An fore multos eu ingeniis, culpa iis non fugiat occaecat. Est
                esse illustriorai</p>
              <p> cernantur efflorescere non qui sed velit quibusdam de quis
              expetendis sed irure quae, quorum litteris aut voluptatibus. Consequat nisi
              quibusdam.</p>
              <Button bsClass="my-button">Contact Us</Button>
            </Col>
            <Col sm={12} md={2} className="message-box">
              <h2>Hey</h2>
            </Col>
        </Row>
    );
}

export default ContactSection;
