import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyDVq5Y2AgilV8HNWqORx3cx67taAZhmNUE';

// in class based components, props are always available by using 'this.props'
class App extends Component {

  constructor(props) {
    super(props);

    this.state = { videos: [] };

    YTSearch({ key: API_KEY, term: 'dota 2'}, (videos) => {

      // this.setState({ videos: videos })
      // ES6: when key and value have same name we can just call the name instead
      this.setState({ videos });
    });
  }

  render() {
    return (
      <div>
        <SearchBar />
        <VideoDetail video={this.state.videos[0]}/>
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}
// Take this component's generated HTML and put it on the page
ReactDOM.render(<App />, document.querySelector('.container'));
