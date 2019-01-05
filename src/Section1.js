import React from 'react';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Button from 'react-bootstrap/lib/Button';

const Section1 = () => {
    return (
        <Row className="show-grid" className="section1">
            <Col sm={12} md={6} mdOffset={3}>
              <h2>This is the H2 main heading of the section</h2>
              <p>Expetendis aut fugiat senserit. Officia sint constias consequat. Ex tamen culpa
                export singulis.Constias a fugiat, cupidatat nisi probant, ea qui elit appellat,
                mentitum aliqua sed aliquip consectetur. Id illum incididunt singulis et nescius
                ut tamen ingeniis, quo nisi incurreret, si multos si quem a o admodum
                firmissimum, incurreret quae tempor eiusmod quorum hic an eiusmod
                instituendarum, ad sunt quibusdam doctrina. Incididunt quem sunt in irure,
                eiusmod fore fore arbitror cillum ab an ex multos multos esse eu aliquip tamen
                litteris proident ita ita legam praesentibus te appellat sempiternum ita ullamco
                sed possumus quo quid o arbitror fugiat esse mandaremus irure.</p>
              <h3>This is the H3</h3>
              <p>An te exercitation, labore laboris ab eiusmod. Te nulla imitarentur, ne sint
                admodum pariatur. Eiusmod duis quid expetendis quae. Voluptate nulla tamen ne
                eram.Commodo dolor fugiat aliquip minim, fabulas eram voluptate admodum,
                possumus dolore voluptate laborum ut export expetendis ex expetendis. An duis
                veniam quae quamquam. Sed iis transferrem.</p>
              <p>Dolore laboris aliquip ea eu o distinguantur, laboris dolor quibusdam, senserit
                dolore iudicem. Ea senserit domesticarum id o veniam praesentibus, eram
                distinguantur commodo tempor ullamco, incididunt quae litteris officia.</p>
              <p> Est culpa exquisitaque, cernantur quo mandaremus, non proident
              relinqueret, proident et senserit.</p>
            <Button bsClass="my-button">See Packages</Button>
            </Col>
        </Row>
    );
}

export default Section1;
