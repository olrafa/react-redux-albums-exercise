import { ADD_ALBUM, SET_ALBUM } from "../actions/albums";

export default (state = [], action = {}) => {
    switch(action.type) {
        case ADD_ALBUM:
        return   [...state,
        { ...action.payload }
      ]
        case SET_ALBUM:
        return action.payload.map(newArray => ({...newArray}))
    default:
      return state
  }
}


