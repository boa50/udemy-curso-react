import React, { Component } from 'react';
import './App.css';
import UserOutput from './components/UserOutput';
import UserInput from './components/UserInput';

class App extends Component {
  state = {
    username: 'user'
  }

  eventHandler = event => {
    this.setState({ username: event.target.value });
  }

  render() {
    return (
      <div className="App">
        <ol>
          <li>X Create TWO new components: UserInput and UserOutput</li>
          <li>X UserInput should hold an input element, UserOutput two paragraphs</li>
          <li>X Output multiple UserOutput components in the App component (any paragraph texts of your choice)</li>
          <li>X Pass a username (of your choice) to UserOutput via props and display it there</li>
          <li>X Add state to the App component (=> the username) and pass the username to the UserOutput component</li>
          <li>X Add a method to manipulate the state (=> an event-handler method)</li>
          <li>X Pass the event-handler method reference to the UserInput component and bind it to the input-change event</li>
          <li>X Ensure that the new input entered by the user overwrites the old username passed to UserOutput</li>
          <li>X Add two-way-binding to your input (in UserInput) to also display the starting username</li>
          <li>X Add styling of your choice to your components/ elements in the components - both with inline styles and stylesheets</li>
        </ol>

        <UserInput handler={this.eventHandler} username={this.state.username} />
        <UserOutput username={this.state.username} />
        <UserOutput username={this.state.username} />
        <UserOutput username={this.state.username} />
      </div>
    );
  }
}

export default App;
