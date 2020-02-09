import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.div`
  position: absolute;
  top: 54px;
  left: 10px;
  cursor: pointer;
`

export default function Button({ setIsOpen }) {
  return (
    <StyledButton onClick={() => setIsOpen(prev => !prev)}>
      <i class="fas fa-camera" />
    </StyledButton>
  )
}
