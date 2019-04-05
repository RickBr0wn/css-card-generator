import React, { useState } from 'react'
import '../CSS/card.css'
import ControlPanel from './ControlPanel'

const Card = () => {
  let [radius, setRadius] = useState(18)
  let [width, setWidth] = useState(0)
  let [color, setColor] = useState('#ff0000')

  const styles = {
    card: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      padding: '3rem',
      background: '#fff',
      borderRadius: radius,
      border: `${width}px ${color} solid`
    },
    code: {
      fontSize: '12px'
    }
  }

  return (
    <div style={styles.card}>
      <ControlPanel
        radius={radius}
        setRadius={setRadius}
        width={width}
        setWidth={setWidth}
        color={color}
        setColor={setColor}
      />
      <div style={styles.code}>
        And here is your CSS ready to copy and paste!
      </div>
      <br />
      <div style={styles.code}>{`border-radius: ${radius}px;`}</div>
      <div style={styles.code}>
        {width ? `border: ${width}px solid ${color};` : null}
      </div>
    </div>
  )
}

export default Card
