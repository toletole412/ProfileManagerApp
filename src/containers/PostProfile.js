import React, { Component } from 'react'
import ProfileForm from '../components/ProfileForm'
import { addProfile } from '../actions/profile'
import { connect } from 'react-redux'

class PostProfile extends Component {

  addProfile = data => {
    this.props.addProfile(data)
  }

  render() {
    return (
      <div>
        <ProfileForm onSubmit={this.addProfile} />
      </div>
    )
  }
}

export default connect(null, {addProfile})(PostProfile)
