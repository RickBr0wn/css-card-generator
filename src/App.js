import React from 'react'
import styled from 'styled-components'
import Store from './Store'
import Navbar from './Components/Navbar'
import Card from './Components/Card'
import ControlPanel from './Components/ControlPanel'

const Container = styled.section`
  height: 100vh;
  width: 100vw;
  background: linear-gradient(266deg, #3289df, #db7bcb);
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`

const Left = styled.section`
  height: 100%;
  width: 400px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Right = styled.section`
  height: 100%;
  width: 400px;
  display: flex;
  flex-direction: column;
`

export default function App() {
  return (
    <div>
      <Store>
        <Navbar />
        <Container>
          <Left>
            <Card />
          </Left>
          <Right>
            <ControlPanel />
          </Right>
        </Container>
      </Store>
    </div>
  )
}
