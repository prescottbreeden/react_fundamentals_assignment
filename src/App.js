
// dependencies
import React, { Component } from 'react';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

// style-sheets
import './App.css';
import './UserInput/UserInput.css';

class App extends Component {

  /*

1. Create two new components: user input and user output
2. userinput should hold an input element, useroutput two paragraphs
3. Output multiple UserOutput components in the App component (any paragraph texts of your choice)
4. Pass a username (of your chocie) to UserOutput via props to display it there
5. Add state to the App component (=> the username) and pass the username to the UserOutput component
6. Add a method to manipulate the state (=> an event-handler method)
7. Pass the event-handler method reference to the UserInput component and bind it to the input-change event
8. Ensure that the new input entered by the user overwrites the old username passed to UserOutput
9. Add two-way-binding to your input (in UserInput) to also display the startiong username
10. Add styling of your choice to your components/elements in the components - both with inline styles and stylesheets


  */


  state = {
    users: [
      {userName: 'Bob'},
      {userName: 'Dick'},
      {userName: 'Jane'},
    ]
  }

  userHandler1 = (event) => {
    this.setState({
      users: [
        {userName: event.target.value},
        {userName: this.state.users[1].userName},
        {userName: this.state.users[2].userName},
      ]
    })
  }
  userHandler2 = (event) => {
    this.setState({
      users: [
        {userName: this.state.users[0].userName},
        {userName: event.target.value},
        {userName: this.state.users[2].userName},
      ]
    })
  }
  userHandler3 = (event) => {
    this.setState({
      users: [
        {userName: this.state.users[0].userName},
        {userName: this.state.users[1].userName},
        {userName: event.target.value},
      ]
    })
  }


  render() {

    const userOutputStyle = {
        margin: '10px auto',
        padding: '16px',
        border: '1px solid blue',
        width: '50%',
    }
  
    return (
      <div className="App">
        <h1>Fundamentals Assignment</h1>
        <div 
          style = {userOutputStyle}
          className="user1">
          
          <UserInput 
            value = {this.state.users[0].userName}
            changed = {this.userHandler1}
            />

          <UserOutput
            style = {userOutputStyle} 
            userName = {this.state.users[0].userName}
            changed = {this.userHandler1}
            />

        </div>
        <div
          style = {userOutputStyle}
          className="user2">
          
          <UserInput 
            value = {this.state.users[1].userName}
            changed = {this.userHandler2}
          />

          <UserOutput 
            userName = {this.state.users[1].userName}
            changed = {this.userHandler2}
          />
        </div>
        <div 
          style = {userOutputStyle}
          className="user3">
          
          <UserInput 
            value = {this.state.users[2].userName}
            changed = {this.userHandler3}
          />
          
          <UserOutput 
            style = {userOutputStyle}
            userName = {this.state.users[2].userName}
            changed = {this.userHandler3}
          />
        </div>
      </div>
    );
  }
}

export default App;
