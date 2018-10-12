import React, { Component } from 'react';

class Form extends Component {
  render() {
    return(
      <form action={this.props.base_url + '/' + this.props.project_id + '/tasks' } method="post">
        <input type="hidden" name="authenticity_token" value={this.props.auth_token} />
        <input type="text" placeholder='Title'       name="task[title]" /><br />
        <input type="text" placeholder='Description' name="task[description]" /><br />
        <input type="submit" value="Task" />
      </form>
    );
  }
}

Form.defaultProps = {
  auth_token: "",
  url: "",
  project: {
    id: "",
    name: ""
  }
}

export default Form;
