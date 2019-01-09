import React, { Component } from 'react';
import './App.scss';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee, faDesktop, faCode, faClock } from '@fortawesome/free-solid-svg-icons'
import NavHeader from './Navbar';
import ContactSection from './ContactSection';
import ContactForm from './ContactForm';
import Footer from './Footer';


class ContactPage extends Component {
  render() {
    return (
      <div className="App">
        <NavHeader />
        <ContactSection />
        <ContactForm />
        <Footer />
      </div>
    );
  }
}

export default ContactPage;
