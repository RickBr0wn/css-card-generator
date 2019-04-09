import React, { useContext } from 'react'
import styled from 'styled-components'
import { StoreContext } from '../Store'
import Counter from './Counter'
import ColorButton from './ColorButton'
import Button from './Button'

export default function ControlPanel() {
  const StyledContainer = styled.section`
    display: flex;
    flex-direction: column;
    background: rgba(221, 221, 221, 0.7);
    width: 450px;
    height: 100%;
    padding: 60px 30px;
  `

  const StyledRow = styled.section`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: 46px;
  `
  const StyledInnerRow = styled.section`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  `

  const StyledSmallText = styled.h5`
    color: #2cc3f2;
    font-size: 1rem;
    margin-bottom: 0.6rem;
    text-transform: uppercase;
  `

  const StyledStandardText = styled.p`
    font-size: 1.2rem;
    color: #333;
    font-weight: 400;
    letter-spacing: 1px;
    text-transform: uppercase;
  `

  const [data] = useContext(StoreContext)
  const {
    cardWidth,
    borderRadius,
    padding,
    borderWidth,
    borderColor,
    image,
    innerPadding,
    titleSize,
    titleHR,
    hrLength,
    hrPadding,
    textFontSize
  } = data.card
  const {
    setCardWidth,
    setBorderRadius,
    setPadding,
    setBorderWidth,
    setBorderColor,
    setImage,
    setInnerPadding,
    setTitleSize,
    setTitleHR,
    setHrLength,
    setHrPadding,
    setTextFontSize
  } = data.setters
  return (
    <StyledContainer>
      <StyledRow>
        <StyledInnerRow>
          <StyledStandardText>Card Width</StyledStandardText>
          <Counter
            label='width'
            controlledProp={cardWidth}
            setControlledProp={setCardWidth}
          />
        </StyledInnerRow>
        <StyledInnerRow>
          <StyledStandardText>Padding</StyledStandardText>
          <Counter
            label='padding'
            controlledProp={padding}
            setControlledProp={setPadding}
          />
        </StyledInnerRow>
      </StyledRow>
      <StyledRow>
        <StyledInnerRow>
          <StyledStandardText>Border Radius</StyledStandardText>
          <Counter
            label='radius'
            controlledProp={borderRadius}
            setControlledProp={setBorderRadius}
          />
        </StyledInnerRow>
        <StyledInnerRow>
          <StyledStandardText>add image</StyledStandardText>
          <Button
            prop={image}
            setProp={setImage}
            truthy={'on'}
            falsey={'off'}
          />
        </StyledInnerRow>
      </StyledRow>
      <StyledRow>
        <StyledInnerRow>
          <StyledStandardText>Border Color</StyledStandardText>
          <ColorButton color={borderColor} setColor={setBorderColor} />
        </StyledInnerRow>
        <StyledInnerRow>
          <StyledStandardText>Border Width</StyledStandardText>
          <Counter
            label='width'
            controlledProp={borderWidth}
            setControlledProp={setBorderWidth}
          />
        </StyledInnerRow>
      </StyledRow>
      <StyledRow>
        <StyledInnerRow>
          <StyledStandardText>Text padding</StyledStandardText>
          <Counter
            label='inner'
            controlledProp={innerPadding}
            setControlledProp={setInnerPadding}
          />
        </StyledInnerRow>
        <StyledInnerRow>
          <StyledStandardText>Title size</StyledStandardText>
          <Counter
            label='title size'
            controlledProp={titleSize}
            setControlledProp={setTitleSize}
          />
        </StyledInnerRow>
      </StyledRow>
      <StyledRow>
        <StyledInnerRow>
          <StyledStandardText>title hr</StyledStandardText>
          <Button
            prop={titleHR}
            setProp={setTitleHR}
            truthy={'on'}
            falsey={'off'}
          />
        </StyledInnerRow>
        <StyledInnerRow>
          <StyledStandardText>HR length</StyledStandardText>
          <Counter
            label='radius'
            controlledProp={hrLength}
            setControlledProp={setHrLength}
          />
        </StyledInnerRow>
      </StyledRow>
      <StyledRow>
        <StyledInnerRow>
          <StyledStandardText>hr padding</StyledStandardText>
          <Counter
            label='width'
            controlledProp={hrPadding}
            setControlledProp={setHrPadding}
          />
        </StyledInnerRow>
        <StyledInnerRow>
          <StyledStandardText>Padding</StyledStandardText>
          <Counter
            label='padding'
            controlledProp={padding}
            setControlledProp={setPadding}
          />
        </StyledInnerRow>
      </StyledRow>
      <StyledRow>
        <StyledInnerRow>
          <StyledStandardText>text font size</StyledStandardText>
          <Counter
            label='width'
            controlledProp={textFontSize}
            setControlledProp={setTextFontSize}
          />
        </StyledInnerRow>
        <StyledInnerRow>
          <StyledStandardText>Padding</StyledStandardText>
          <Counter
            label='padding'
            controlledProp={padding}
            setControlledProp={setPadding}
          />
        </StyledInnerRow>
      </StyledRow>
    </StyledContainer>
  )
}
