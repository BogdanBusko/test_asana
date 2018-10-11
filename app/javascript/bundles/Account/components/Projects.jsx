import React, { Component } from 'react';

const Form = (params) => {
  return(
    <form id='create_project' action={'http://localhost:3000/account/projects'} method={params.action}>
      <input type="hidden" name="authenticity_token" value={params.auth_token} />
      <input type='text' name='project[name]' />
      <br />
      <input type='submit' value="Create project" />
    </form>
  )
}

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [],
      auth_token: '',
      project: [],
      edit: false
    };

    this.handleClick = this.handleClick.bind(this);
  }

  componentWillMount() {
    this.projects();
  }

  projects() {
    let projects = this.props.projects.map( project => {
      return(
        <div key={project.id}>
          <h3>
            <a href={'http://localhost:3000/account/projects/' + project.id }>{project.name}</a>
          </h3>

          { this.state.edit ? Form({auth_token: this.props.auth_token, action: "put"}) : null }
        </div>
      )
    });

    this.setState({ projects: projects, auth_token: this.props.auth_token });
  }

  handleClick(event) {
    event.preventDefault();
    this.setState({ edit: !this.state.edit });
  }

  render() {
    return(
      <div className="projects">
        <button onClick={this.handleClick}>Click Me</button>
        <h1>Projects</h1>
        {Form({auth_token: this.props.auth_token, action: "post"})}
        {this.createProject}
        {this.state.projects}
      </div>
    )
  }
}

export default Projects;
