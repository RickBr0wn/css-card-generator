import React, { useContext } from 'react'
import styled from 'styled-components'
import { StoreContext } from '../Store/'

export default function Card() {
  const [data] = useContext(StoreContext)
  const {
    cardWidth,
    borderRadius,
    padding,
    borderWidth,
    borderColor,
    image,
    innerPadding,
    titleSize
  } = data.card

  const StyledCard = styled.section`
    background: #fff;
    width: ${cardWidth}px;
    border-radius: ${borderRadius}px;
    overflow: hidden;
    padding: ${padding}px;
    border: ${borderWidth}px solid ${borderColor};
  `

  const StyledImage = styled.img`
    width: 100%;
    overflow: hidden;
  `

  const StyledTextContainer = styled.section`
    padding: ${innerPadding}px;
  `

  const StyledTitle = styled.h1`
    font-size: ${titleSize}px;
  `

  return (
    <StyledCard>
      {image ? (
        <StyledImage
          src='https://source.unsplash.com/random/800x600'
          alt='A random placeholder'
        />
      ) : null}
      <StyledTextContainer>
        <StyledTitle>My New Card</StyledTitle>
        <hr style={{ width: '100px' }} />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </StyledTextContainer>
    </StyledCard>
  )
}
