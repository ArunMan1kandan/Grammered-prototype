import React from 'react'
import icon1 from '../../images/icon1.svg'
import icon2 from '../../images/icon2.svg'
import icon3 from '../../images/icon3.svg'
import { ServicesContainer,ServicesH1,ServicesWrapper,ServicesCard,ServicesIcon,ServicesH2,ServicesP } from './ServicesElements'

const Services = () => {
  return (
    <ServicesContainer id="services">
        <ServicesH1>Our Services</ServicesH1>
        <ServicesWrapper>
            <ServicesCard>
                <ServicesIcon src={icon1}/>
                <ServicesH2>Improve Porficiency</ServicesH2>
                <ServicesP>We help in reducing your grammatic problems and improve your fluency</ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={icon2}/>
                <ServicesH2>Virtual Trainer</ServicesH2>
                <ServicesP>Access our services from anywhere around the world without the need to be present</ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={icon3}/>
                <ServicesH2>View your changes</ServicesH2>
                <ServicesP>Visualy view your imporvement by using our graphing</ServicesP>
            </ServicesCard>
        </ServicesWrapper>
    </ServicesContainer>
  )
}

export default Services