import React, { Component } from 'react';

class Project extends Component {
  constructor(props) {
    super(props);
    this.state = {
      project: [],
      tasks: []
    }
  }

  componentWillMount() {
    this.project();
  }

  project() {
    let tasks = this.props.tasks.map(task => {
      return(
        <div key={task.id}>
          <p>
            <h3>{task.title}</h3>
            <p>
              {task.description}
            </p>
          </p>
        </div>
      )
    })

    this.setState({ project: this.props.project, tasks: tasks });
  }

  render() {
    return(
      <div className='project'>
        <h1>{this.state.project.name}</h1>
        <div>
          {this.state.tasks}
        </div>
      </div>
    )
  }
}

export default Project;
