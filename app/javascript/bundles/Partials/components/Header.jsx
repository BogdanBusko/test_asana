import React, { Component } from 'react';

class Header extends Component {
  render() {
    return(
      <div>
        <a href={this.props.main_page}>Home</a><br />
        <a href={this.props.projects_page}>Projects</a>
      </div>
    )
  }
}

export default Header;
