import React from 'react'
import Carrusel from './carrusel'
import {ServicesContainer, ServicesH1} from './ServiceElements'

const Services = () => {
  return (
    <ServicesContainer id='services'>
      <ServicesH1>Our services</ServicesH1>
      <Carrusel/>
    </ServicesContainer>
  )
}

export default Services
