import React, { useState } from 'react'
import '../CSS/card.css'
import ControlPanel from './ControlPanel'

const Card = () => {
  let [radius, setRadius] = useState(0)
  let [width, setWidth] = useState(0)
  let [color, setColor] = useState('#ff0000')
  let [hover, setHover] = useState(false)
  let [image, setImage] = useState(null)
  let [padding, setPadding] = useState(0)

  const styles = {
    card: {
      position: 'absolute',
      top: '20%',
      left: '50%',
      transform: 'translate(-50%, 0%)',
      padding: `${padding}px`,
      background: '#fff',
      borderRadius: radius,
      border: `${width}px ${color} solid`,
      overflow: 'hidden'
    },
    code: {
      fontSize: '12px',
      padding: '0 3rem 1rem 3rem'
    },
    image: {
      width: '100%',
      // maxWidth: '450px',
      overflow: 'hidden'
    }
  }

  return (
    <div style={styles.card}>
      {image ? (
        <img
          style={styles.image}
          src='https://source.unsplash.com/random/800x600'
          alt='A random placeholder'
        />
      ) : null}
      <ControlPanel
        radius={radius}
        setRadius={setRadius}
        width={width}
        setWidth={setWidth}
        color={color}
        setColor={setColor}
        hover={hover}
        setHover={setHover}
        image={image}
        setImage={setImage}
        padding={padding}
        setPadding={setPadding}
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
