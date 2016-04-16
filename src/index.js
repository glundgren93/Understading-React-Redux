import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyDVq5Y2AgilV8HNWqORx3cx67taAZhmNUE';

// Create a new functional component. It does not have any concept of state
const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
}

// Take this component's generated HTML and put it on the page
ReactDOM.render(<App />, document.querySelector('.container'));
