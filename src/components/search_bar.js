import React, { Component } from 'react';

// Class based components had concept of state.
class SearchBar extends Component {
  constructor(props) {
    super(props);

    // in the constructor we set state equals to an object
    this.state = { term: '' };
  }

  // outside the constructor we manipulate the state using 'this.setState'
  render() {
    return (
      <div className="search-bar">
        <input
        // this turns it into a controlled component. It will have it's value set by state
        // it's value will only change, when the state changes.
        value={this.state.term}
        onChange={ event => this.onInputChange(event.target.value) } />
      </div>
    );
  }

  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
  }

}

export default SearchBar;
