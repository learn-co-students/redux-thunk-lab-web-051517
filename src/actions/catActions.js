import fetch from 'isomorphic-fetch';

export default function fetchCats() {

  return function(dispatch){
    dispatch({ type: 'START_ADDING_CATS_REQUEST'})
    return fetch('http://localhost:3000/db')
      .then(response => response.json())
      .then(json => dispatch({ type: 'FETCH_CATS', payload: json.images}))
  }
}
