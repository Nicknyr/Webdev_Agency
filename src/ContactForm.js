import React from 'react';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Button from 'react-bootstrap/lib/Button';
import Form from 'react-bootstrap/lib/Form';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import FormControl from 'react-bootstrap/lib/FormControl';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';


const ContactForm = () => {
    return (
        <Row className="show-grid" className="contact-form-section">
          <h2>Get in Touch</h2>
            <Col sm={12} md={8} mdOffset={2} className="contact-form-box">
                <Form horizontal>
                  <FormGroup controlId="formHorizontalEmail">
                    <Col componentClass={ControlLabel} sm={2} smOffset={2}>
                      First Name
                    </Col>
                    <Col sm={5}>
                      <FormControl type="email" placeholder="First Name" />
                    </Col>
                  </FormGroup>

                  <FormGroup controlId="formHorizontalEmail">
                    <Col componentClass={ControlLabel} sm={2} smOffset={2}>
                      Last Name
                    </Col>
                    <Col sm={5}>
                      <FormControl type="email" placeholder="Last Name" />
                    </Col>
                  </FormGroup>

                  <FormGroup controlId="formHorizontalEmail">
                    <Col componentClass={ControlLabel} sm={2} smOffset={2}>
                      Email
                    </Col>
                    <Col sm={5}>
                      <FormControl type="email" placeholder="Email" />
                    </Col>
                  </FormGroup>

                  <FormGroup controlId="formHorizontalEmail">
                    <Col componentClass={ControlLabel} sm={2} smOffset={2}>
                      Phone
                    </Col>
                    <Col sm={5}>
                      <FormControl type="email" placeholder="Phone Number" />
                    </Col>
                  </FormGroup>

                  <FormGroup controlId="formHorizontalPassword">
                    <Col componentClass={ControlLabel} sm={2} smOffset={2}>
                      Message
                    </Col>
                    <Col sm={5}>
                        <textarea cols="39" rows="5" placeholder="Your Message"></textarea>
                    </Col>
                  </FormGroup>

                  <FormGroup>
                    <Col smOffset={4} sm={10}>
                      <Button bsClass="my-button" type="submit">Submit</Button>
                    </Col>
                  </FormGroup>
                  </Form>

            </Col>
        </Row>
    );
}

export default ContactForm;
