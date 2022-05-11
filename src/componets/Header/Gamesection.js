import React from 'react'
import Header from './Header'
import Result from './Result'
import Nonstop from './Game1'
import BarNo from './Game2'
import Game3 from './Game3'
import Game4 from './Game4'
import { Container } from '@mui/material'

const Gamesection = () => {
  return (
    <div style={{backgroundColor:"whitesmoke"}}>
      {/* profile section parts */}
        <Container>
          <Header/>
          <Result/>
          <Nonstop/>
          <BarNo/>
          <Game3/>
          <Game4/>
        </Container>
    </div>
  )
}

export default Gamesection