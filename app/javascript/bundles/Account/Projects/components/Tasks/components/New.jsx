import React, { Component } from 'react';
import Form from './Form'

class New extends Component {
  render() {
    return(
      <Form base_url={this.props.base_url} project_id={this.props.project_id} auth_token={this.props.auth_token} />
    )
  }
}

export default New;
