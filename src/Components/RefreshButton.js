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
  background: rgba(222,222,222);
`

const StyledLabel = styled.label`
  position: absolute;
  top: -23px;
  left: 1px;
  font-size: 14px;
  width: 200px;
`

const RefreshButton = () => {
  const dispatch = useDispatchContext()

  return (
    <StyledButton onClick={() => dispatch({ type: 'REFRESH_IMAGE' })}>
      <StyledLabel>refresh image</StyledLabel>
    </StyledButton>
  )
}

export default RefreshButton
