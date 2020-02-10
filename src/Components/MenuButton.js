import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.div`
  position: absolute;
  background: rgba(221, 221, 221);
  top: 62px;
  left: 7px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
`

const StyledMenu = styled.div`
  background: rgba(221, 221, 221);
  position: relative;
  height: 100vh;
  width: 400px;
`

export default function MenuButton({ setIsOpen }) {
  return (
    <StyledMenu>
      <StyledButton onClick={() => setIsOpen(prev => !prev)}>
        <i className="fas fa-pencil-alt" />
      </StyledButton>
    </StyledMenu>
  )
}
