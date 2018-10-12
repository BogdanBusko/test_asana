import React, { Component } from 'react';

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: []
    };
  }

  componentWillMount() {
    this.projects();
  }

  projects() {
    let projects = this.props.projects.map( project => {
      return(
        <div key={project.id}>
          <h3>
            <a href={ this.props.base_url + '/' + project.id }>{project.name}</a>
          </h3>
          <a href={this.props.base_url + '/' + project.id + '/edit'}>Edit</a><br />
          <a href={this.props.base_url + '/' + project.id} data-method='delete'>Delete</a>
        </div>
      )
    });

    this.setState({ projects: projects });
  }

  render() {
    return(
      <div className='projects'>
        <h1>Projects</h1>
        <a href={this.props.base_url + '/new'}>New project</a>
        {this.state.projects}
      </div>
    )
  }
}

export default Index;
