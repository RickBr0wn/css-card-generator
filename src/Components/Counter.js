import React, { useState } from 'react'
import styled from 'styled-components'

const StyledContainer = styled.div`
  display: flex;
  padding-top: 20px;
  position: relative;
`

const StyledLabel = styled.label`
  position: absolute;
  top: -1px;
  left: 1px;
  font-size: 14px;
`

const StyledInput = styled.input`
  height: 32px;
  border: 1px solid grey;
  padding-left: 6px;
  max-width: 60px;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  color: #2cc3f2;
  font-size: 16px;
`

const StyledButtonContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  border: 1px solid grey;
  padding: 1px 4px;
  margin-left: -1px;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  width: 20px;
`

const StyledUp = styled.div`
  cursor: pointer;
  position: absolute;
  top: 3px;
`

const StyledDown = styled.div`
  cursor: pointer;
  position: absolute;
  top: 10px;
`

const StyledSpan = styled.span`
  margin-left: 3px;
  margin-top: 12px;
  font-size: 12px;
`

export default function Counter({ label, controlledProp, setControlledProp }) {
  return (
    <StyledContainer>
      <StyledLabel htmlFor="input">{label}</StyledLabel>
      <StyledInput
        type="text"
        id="input"
        value={controlledProp}
        onChange={e => setControlledProp(e.target.value)}
      />
      <StyledButtonContainer>
        <StyledUp onClick={() => setControlledProp(controlledProp++)}>
          <i className="fas fa-sort-up" />
        </StyledUp>
        <StyledDown onClick={() => setControlledProp(controlledProp--)}>
          <i className="fas fa-sort-down" />
        </StyledDown>
      </StyledButtonContainer>
      <StyledSpan>px</StyledSpan>
    </StyledContainer>
  )
}
