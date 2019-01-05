import React from 'react';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
    return (
        <Row className="show-grid" className="footer">
            <Col sm={4} md={3} mdOffset={1} className="footer-section">
              <h3>Section1</h3>
              <ul>
                <li><a href="#/">Link</a></li>
                <li><a href="#/">Link</a></li>
                <li><a href="#/">Link</a></li>
                <li><a href="#/">Link</a></li>
                <li><a href="#/">Link</a></li>
                <li><a href="#/">Link</a></li>
              </ul>
            </Col>
            <Col sm={4} md={3} mdOffset={1} className="footer-section">
              <h3>Section2</h3>
                <ul>
                  <li><a href="#/">Link</a></li>
                  <li><a href="#/">Link</a></li>
                  <li><a href="#/">Link</a></li>
                  <li><a href="#/">Link</a></li>
                  <li><a href="#/">Link</a></li>
                  <li><a href="#/">Link</a></li>
                </ul>
            </Col>
            <Col sm={4} md={3} mdOffset={1} className="footer-section">
              <h3>Section3</h3>
              <p>
                123 Main Street
                <br/>
                Bloomingburg, NY
                <br />
                <a href="mailto:nick_kinlen@hotmail.com" id="email-link">me@myemail.com</a>
              </p>
              <FontAwesomeIcon icon={['fab', 'facebook']} size="2x" color="white"/>
              <FontAwesomeIcon icon={['fab', 'twitter']} size="2x" color="white"/>
            </Col>
        </Row>
    );
}

export default Footer;
