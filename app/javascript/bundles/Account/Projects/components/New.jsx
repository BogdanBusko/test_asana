import React, { Component } from 'react';
import Form from './Form';

class New extends Component {
  render() {
    return(
      <div>
        <h1>New project</h1>
        <Form auth_token={this.props.auth_token} base_url={this.props.base_url} />
      </div>
    );
  }
}

export default New;
