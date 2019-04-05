import React, { useState } from 'react'

const styles = {
  btn: {
    height: '28px',
    width: '128px',
    display: 'flex',
    justifyContent: 'center',
    textTransform: 'uppercase',
    border: '1px #ccc solid',
    borderRadius: '5px',
    marginLeft: '26px',
    background: '#ccc',
    color: '#000'
  }
}

export default function Button() {
  let [hover, setHover] = useState(false)

  return <button style={styles.btn}>{hover ? 'on' : 'off'}</button>
}
