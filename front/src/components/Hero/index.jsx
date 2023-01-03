import React, {useState} from 'react'
import Video from '../../videos/video.mp4'
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight } from './HeroElements'
import { Button } from '../ButtonElements'

const Hero = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover)
  }

  return (
    <HeroContainer id='home'>
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
      </HeroBg>
      <HeroContent>
        <HeroH1> C&G</HeroH1>
        <HeroP>CENTRO DE INGENIERA, SEGURIDAD Y GESTION INDUSTRIAL S.A.S - C&G COLOMBIA S.A.S</HeroP>
        <HeroBtnWrapper>
          <Button to='' onMouseEnter={onHover} onMouseLeave={onHover} primary='true' dark='true'               smooth={true} duration={500} spy={true} exact='true' offset={-80}>
            Informacion {hover ? <ArrowForward /> : <ArrowRight/>}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  )
}

export default Hero
