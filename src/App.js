import React, { Component } from 'react';
import './App.scss';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee, faDesktop, faCode, faClock } from '@fortawesome/free-solid-svg-icons'
import NavHeader from './Navbar';
import Landing from './Landing';
import Features from './Features';
import Section1 from './Section1';
import Section2 from './Section2';
import Section3 from './Section3';
import ContactSection from './ContactSection';
import ContactForm from './ContactForm';
import Table from './Table';
import AnimeJS from './Anime.js';
import Footer from './Footer';


library.add(fab, faCheckSquare, faCoffee, faDesktop, faCode, faClock)


class App extends Component {
  render() {
    return (
      <div className="App">
        <NavHeader />
        <Landing />
        <Features />
        <Section1 />
        <Section2 />
        <Section3 />
        <ContactSection />
        <ContactForm />
        <AnimeJS />
        <Footer />
      </div>
    );
  }
}

export default App;
