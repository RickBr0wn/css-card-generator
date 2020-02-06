import React from 'react'

const data = {
  cardWidth: 300,
  borderRadius: 5,
  borderWidth: 0,
  borderColor: '#68f381',
  outerPadding: 0,
  image: true,
  imageUrl: null,
  innerPadding: 16,
  titleSize: 14,
  titleHR: false,
  hrLength: 100,
  hrPadding: 0,
  textFontSize: 12,
}

export const StateContext = React.createContext()
export const DispatchContext = React.createContext()

const reducer = function(state, action) {
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
    case 'SET_IMAGE':
      return Object.assign({}, state, { imageUrl: action.payload })
    default:
      return state
  }
}

export default function StateAndDispatchProvider({ children }) {
  const [state, dispatch] = React.useReducer(reducer, data)

  React.useEffect(() => {
    let isLoading = true
    if (isLoading) {
      fetch('https://source.unsplash.com/random/800x600')
        .then(res => dispatch({ type: 'SET_IMAGE', payload: res.url }))
        .catch(err => console.log(err))
    }
    return () => (isLoading = false)
  }, [])

  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        {children}
      </DispatchContext.Provider>
    </StateContext.Provider>
  )
}

function useStateContext() {
  const context = React.useContext(StateContext)
  if (context === undefined) {
    throw new Error(
      'useStateContext must be used within a StateAndDispatchProvider'
    )
  }
  return context
}

function useDispatchContext() {
  const context = React.useContext(DispatchContext)
  if (context === undefined) {
    throw new Error(
      'useDispatchContext must be used within a StateAndDispatchProvider'
    )
  }
  return context
}

export { StateAndDispatchProvider, useStateContext, useDispatchContext }
