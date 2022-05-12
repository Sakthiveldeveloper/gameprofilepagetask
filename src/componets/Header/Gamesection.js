import React from 'react'
import Header from './Header'
import Result from './Result'
import { Container } from '@mui/material'
import Game from './Games'


const Gamesection = () => {
  return (
    <div style={{backgroundColor:"whitesmoke"}}>
      {/* profile section parts */}
        <Container>
          <Header/>
          <Result/>
          <Game/>
        </Container>
    </div>
  )
}

export default Gamesection