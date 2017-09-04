export default function cats(state = {
  loading: false,
  pictures: []
}, action) {
  switch (action.type) {

    case 'FETCH_CATS':
      let catPics = state.pictures.concat(action.payload)
      return Object.assign({}, { loading: state.loading }, { pictures: catPics })

    default:
      return state
  }
}
