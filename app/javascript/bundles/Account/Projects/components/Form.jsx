import React, { Component } from 'react';

class Form extends Component {
  edit() {
    if (this.props.project.id != '')  {
      return(<input type="hidden" name="_method" value="patch" />);
    }
  }

  render() {
    return(
      <form action={this.props.base_url + '/' + this.props.project.id} method="post">
        <input type="hidden" name="authenticity_token" value={this.props.auth_token} />
        {this.edit()}
        <input type="text" name="project[name]" defaultValue={this.props.project.name}/>
        <br />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

Form.defaultProps = {
  action: "",
  auth_token: "",
  base_url: "",
  project: {
    id: "",
    name: ""
  }
}

export default Form;
