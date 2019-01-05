import React, { Component } from 'react';
import './App.scss';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee, faDesktop, faCode, faClock } from '@fortawesome/free-solid-svg-icons'
import NavHeader from './Navbar';
import Landing from './Landing';
import Features from './Features';
import Section1 from './Section1';
import Footer from './Footer';
import CustomButton from './CallToActionButton';
import DropDownMenu from './DropDownMenu';

library.add(fab, faCheckSquare, faCoffee, faDesktop, faCode, faClock)


class App extends Component {
  render() {
    return (
      <div className="App">
        <NavHeader />
        <Landing />
        <Features />
        <Section1 />
        <DropDownMenu />
        <Footer />
      </div>
    );
  }
}

export default App;
