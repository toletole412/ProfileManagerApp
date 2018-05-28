import React, { Component } from 'react'
import PostProfile from './containers/PostProfile'
import ProfileList from './containers/ProfileList'
import './App.css'


class App extends Component {
  render() {
    return (
      <div className="App">
        <section className="landing">
          <PostProfile />
        </section>
        <ProfileList />
      </div>
    );
  }
}

export default App;
