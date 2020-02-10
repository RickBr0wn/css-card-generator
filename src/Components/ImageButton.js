import React from 'react'
import styled from 'styled-components'
import { useDispatchContext, useStateContext } from '../Store/index'

const StyledButton = styled.div`
  height: 32px;
  border: 1px solid grey;
  background-color: ${({ color }) => color};
  width: 80px;
  margin-top: 20px
  padding-left: 6px;
  border-radius: 5px;
  padding-top: 20px;
  position: relative;
  cursor:pointer;
  background: ${props =>
    props.image ? 'rgba(222,222,222)' : 'rgba(111,111,111)'};
`

const StyledLabel = styled.label`
  position: absolute;
  top: -23px;
  left: 1px;
  font-size: 14px;
  width: 100%;
`

const StyledButtonText = styled.div`
  position: relative;
  top: -14px;
  left: 20px;
`

const ImageButton = () => {
  const [imageVisibility, setImageVisibility] = React.useState(true)
  const dispatch = useDispatchContext()
  const { image } = useStateContext()

  return (
    <StyledButton
      image={image}
      onClick={() => dispatch({ type: 'SET_IMAGE_VISIBILITY' })}>
      <StyledLabel>image</StyledLabel>
      <StyledButtonText>{image ? 'ON' : 'OFF'}</StyledButtonText>
    </StyledButton>
  )
}

export default ImageButton
