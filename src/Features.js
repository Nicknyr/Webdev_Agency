import React from 'react';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Image from 'react-bootstrap/lib/Image';
import Placeholder from './images/placeholder.png';
import Button from 'react-bootstrap/lib/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Features = () => {
    return (
        <Row className="show-grid">
            <Col xs={12} md={4} className="feature-item">
                <Row>
                  <div className="center-pic">
                    <FontAwesomeIcon icon="desktop" size="7x" id="icon1" color="white"/>
                    {/*<Image src={Placeholder} height={200} width={200} circle />*/}
                  </div>
                  <h2>One</h2>
                  <h3>This is the subheading</h3>
                  <hr/>
                  <p>Sint nostrud a incurreret ubi o ipsum enim se expetendis. Offendit labore ad
                    nostrud graviterque, eu ad cillum quorum sint. Do si illustriora in ab irure
                    appellat si doctrina ad aute, arbitror sint incurreret. Proident ab amet.In
                    probant comprehenderit, officia elit se offendit praesentibus. Summis quibusdam
                    concursionibus o quid possumus relinqueret nam quamquam a commodo est ingeniis
                    quis te cupidatat concursionibus. Tempor despicationes cupidatat quorum singulis
                    est quis familiaritatem ingeniis aute litteris, noster graviterque constias
                    quorum officia, ingeniis ex anim incididunt.</p>
                   <Button bsClass="my-button">Info</Button>
                 </Row>
            </Col>
            <Col xs={12} md={4} className="feature-item">
              <Row>
                  <div className="center-pic">
                    <FontAwesomeIcon icon="code" size="7x" id="icon2" color="white"/>
                    {/*}<Image src={Placeholder} height={200} width={200} circle />*/}
                  </div>
                  <h2>Two</h2>
                  <h3>This is the subheading</h3>
                  <hr/>
                  <p>A eram id magna, ex tempor te summis, ne quae cohaerescant eu e enim doctrina
                    arbitrantur qui tamen laboris de reprehenderit, cupidatat dolore constias,
                    voluptate culpa in consequat consectetur ad nulla officia et irure cillum.
                    Nostrud o multos, eu labore cupidatat comprehenderit, quis laborum et aute quem
                    id mandaremus e tempor, nulla commodo e mandaremus, si velit irure quis officia
                    est quo appellat domesticarum id quid commodo distinguantur. </p>
                   <Button bsClass="my-button">Info</Button>
                 </Row>
            </Col>
            <Col xs={12} md={4} className="feature-item">
              <Row>
                  <div className="center-pic">
                    <FontAwesomeIcon icon="clock" size="7x" id="icon3" color="white"/>
                    {/*<Image src={Placeholder} height={200} width={200} circle />*/}
                  </div>
                  <h2>Three</h2>
                  <h3>This is the subheading</h3>
                  <hr/>
                  <p>Officia fugiat laborum, ut an culpa fabulas. Iis sint constias senserit. Id
                    proident ita officia, illum eiusmod firmissimum, in noster mentitum ullamco, se
                    amet ingeniis coniunctione.E quid noster quis singulis a o aute noster iis
                    senserit, ubi fugiat arbitror deserunt in proident enim nostrud ad quibusdam
                    noster quis ne esse, te o fore expetendis, a ut illum doctrina de illum nescius
                    sed constias. Aliquip ad mentitum, admodum quae fugiat ad esse do esse possumus
                    ne efflorescere iis enim adipisicing laborum nulla doctrina.</p>
                  <Button bsClass="my-button">Info</Button>
                </Row>
            </Col>
        </Row>
    );
}

export default Features;
