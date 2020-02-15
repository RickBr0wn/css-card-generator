export const cardReducer = function(state = {}, action) {
  switch (action.type) {
    case 'CARD_WIDTH_UP':
      return Object.assign({}, state, { cardWidth: state.cardWidth + 1 })
    case 'CARD_WIDTH_DOWN':
      return Object.assign({}, state, { cardWidth: state.cardWidth - 1 })
    case 'BORDER_RADIUS_UP':
      return Object.assign({}, state, { borderRadius: state.borderRadius + 1 })
    case 'BORDER_RADIUS_DOWN':
      return Object.assign({}, state, { borderRadius: state.borderRadius - 1 })
    case 'OUTER_PADDING_UP':
      return Object.assign({}, state, { outerPadding: state.outerPadding + 1 })
    case 'OUTER_PADDING_DOWN':
      return Object.assign({}, state, { outerPadding: state.outerPadding - 1 })
    case 'BORDER_WIDTH_UP':
      return Object.assign({}, state, { borderWidth: state.borderWidth + 1 })
    case 'BORDER_WIDTH_DOWN':
      return Object.assign({}, state, { borderWidth: state.borderWidth - 1 })
    case 'SET_COLOR':
      return Object.assign({}, state, { borderColor: action.payload })
    default:
      return state
  }
}

export const imageReducer = function(state = {}, action) {
  switch (action.type) {
    case 'SET_IMAGE':
      return Object.assign({}, state, { imageUrl: action.payload })
    case 'SET_IMAGE_VISIBILITY':
      const currentImageVisibilityState = state.image
      return Object.assign({}, state, { image: !currentImageVisibilityState })
    case 'REFRESH_IMAGE':
      const currentRefreshState = state.refresh
      return Object.assign({}, state, { refresh: !currentRefreshState })
    default:
      return state
  }
}

// export const combineReducers = function(reducers) {
//   return function(state = {}, action) {
//     return Object.keys(reducers).reduce((nextState, key) => {
//       nextState[key] = reducers[key](state[key], action)
//       return nextState
//     }, {})
//   }
// }

export const combineReducers = function(...reducers) {
  return function(state = {}, action) {
    for (let i = 0; i < reducers.length; i++) {
      state = reducers[i](state, action)
    }
    console.log(state)
    return state
  }
}
