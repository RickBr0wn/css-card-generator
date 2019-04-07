import React, { useState } from 'react'

const styles = {
  textBox: {
    width: '45px',
    border: '1px solid #ccc',
    paddingLeft: '5px',
    height: '26px',
    borderTopLeftRadius: '5px',
    borderBottomLeftRadius: '5px',
    fontSize: '14px',
    color: '#2cc3f2',
    paddingBottom: '1px'
  },
  container: {
    display: 'flex',
    marginLeft: '-24px'
  },
  buttonContainer: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    border: '1px solid #ccc',
    fontSize: '10px',
    padding: '3px 3px',
    height: '26px',
    borderTopRightRadius: '5px',
    borderBottomRightRadius: '5px'
  },
  label: {
    position: 'relative',
    top: '-14px',
    left: '50%',
    color: '#2cc3f2',
    fontSize: '1rem',
    marginBottom: '0.6rem',
    textTransform: 'uppercase'
  },
  plus: { cursor: 'pointer' },
  minus: { cursor: 'pointer' },
  error: {
    color: 'red',
    fontSize: '10px',
    position: 'relative',
    top: '28px',
    left: '-56px'
  }
}

export default function Counter({ label, controlledProp, setControlledProp }) {
  let [error, setError] = useState('')

  return (
    <div style={styles.container}>
      <h5 style={styles.label}>{label} px</h5>
      <input
        type='text'
        style={styles.textBox}
        value={controlledProp}
        onChange={event => setControlledProp(event.target.value)}
      />
      <div style={styles.buttonContainer}>
        <div
          onClick={() => setControlledProp(controlledProp++)}
          style={styles.plus}>
          <i className='fas fa-sort-up' />
        </div>
        <div
          onClick={() => setControlledProp(controlledProp--)}
          style={styles.minus}>
          <i className='fas fa-sort-down' />
        </div>
      </div>
      <div style={styles.error}>
        <p>{error}</p>
      </div>
    </div>
  )
}
