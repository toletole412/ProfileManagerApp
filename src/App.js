import React, { Component } from 'react';
import PostProfile from './containers/PostProfile'
import ProfileList from './containers/ProfileList'


class App extends Component {
  render() {
    return (
      <div className="App">
        <PostProfile />
        <ProfileList />
      </div>
    );
  }
}

export default App;
