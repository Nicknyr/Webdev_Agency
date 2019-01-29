import React, { Component } from 'react';
import Jumbotron from 'react-bootstrap/lib/Jumbotron';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Button from 'react-bootstrap/lib/Button';
import anime from 'animejs';



class Landing extends Component {
  constructor(props) {
    super(props);

    this.state = {
      heading: "Hudson Valley Web Design"
    }
  }

  componentDidMount = () => {
    anime({
        targets: '.landing-greeting',
        delay: 2000,
        easing: 'easeInOutSine',
        translateX: 750
      })

      anime.timeline({loop: false})
      .add({
        targets: '.ml9 .letters',
        scale: [0, 1],
        duration: 1500,
        elasticity: 600,
        delay: function(el, i) {
          return 45 * (i+1)
        }
      }).add({
          targets: '.ml9',
          opacity: 0,
          duration: 1000,
          easing: "easeOutExpo"
        });

      anime({
        targets: '.svg-icon',
        translateX: -500,
        easing: 'easeInOutSine',
        delay: 2000,

      });



  }

  render() {
    return (
        <Jumbotron>
        <Row className="show-grid">
            <Col xs={12} md={5} mdPush={2} className="landing-greeting">
                <h1 className="ml9">
                  <span className="text-wrapper">
                    {Object.values(this.state.heading).map((letter) => {
                      if(letter === " ") {
                        return <span className="letters">&nbsp;</span>
                      }
                      return (
                        <span className="letters">{letter}</span>
                      );
                    })}
                  </span>
                </h1>
                <h3>Want the best in the business? You're in the right place!</h3>
                <Button bsClass="my-button" id="landing-button">Learn More</Button>
            </Col>
            <Col xs={12} md={4} mdPush={2} className="landing-svg">
                <svg class="svg-icon" viewBox="0 0 20 20">
    							<path fill="none" d="
                    M17.125,1.375H2.875c-0.828,0-1.5,0.672-1.5,1.5v11.25c0,0.828,0.672,1.5,1.5,1.5H7.75v2.25H6.625c-0.207,0-0.375,0.168-0.375,0.375s0.168,0.375,0.375,0.375h6.75c0.207,0,0.375-0.168,0.375-0.375s-0.168-0.375-0.375-0.375H12.25v-2.25h4.875c0.828,0,1.5-0.672,1.5-1.5V2.875C18.625,2.047,17.953,1.375,17.125,1.375z M11.5,17.875h-3v-2.25h3V17.875zM17.875,14.125c0,0.414-0.336,0.75-0.75,0.75H2.875c-0.414,0-0.75-0.336-0.75-0.75v-1.5h15.75V14.125z M17.875,11.875H2.125v-9c0-0.414,0.336-0.75,0.75-0.75h14.25c0.414,0,0.75,0.336,0.75,0.75V11.875z M10,14.125c0.207,0,0.375-0.168,0.375-0.375S10.207,13.375,10,13.375s-0.375,0.168-0.375,0.375S9.793,14.125,10,14.125z">
                  </path>
  						   </svg>
            </Col>
        </Row>
        </Jumbotron>
    );
  }
}

export default Landing;
