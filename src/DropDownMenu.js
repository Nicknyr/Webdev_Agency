import React, { Component } from 'react';
//import { MenuItem, DropdownButton } from 'reactstrap';
import MenuItem  from 'react-bootstrap/lib/MenuItem';
import DropdownButton from 'react-bootstrap/lib/DropdownButton';

class DropDownMenu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      menuOpen: false
    }
  }

  toggle = () => {
    this.setState({
      menuOpen: !this.state.menuOpen
    });
  }

  onMouseEnter = () => {
    this.setState({
      menuOpen: true
    });
  }

  onMouseLeave = () => {
    this.setState({
      menuOpen: false
    });
  }

  render() {
    return (
      <DropdownButton
        bsStyle="default"
        title="No caret"
        noCaret
        id="dropdown-no-caret"
        onMouseOver={this.onMouseEnter}
        onMouseLeave={this.onMouseLeave}
        isOpen={this.state.menuOpen}
      >
        <MenuItem>Item 1</MenuItem>
        <MenuItem>Item 2</MenuItem>
        <MenuItem>Item 3</MenuItem>
      </DropdownButton>
    );
  }
}

export default DropDownMenu;
