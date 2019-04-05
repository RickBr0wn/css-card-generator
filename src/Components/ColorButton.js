import React, { useState } from 'react'
import { SketchPicker } from 'react-color'

export default function ColorButton({ color, setColor }) {
  const styles = {
    colorButtonContainer: {
      height: '28px',
      width: '128px',
      display: 'flex',
      border: '1px #ccc solid',
      borderRadius: '5px',
      marginLeft: '26px',
      background: color
    },
    popover: {
      position: 'absolute',
      zIndex: 2
    },
    cover: {
      position: 'fixed',
      top: '0px',
      right: '0px',
      bottom: '0px',
      left: '0px'
    }
  }
  let [display, setDisplay] = useState(false)

  return (
    <div
      onClick={() => {
        setDisplay(!display)
      }}
      style={styles.colorButtonContainer}>
      {display ? (
        <div style={styles.popover}>
          <div style={styles.cover} onChange={() => setDisplay(false)} />
          <SketchPicker
            color={color}
            onChange={(color, event) => {
              setColor(color.hex)
            }}
          />
        </div>
      ) : null}
    </div>
  )
}
