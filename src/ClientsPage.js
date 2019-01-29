import React, { Component } from 'react';
import './App.scss';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee, faDesktop, faCode, faClock } from '@fortawesome/free-solid-svg-icons'
import NavHeader from './Navbar';
import Clients from './Clients';
import Footer from './Footer';


class ClientsPage extends Component {
  render() {
    return (
      <div className="App">
        <NavHeader />
        <Clients />
        <Footer />
      </div>
    );
  }
}

export default ClientsPage;
