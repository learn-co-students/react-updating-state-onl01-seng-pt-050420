// Code ClickityClick Component Here
import React from 'react';
 
class ClickityClick extends React.Component {
  constructor() {
    super();
 
    // Define the initial state:
    this.state = {
      hasBeenClicked: false,
      currentTheme: 'blue',
      theme: 'blue',
      addressInfo: {
        street: null,
        number: null,
        city: 'New York City',
        country: null
      },
    };
}

handleClick = () => {
    this.setState({
        hasBeenClicked: true 
    })
  };
 
  render() {
    return (
      <div>
        <p>I have {this.state.hasBeenClicked ? 'SERIOUSLY' : 'never'} been clicked!</p>
        <button onClick={this.handleClick}>Click me!</button>
      </div>
    );
  }
}
 
export default ClickityClick;