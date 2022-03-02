import React from "react";
import "./App.css";
import Search from "./components/Search";
import VideoList from "./components/VideoList";
import Videoplayer from "./components/VideoPlayer";
import youtubeApi from "./components/apis/youtube";

export default class App extends React.Component {
  state = {
    videosMetaInfo: [],
    selectedVideoId: null,
  };

  onSearch = async keyword => {
    const response = await youtubeApi.get("/search", {
      params: {
        q: keyword
      }
    });
    this.setState({
      videosMetaInfo: response.data.items,
      selectedVideoId: response.data.items[0].id.videoId
    });
    console.log(this.state);
  };

  render() {
    return <div className="App">
      <Search onSearch={this.onSearch} />
        <Videoplayer videoId={this.state.selectedVideoId} />
        <VideoList
          onVideoSelected={this.onVideoSelected}
          data={this.state.videosMetaInfo}
        />
    </div>;
  }
}
