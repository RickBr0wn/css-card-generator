import React, { useContext } from 'react'
import styled from 'styled-components'
import { StateContext } from '../Store'
import Counter from './Counter'
import ColorButton from './ColorButton'
import Button from './Button'
import { useStateContext } from '../Store/index'

const StyledOuterContainer = styled.section`
  display: flex;
  position: relative;
  flex-direction: column;
  background: rgba(221, 221, 221);
  height: 100vh;
  padding: 80px 30px;
  margin: 0 auto;
  overflow-y: auto;
`

const StyledLabel = styled.label`
  background: rgba(221, 221, 221);
  width: fit-content;
  margin-left: 20px

  position: absolute;
  top: -10px;
`
const StyledGrid = styled.div`
  margin: 0 auto;
  position: relative;
  border: 1px solid grey;
  padding: 20px;
  border-radius: 5px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto;
  grid-gap: 16px;
  margin-bottom: 30px;
`

export default function ControlPanel() {
  const state = useStateContext()
  const {
    cardWidth,
    borderRadius,
    outerPadding,
    borderWidth,
    borderColor,
    image,
    innerPadding,
    titleSize,
    titleHR,
    hrLength,
    hrPadding,
    textFontSize,
  } = state

  return (
    <StyledOuterContainer>
      <StyledGrid id="card-details">
        <StyledLabel htmlFor="card-details">Card Details</StyledLabel>
        <Counter
          label="card width"
          controlledProp={cardWidth}
          controlledPropConstant={'CARD_WIDTH'}
        />
        <Counter
          label="outer padding"
          controlledProp={outerPadding}
          controlledPropConstant={'OUTER_PADDING'}
        />
        {/* For a blank space in top grid */}
        <div></div>
        <Counter
          label="border width"
          controlledProp={borderWidth}
          controlledPropConstant={'BORDER_WIDTH'}
        />
        <ColorButton
          label="border color"
          color={borderColor}
          controlledPropConstant={'SET_COLOR'}
        />
        <Counter
          label="border radius"
          controlledProp={borderRadius}
          controlledPropConstant={'BORDER_RADIUS'}
        />
      </StyledGrid>
      {/* HERE *********************************************************** */}
      <StyledGrid id="image-details">
        <StyledLabel htmlFor="image-details">Image Details</StyledLabel>
        <Counter
          label="card width"
          controlledProp={cardWidth}
          // setControlledProp={setCardWidth}
        />
        <Counter
          label="card width"
          controlledProp={cardWidth}
          // setControlledProp={setCardWidth}
        />
        <Counter
          label="card width"
          controlledProp={cardWidth}
          // setControlledProp={setCardWidth}
        />
        <Counter
          label="card width"
          controlledProp={cardWidth}
          // setControlledProp={setCardWidth}
        />
        <Counter
          label="card width"
          controlledProp={cardWidth}
          // setControlledProp={setCardWidth}
        />
        <Counter
          label="card width"
          controlledProp={cardWidth}
          // setControlledProp={setCardWidth}
        />
      </StyledGrid>
      <StyledGrid id="image-details">
        <StyledLabel htmlFor="image-details">Image Details</StyledLabel>
        <Counter
          label="card width"
          controlledProp={cardWidth}
          // setControlledProp={setCardWidth}
        />
        <Counter
          label="card width"
          controlledProp={cardWidth}
          // setControlledProp={setCardWidth}
        />
        <Counter
          label="card width"
          controlledProp={cardWidth}
          // setControlledProp={setCardWidth}
        />
        <Counter
          label="card width"
          controlledProp={cardWidth}
          // setControlledProp={setCardWidth}
        />
        <Counter
          label="card width"
          controlledProp={cardWidth}
          // setControlledProp={setCardWidth}
        />
        <Counter
          label="card width"
          controlledProp={cardWidth}
          // setControlledProp={setCardWidth}
        />
        <Counter
          label="card width"
          controlledProp={cardWidth}
          // setControlledProp={setCardWidth}
        />
        <Counter
          label="card width"
          controlledProp={cardWidth}
          // setControlledProp={setCardWidth}
        />
      </StyledGrid>
      <StyledGrid id="image-details">
        <StyledLabel htmlFor="image-details">Image Details</StyledLabel>
        <Counter
          label="card width"
          controlledProp={cardWidth}
          // setControlledProp={setCardWidth}
        />
        <Counter
          label="card width"
          controlledProp={cardWidth}
          // setControlledProp={setCardWidth}
        />
        <Counter
          label="card width"
          controlledProp={cardWidth}
          // setControlledProp={setCardWidth}
        />
        <Counter
          label="card width"
          controlledProp={cardWidth}
          // setControlledProp={setCardWidth}
        />
        <Counter
          label="card width"
          controlledProp={cardWidth}
          // setControlledProp={setCardWidth}
        />
        <Counter
          label="card width"
          controlledProp={cardWidth}
          // setControlledProp={setCardWidth}
        />
      </StyledGrid>
      <StyledGrid id="image-details">
        <StyledLabel htmlFor="image-details">Image Details</StyledLabel>
        <Counter
          label="card width"
          controlledProp={cardWidth}
          // setControlledProp={setCardWidth}
        />
        <Counter
          label="card width"
          controlledProp={cardWidth}
          // setControlledProp={setCardWidth}
        />
        <Counter
          label="card width"
          controlledProp={cardWidth}
          // setControlledProp={setCardWidth}
        />
        <Counter
          label="card width"
          controlledProp={cardWidth}
          // setControlledProp={setCardWidth}
        />
        <Counter
          label="card width"
          controlledProp={cardWidth}
          // setControlledProp={setCardWidth}
        />
        <Counter
          label="card width"
          controlledProp={cardWidth}
          // setControlledProp={setCardWidth}
        />
      </StyledGrid>
    </StyledOuterContainer>
    // <StyledOuterContainer>
    //   <StyledRow>
    //     <StyledInnerRow>
    //       {/* <StyledStandardText>Card Width</StyledStandardText> */}
    //       <Counter
    //         label="card width"
    //         controlledProp={cardWidth}
    //         setControlledProp={setCardWidth}
    //       />
    //     </StyledInnerRow>
    //     <StyledInnerRow>
    //       {/* <StyledStandardText>Padding</StyledStandardText> */}
    //       <Counter
    //         label="padding"
    //         controlledProp={padding}
    //         setControlledProp={setPadding}
    //       />
    //     </StyledInnerRow>
    //   </StyledRow>
    //   <StyledRow>
    //     <StyledInnerRow>
    //       {/* <StyledStandardText>Border Radius</StyledStandardText> */}
    //       <Counter
    //         label="border radius"
    //         controlledProp={borderRadius}
    //         setControlledProp={setBorderRadius}
    //       />
    //     </StyledInnerRow>
    //     <StyledInnerRow>
    //   HERE ********************************************************************************************
    //       <StyledStandardText>add image</StyledStandardText>
    //       <Button
    //         prop={image}
    //         setProp={setImage}
    //         truthy={'on'}
    //         falsey={'off'}
    //       />
    //     </StyledInnerRow>
    //   </StyledRow>
    //   <StyledRow>
    //     <StyledInnerRow>
    //       <StyledStandardText>Border Color</StyledStandardText>
    //       <ColorButton color={borderColor} setColor={setBorderColor} />
    //     </StyledInnerRow>
    //     <StyledInnerRow>
    //       <StyledStandardText>Border Width</StyledStandardText>
    //       <Counter
    //         label="width"
    //         controlledProp={borderWidth}
    //         setControlledProp={setBorderWidth}
    //       />
    //     </StyledInnerRow>
    //   </StyledRow>
    //   <StyledRow>
    //     <StyledInnerRow>
    //       <StyledStandardText>Text padding</StyledStandardText>
    //       <Counter
    //         label="inner"
    //         controlledProp={innerPadding}
    //         setControlledProp={setInnerPadding}
    //       />
    //     </StyledInnerRow>
    //     <StyledInnerRow>
    //       <StyledStandardText>Title size</StyledStandardText>
    //       <Counter
    //         label="title size"
    //         controlledProp={titleSize}
    //         setControlledProp={setTitleSize}
    //       />
    //     </StyledInnerRow>
    //   </StyledRow>
    //   <StyledRow>
    //     <StyledInnerRow>
    //       <StyledStandardText>title hr</StyledStandardText>
    //       <Button
    //         prop={titleHR}
    //         setProp={setTitleHR}
    //         truthy={'on'}
    //         falsey={'off'}
    //       />
    //     </StyledInnerRow>
    //     <StyledInnerRow>
    //       <StyledStandardText>HR length</StyledStandardText>
    //       <Counter
    //         label="radius"
    //         controlledProp={hrLength}
    //         setControlledProp={setHrLength}
    //       />
    //     </StyledInnerRow>
    //   </StyledRow>
    //   <StyledRow>
    //     <StyledInnerRow>
    //       <StyledStandardText>hr padding</StyledStandardText>
    //       <Counter
    //         label="width"
    //         controlledProp={hrPadding}
    //         setControlledProp={setHrPadding}
    //       />
    //     </StyledInnerRow>
    //     <StyledInnerRow>
    //       <StyledStandardText>Padding</StyledStandardText>
    //       <Counter
    //         label="padding"
    //         controlledProp={padding}
    //         setControlledProp={setPadding}
    //       />
    //     </StyledInnerRow>
    //   </StyledRow>
    //   <StyledRow>
    //     <StyledInnerRow>
    //       <StyledStandardText>text font size</StyledStandardText>
    //       <Counter
    //         label="width"
    //         controlledProp={textFontSize}
    //         setControlledProp={setTextFontSize}
    //       />
    //     </StyledInnerRow>
    //     <StyledInnerRow>
    //       <StyledStandardText>Padding</StyledStandardText>
    //       <Counter
    //         label="padding"
    //         controlledProp={padding}
    //         setControlledProp={setPadding}
    //       />
    //     </StyledInnerRow>
    //   </StyledRow>
    // </StyledOuterContainer>
  )
}
