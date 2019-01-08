import React from 'react';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Button from 'react-bootstrap/lib/Button';
import Image from 'react-bootstrap/lib/Image';
import Computer from './images/computer.jpg';
import Screens from './images/screens.png';

const Section2 = () => {
    return (
        <Row className="show-grid" className="section2">
            <Col sm={12} md={4} mdOffset={1}>
              <h2>This is the H2 main heading of the section</h2>
              <p>Expetendis aut fugiat senserit. Officia sint constias consequat. Ex tamen culpa
                export singulis.Constias a fugiat, cupidatat nisi probant, ea qui elit appellat,
                mentitum aliqua sed aliquip consectetur. Id illum incididunt singulis et nescius
                ut tamen ingeniis, quo nisi incurreret.</p>
              <h3>This is the H3</h3>
              <p>An te exercitation, labore laboris ab eiusmod. Te nulla imitarentur, ne sint
                admodum pariatur. Eiusmod duis quid expetendis quae. Voluptate nulla tamen ne
                eram.Commodo dolor fugiat aliquip minim, fabulas eram voluptate admodum.
              </p>
            </Col>
            <Col sm={12} md={6} mdOffset={1} className="section2-image">
              <Image src={Screens} />
            </Col>
        </Row>
    );
}

export default Section2;
