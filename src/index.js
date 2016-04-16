import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import _ from 'lodash';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyDVq5Y2AgilV8HNWqORx3cx67taAZhmNUE';

// in class based components, props are always available by using 'this.props'
class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    this.videoSearch('dota 2');
  }

  videoSearch(term) {
    YTSearch({ key: API_KEY, term: term}, (videos) => {

      // this.setState({ videos: videos })
      // ES6: when key and value have same name we can just call the name instead
      // this.setState({ videos });
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }

  render() {
    // throttling video search function using lodash's debounce
    // this function can now only be called once every 300ms
    const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);

    return (
      <div>
        <SearchBar onSearchTermChange= {videoSearch}/>
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
         // takes a video and updates 'this.state.selectedVideo' and pass it as a property to VideoList
          onVideoSelect={ selectedVideo => this.setState({selectedVideo}) }
          videos={this.state.videos} />
      </div>
    );
  }
}
// Take this component's generated HTML and put it on the page
ReactDOM.render(<App />, document.querySelector('.container'));
