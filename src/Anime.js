import React, { Component } from 'react';
import anime from 'animejs';

class AnimeJS extends Component {
  constructor(props) {
    super(props);

    this.state = {
      heading: 'Coffee mornings'
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
        delay: 1000
      });
  }

  //$('.ml13').each(function(){
  //$(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
  //});

  render() {
    return (
      <div>
        <h1 class="ml9">
          <span class="text-wrapper">
            <span class="letters">h</span>
            <span class="letters">e</span>
            <span class="letters">l</span>
            <span class="letters">l</span>
            <span class="letters">o</span>
          </span>
        </h1>
      </div>
    );
  }
}


export default AnimeJS;
