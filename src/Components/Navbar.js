import React from 'react'
import styled from 'styled-components'

const StyledNavbar = styled.section`
  position: fixed;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.2rem 2.4rem;
  background: #fff;
  z-index: 1000;
`

export default function Navbar() {
  return (
    <StyledNavbar>
      <i className="fab fa-github" style={{ fontSize: '2.4rem' }} />
      <h3>CSS Card Generator</h3>
    </StyledNavbar>
  )
}
