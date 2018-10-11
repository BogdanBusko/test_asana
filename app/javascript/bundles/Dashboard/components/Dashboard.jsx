import React from 'react';

export default class Dashboard extends React.Component {
  click() {
    console.log('Hello world');
  }

  render() {
    return (
      <div>
        <h1>Dashboard</h1>
        <button onClick={this.click}>Hello</button>
      </div>
    )
  }
}
