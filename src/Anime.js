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
    return (
      <div>
        <h1 className="ml9">
          <span className="text-wrapper">
            {Object.values(this.state.heading).map((letter) => {
              if(letter === /\s/g.test(letter)) {
                return <span className="letters">J</span>
              }
              return (
                <span className="letters">{letter}</span>
              );
            })}
          </span>

          {/*<span class="text-wrapper">
            <span class="letters">h</span>
            <span class="letters">e</span>
            <span class="letters">l</span>
            <span class="letters">l</span>
            <span class="letters">o</span>
          </span>
          */}
        </h1>
      </div>
    );
  }
}


export default AnimeJS;
