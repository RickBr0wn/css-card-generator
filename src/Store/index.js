import React from 'react'
import { cardReducer, imageReducer, combineReducers } from '../Reducers'

const data = {
  cardWidth: 300,
  borderRadius: 5,
  borderWidth: 0,
  borderColor: '#ACCAAC',
  outerPadding: 0,
  image: true,
  imageUrl: null,
  innerPadding: 16,
  titleSize: 14,
  titleHR: false,
  hrLength: 100,
  hrPadding: 0,
  textFontSize: 12,
  refresh: false,
}

export const StateContext = React.createContext()
export const DispatchContext = React.createContext()

export default function StateAndDispatchProvider({ children }) {
  const [state, dispatch] = React.useReducer(
    combineReducers(cardReducer, imageReducer),
    data
  )

  React.useEffect(() => {
    let isLoading = true
    if (isLoading) {
      fetch('https://source.unsplash.com/random/800x600')
        .then(res => dispatch({ type: 'SET_IMAGE', payload: res.url }))
        .catch(err => console.log(err))
    }
    return () => (isLoading = false)
  }, [state.refresh])

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
