import React, { Component } from 'react';
import anime from 'animejs';

class AnimeJS extends Component {
  constructor(props) {
    super(props);

    this.state = {
      heading: "Hudson Valley Web Design"
    }
  }

  componentDidMount = () => {
    anime.timeline({loop: true})
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
        easing: "easeOutExpo",
        delay: 1500
      });

  }

  render() {
    let splitWords = this.state.heading.split("");
    return (
      <div>
        <h1 className="ml9">
          <span className="text-wrapper">
            {Object.values(splitWords).map((letter) => {
              if(letter === " ") {
                return <span className="letters">&nbsp;</span>
              }
              return (
                <span className="letters">{letter}</span>
              );
            })}
          </span>
        </h1>
      </div>
    );
  }
}


export default AnimeJS;
