import React, { Component } from 'react';

// implement hoc using traditional function
function withUpperCase(WrappedComponent) {
  return function(props) {
    return (
      <WrappedComponent {...props}>
        {props.title}: {props.children.toUpperCase()}
      </WrappedComponent>
    )
  }
}

const Username = (props) => <div>{props.children}</div>
const Email = (props) => <div>{props.children}</div>

const UpperCaseUsername = withUpperCase(Username);
const UpperCaseEmail = withUpperCase(Email);

class App extends Component {
  state = {
    username: 'sydinh',
    email: 'sydinh.dev@gmail.com',
  }
  render() {
    const { username, email } = this.state;
    return (
      <div>
        <UpperCaseUsername title="Username">{username}</UpperCaseUsername>
        <UpperCaseEmail title="Email">{email}</UpperCaseEmail>
      </div>
    )
  }
}

export default App;
