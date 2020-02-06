import React, { useState } from 'react'
import { SketchPicker } from 'react-color'
import styled from 'styled-components'
import { useDispatchContext } from '../Store/index'

const StyledColorPicker = styled.div`
  height: 32px;
  border: 1px solid grey;
  background-color: ${({ color }) => color};
  width: 80px;
  margin-top: 20px
  padding-left: 6px;
  border-radius: 5px;
  padding-top: 20px;
  position: relative;
`

const StyledLabel = styled.label`
  position: absolute;
  top: -23px;
  left: 1px;
  font-size: 14px;
  width: 100%;
`

const StyledModal = styled.div`
  position: absolute;
  z-index: 2;
`

export default function ColorButton({ color, controlledPropConstant }) {
  let [display, setDisplay] = useState(false)
  const dispatch = useDispatchContext()

  return (
    <StyledColorPicker color={color} onClick={() => setDisplay(prev => !prev)}>
      <StyledLabel color={color} htmlFor="input">
        border color
      </StyledLabel>
      {display ? (
        <StyledModal>
          <StyledModal onChange={() => setDisplay(false)} />
          <SketchPicker
            color={color}
            onChangeComplete={col =>
              dispatch({ type: controlledPropConstant, payload: col.hex })
            }
          />
        </StyledModal>
      ) : null}
    </StyledColorPicker>
    // <div
    //   onClick={() => {
    //     setDisplay(!display)
    //   }}
    //   style={styles.colorButtonContainer}>
    //   {display ? (
    //     <div style={styles.popover}>
    //       <div style={styles.cover} onChange={() => setDisplay(false)} />
    //       <SketchPicker
    //         color={color}
    //         onChange={(color, event) => {
    //           setColor(color.hex)
    //         }}
    //       />
    //     </div>
    //   ) : null}
    // </div>
  )
}
