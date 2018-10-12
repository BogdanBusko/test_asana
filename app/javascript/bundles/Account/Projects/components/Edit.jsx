import React, { Component } from 'react';
import Form from './Form'

class Edit extends Component {
  render() {
    return(
      <div>
        <h1>Edit project </h1>
        <Form auth_token={this.props.auth_token} project={this.props.project} base_url={this.props.base_url} />
      </div>
    );
  }
}

export default Edit;
