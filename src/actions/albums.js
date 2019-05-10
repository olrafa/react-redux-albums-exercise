
export const NEW_HELLO_WORLD = 'NEW_HELLO_WORLD'

export function helloWorld(firstName, lastName) {
    return {
      type: NEW_HELLO_WORLD,
      payload: {
        firstName: firstName,
        lastName: lastName
      }
    }
  }

export const ADD_ALBUM = 'ADD_ALBUM'

export function addAlbum(id, title) {
      return {
          type: ADD_ALBUM,
          payload: {
              id: id,
              title: title
          }
      }
  }

export const SET_ALBUM = 'SET_ALBUM'

export function setAlbums(albums) {
  return {
    type: SET_ALBUM,
    payload: albums
  }
}