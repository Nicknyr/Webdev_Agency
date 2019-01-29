import React, { Component } from 'react';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Image from 'react-bootstrap/lib/Image';
import Placeholder from './images/placeholder.png';
import Button from 'react-bootstrap/lib/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Restaurant from './images/restaurant.jpg';
import RecordStore from './images/recordstore.jpg';
import Office from './images/office.jpg';
import Museum from './images/museum.jpg';
import BookStore from './images/bookstore.jpg';

const Clients = () => {
      return (
        <div className="clients-section">
          <Row className="show-grid">
            <Col xs={12} md={12} className="portfolio-header">
              <h1>Portfolio</h1>
            </Col>
          </Row>
          <Row className="show-grid">
              <Col xs={12} md={10} mdOffset={1} className="clients-item">
                  <Col xs={12} md={6} >
                    <h2>Mike's Burger Joint</h2>
                    <Image src={Restaurant} width={450} />
                  </Col>
                  <Col xs={12} md={6}>
                    <p>Sint nostrud a incurreret ubi o ipsum enim se expetendis. Offendit labore ad
                      nostrud graviterque, eu ad cillum quorum sint. Do si illustriora in ab irure
                      appellat si doctrina ad aute, arbitror sint incurreret. Proident ab amet.In
                      probant comprehenderit, officia elit se offendit praesentibus. Summis quibusdam
                      concursionibus o quid possumus relinqueret nam quamquam a commodo est ingeniis
                      quis te cupidatat concursionibus. Tempor despicationes cupidatat quorum singulis
                      est quis familiaritatem ingeniis aute litteris, noster graviterque constias
                      quorum officia, ingeniis ex anim incididunt.</p>
                  </Col>
              </Col>
          </Row>
          <Row className="show-grid">
              <Col xs={12} md={10} mdOffset={1} className="clients-item">
                  <Col xs={12} md={6} >
                    <h2>Brooklyn Records</h2>
                    <Image src={RecordStore} width={450} />
                  </Col>
              <Col xs={12} md={6}>
                    <p>Sint nostrud a incurreret ubi o ipsum enim se expetendis. Offendit labore ad
                      nostrud graviterque, eu ad cillum quorum sint. Do si illustriora in ab irure
                      appellat si doctrina ad aute, arbitror sint incurreret. Proident ab amet.In
                      probant comprehenderit, officia elit se offendit praesentibus. Summis quibusdam
                      concursionibus o quid possumus relinqueret nam quamquam a commodo est ingeniis
                      quis te cupidatat concursionibus. Tempor despicationes cupidatat quorum singulis
                      est quis familiaritatem ingeniis aute litteris, noster graviterque constias
                      quorum officia, ingeniis ex anim incididunt.</p>
              </Col>
            </Col>
          </Row>
          <Row className="show-grid">
              <Col xs={12} md={10} mdOffset={1} className="clients-item">
                  <Col xs={12} md={6} >
                    <h2>Synergy Marketing</h2>
                    <Image src={Office} width={450} />
                  </Col>
              <Col xs={12} md={6}>
                    <p>Sint nostrud a incurreret ubi o ipsum enim se expetendis. Offendit labore ad
                      nostrud graviterque, eu ad cillum quorum sint. Do si illustriora in ab irure
                      appellat si doctrina ad aute, arbitror sint incurreret. Proident ab amet.In
                      probant comprehenderit, officia elit se offendit praesentibus. Summis quibusdam
                      concursionibus o quid possumus relinqueret nam quamquam a commodo est ingeniis
                      quis te cupidatat concursionibus. Tempor despicationes cupidatat quorum singulis
                      est quis familiaritatem ingeniis aute litteris, noster graviterque constias
                      quorum officia, ingeniis ex anim incididunt.</p>
              </Col>
            </Col>
          </Row>
          <Row className="show-grid">
              <Col xs={12} md={10} mdOffset={1} className="clients-item">
                <Col xs={12} md={6} >
                    <h2>Museum of NYC History</h2>
                    <Image src={Museum} width={450} />
                </Col>
              <Col xs={12} md={6}>
                    <p>Sint nostrud a incurreret ubi o ipsum enim se expetendis. Offendit labore ad
                      nostrud graviterque, eu ad cillum quorum sint. Do si illustriora in ab irure
                      appellat si doctrina ad aute, arbitror sint incurreret. Proident ab amet.In
                      probant comprehenderit, officia elit se offendit praesentibus. Summis quibusdam
                      concursionibus o quid possumus relinqueret nam quamquam a commodo est ingeniis
                      quis te cupidatat concursionibus. Tempor despicationes cupidatat quorum singulis
                      est quis familiaritatem ingeniis aute litteris, noster graviterque constias
                      quorum officia, ingeniis ex anim incididunt.</p>
              </Col>
            </Col>
          </Row>
          <Row className="show-grid">
              <Col xs={12} md={10} mdOffset={1} className="clients-item">
                  <Col xs={12} md={6} >
                    <h2>Bookworm Books</h2>
                    <Image src={BookStore} width={450} />
              </Col>
              <Col xs={12} md={6}>
                    <p>Sint nostrud a incurreret ubi o ipsum enim se expetendis. Offendit labore ad
                      nostrud graviterque, eu ad cillum quorum sint. Do si illustriora in ab irure
                      appellat si doctrina ad aute, arbitror sint incurreret. Proident ab amet.In
                      probant comprehenderit, officia elit se offendit praesentibus. Summis quibusdam
                      concursionibus o quid possumus relinqueret nam quamquam a commodo est ingeniis
                      quis te cupidatat concursionibus. Tempor despicationes cupidatat quorum singulis
                      est quis familiaritatem ingeniis aute litteris, noster graviterque constias
                      quorum officia, ingeniis ex anim incididunt.</p>
              </Col>
            </Col>
          </Row>
        </div>
      );
}

export default Clients;
