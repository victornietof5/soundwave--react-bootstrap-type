import React from 'react'
import Menu from '../components/menu'
import 'bootstrap/dist/css/bootstrap.min.css'
import FellTheMusic from '../components/FellTheMusic'
import { Container } from 'react-bootstrap'




export const SoundWave = () => {
  return (

    <section>
      <Container>
        <header><Menu /></header>
        <FellTheMusic />
      </Container>
    </section>


  )
}
