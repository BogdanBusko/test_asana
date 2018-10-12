import React, { Component } from 'react';
import NewTask from "./Tasks/components/New";

class Show extends Component {
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
            <h3>{task.title}</h3>
            <p>
              {task.description}
            </p>
        </div>
      )
    })

    this.setState({ project: this.props.project, tasks: tasks });
  }

  render() {
    return(
      <div>
        <h1>{this.state.project.name}</h1>
        <div>
          {this.state.tasks}
        </div>
        <NewTask base_url={this.props.base_url} project_id={this.props.project.id} auth_token={this.props.auth_token}/>
      </div>
    )
  }
}

export default Show;
