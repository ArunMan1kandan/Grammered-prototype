import React,{useState} from 'react'
import {Button} from '../ButtonElements'
import Video from "../../video/video1.mp4"
import { HeroContainer,HeroBg,VideoBg,HeroContent,HeroH1,HeroP,HeroBtnWrapepr,ArrowForward,ArrowRight} from './mainElements'

const HeroSection = () => {

  const[hover,setHover] = useState(false)

  const onHover = () =>{
    setHover(!hover)
  }



  return (
    <HeroContainer id="home">
        <HeroBg>
            <VideoBg autoPlay loop muted src={Video} type='video\mp4'></VideoBg>
        </HeroBg>
        <HeroContent>
          <HeroH1>Be educated and let other's be educated</HeroH1>
          <HeroP>
            Sign Up right now to start learning!
          </HeroP>
          <HeroBtnWrapepr>
            <Button to="signup" onMouseEnter={onHover} onMouseLeave={onHover}>
              Get Started {hover ? <ArrowForward/> : <ArrowRight/>}
            </Button>
          </HeroBtnWrapepr>
        </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection