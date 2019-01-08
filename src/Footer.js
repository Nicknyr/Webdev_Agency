import React from 'react';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Logo from './images/logo-white.png';
import Image from 'react-bootstrap/lib/Image';

const Footer = () => {
    return (
        <Row className="show-grid" className="footer">
            <Col sm={4} md={3} mdOffset={1} className="footer-section">
              <h3>Services</h3>
              <ul>
                <li><a href="#/">Responsive Web Design</a></li>
                <li><a href="#/">Ecommerce Web Design</a></li>
                <li><a href="#/">Branding and Content Design</a></li>
                <li><a href="#/">Search Engine Optimization</a></li>
              </ul>
            </Col>
            <Col sm={4} md={3} mdOffset={1} className="footer-section">
              <h3>Quick Links</h3>
                <ul>
                  <li><a href="#/">Home</a></li>
                  <li><a href="#/">Pricing</a></li>
                  <li><a href="#/">Portfolio</a></li>
                  <li><a href="#/">Blog</a></li>
                  <li><a href="#/">Our Team</a></li>
                  <li><a href="#/">Contact Us</a></li>
                </ul>
            </Col>
            <Col sm={4} md={3} mdOffset={1} className="footer-section">
              <Image src={Logo} width={200} className="footer-logo"/>
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
