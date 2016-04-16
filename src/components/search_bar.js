import React, { Component } from 'react';

// Class based components had concept of state.
class SearchBar extends Component {
  constructor(props) {
    super(props);

    // in the constructor we set state equals to an object
    this.state = { query: '' };
  }

  // outside the constructor we manipulate the state using 'this.setState'
  render() {
    return (
      <div>
        <input
        // this turns it into a controlled component. It will have it's value set by state
        // it's value will only change, when the state changes.
        value={this.state.query}
        onChange={ (event) => this.setState({ query: event.target.value }) } />
      </div>
    );
  }
}

export default SearchBar;
