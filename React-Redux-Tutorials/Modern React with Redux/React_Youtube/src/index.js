import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
const API_KEY = 'AIzaSyDt0Br9gBxf2nVEEEaPc7mGFtiMC-a0afA';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos : [],
      selectedVideo: null
     };
     this.videoSearch('Your Lie in April');
  }

  videoSearch(term) {
    YTSearch({key: API_KEY, term: term}, (videos) => {
      //NOTE: ES6 Syntax: if the key and value are same name we can condense it like this.
      //this.setState({ videos: videos }) -> this.setState({videos})
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }


  render() {
    //We use this function to do a video search every 300 millisecond. So when users type
    //on search bar, it wouldn't keep on searching instantly, instead 300 ms.
    const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);

    return (
      <div>
        <SearchBar onSearchTermChange={videoSearch} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
        onVideoSelect={selectedVideo => this.setState({selectedVideo})}
        videos={this.state.videos} />
        {/*this.setState({selectedVideo}) is same as this.setState({selectedVideo : selectedVideo}) */}
      </div>
    );
  }
};
//Take this compoennt's generated HTML and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
