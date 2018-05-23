import {ADD_PROFILE, DELETE_PROFILE, EDIT_PROFILE, UPDATE_PROFILE} from '../actions/profile'

export default (state=[], {type, payload} = {}) => {
  switch (type) {
    case ADD_PROFILE:
     return state.concat({
       ...payload,
       id: new Date()
     })

    case DELETE_PROFILE:
      return state.filter((profile)=> profile.id !== payload)

    case EDIT_PROFILE:
      return state.map((profile)=> profile.id === payload?
              {...profile,
               editing: !profile.editing}: profile )

    case UPDATE_PROFILE:
      return state.map((profile)=> {
        if(profile.id === payload.id) {
          return {
            ...profile,
            ...payload,
            editing: !profile.editing
          }
        } else return profile;
      })
    default:
      return state
  }
}
