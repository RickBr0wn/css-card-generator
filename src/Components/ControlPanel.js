import React from 'react'
import '../CSS/control.css'
import Counter from './Counter'
import ColorButton from './ColorButton'
import Button from './Button'

export default function ControlPanel({
  radius,
  setRadius,
  width,
  setWidth,
  color,
  setColor,
  hover,
  setHover,
  image,
  setImage,
  padding,
  setPadding
}) {
  return (
    <div className='control-panel-outer-container'>
      <div className='left-side inner-container'>
        <div className='small-container'>
          <div className='label-container'>
            <h5>Border</h5>
            <h4>Border sizes</h4>
          </div>
          <div className='selectors-container'>
            <Counter
              label='radius'
              controlledProp={radius}
              setControlledProp={setRadius}
            />
            <Counter
              label='width'
              controlledProp={width}
              setControlledProp={setWidth}
            />
          </div>
        </div>
        <div className='small-container'>
          <div className='label-container'>
            <h4>Border color</h4>
          </div>
          <div className='selectors-container'>
            <ColorButton color={color} setColor={setColor} />
          </div>
        </div>
        <div className='small-container'>
          <div className='label-container'>
            <h5>image</h5>
            <h4>Add an image</h4>
          </div>
          <div className='selectors-container'>
            <Button
              prop={image}
              setProp={setImage}
              truthy={'on'}
              falsey={'off'}
            />
          </div>
        </div>
        <div className='small-container' />
        <div className='small-container' />
      </div>
      <div className='right-side inner-container'>
        <div className='small-container'>
          <div className='label-container'>
            <h5>.</h5>
            <h4>Hover Styles</h4>
          </div>
          <div className='selectors-container'>
            <Button
              prop={hover}
              setProp={setHover}
              truthy={'on'}
              falsey={'off'}
            />
          </div>
        </div>
        <div className='small-container'>
          <div className='label-container'>
            <h4>Border Edges</h4>
          </div>
          <div className='selectors-container'>
            <div className='edges-container'>
              <div className='edges'>1</div>
              <div className='edges'>2</div>
              <div className='edges'>3</div>
              <div className='edges'>4</div>
            </div>
          </div>
        </div>
        <div className='small-container'>
          <div className='label-container'>
            <h5>.</h5>
            <h4>Padding</h4>
          </div>
          <div className='selectors-container'>
            <Counter
              label='padding'
              controlledProp={padding}
              setControlledProp={setPadding}
            />
          </div>
        </div>

        <div className='small-container' />
        <div className='small-container' />
      </div>
    </div>
  )
}
