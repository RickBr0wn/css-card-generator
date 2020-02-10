import React from 'react'
import styled from 'styled-components'
import Store from './Store'
import Navbar from './Components/Navbar'
import Card from './Components/Card'
import ControlPanel from './Components/ControlPanel'
import MenuButton from './Components/MenuButton'

const Container = styled.section`
  height: 100vh;
  background: linear-gradient(266deg, #3289df, #db7bcb);
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  position: relative;
`

const Left = styled.section`
  height: 100vh;
  display: flex;
  flex:1,
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
`

const Right = styled.section`
  width: 400px;
  ${props =>
    props.isOpen
      ? `width: 400px;`
      : `
         width: 20px;
         overflow: hidden;
        `}
  display: flex;
  flex-direction: column;
  transition: width 0.5s;
`

export default function App() {
  const [isOpen, setIsOpen] = React.useState(true)
  return (
    <div>
      <Store>
        <Navbar />
        <Container>
          <Left>
            <Card />
          </Left>
          {isOpen ? (
            <Right isOpen={isOpen}>
              <ControlPanel setIsOpen={setIsOpen} />
            </Right>
          ) : (
            <Right isOpen={isOpen}>
              <ControlPanel setIsOpen={setIsOpen} />
            </Right>
          )}
        </Container>
      </Store>
    </div>
  )
}
