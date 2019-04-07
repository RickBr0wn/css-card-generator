import React, { createContext, useState } from 'react'
import { ADD_TODO } from '../Constants'
export const StoreContext = createContext({})

export default function Store({ children }) {
  let [cardWidth, setCardWidth] = useState(450)
  let [borderRadius, setBorderRadius] = useState(0)
  let [borderWidth, setBorderWidth] = useState(0)
  let [borderColor, setBorderColor] = useState('#ff0000')
  let [hoverStyles, setHoverStyles] = useState(false)
  let [padding, setPadding] = useState(0)
  let [image, setImage] = useState(false)
  let [innerPadding, setInnerPadding] = useState(0)
  let [titleSize, setTitleSize] = useState(14)

  const data = {
    code: '',
    card: {
      cardWidth,
      borderRadius,
      borderWidth,
      borderColor,
      hoverStyles,
      image,
      padding,
      innerPadding,
      titleSize
    },
    setters: {
      setCardWidth,
      setBorderRadius,
      setBorderWidth,
      setBorderColor,
      setHoverStyles,
      setImage,
      setPadding,
      setInnerPadding,
      setTitleSize
    }
  }

  return (
    <StoreContext.Provider value={[data]}>{children}</StoreContext.Provider>
  )
}
