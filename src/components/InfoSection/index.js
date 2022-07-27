import React from 'react'
import { Button } from '../ButtonElements.js'
import {InfoContainer,InfoWrapper,InfoRow,Coloumn1, Coloumn2,TextWrapper,TopLine,Heading,Subtitle,BtnWrap, ImgWrap,Img } from './InfoElements'

const InfoSection = ({lightBg,id,imgStart,topLine,lightText,headLine,darkText,description,buttonLabel,img,alt , primary,dark,dark2}) => {
  return (
    <>
    <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
            <InfoRow imgStart={imgStart}>
                <Coloumn1>
                <TextWrapper>
                    <TopLine>{topLine}</TopLine>
                    <Heading lightText={lightText}>
                        {headLine}
                    </Heading>
                    <Subtitle darkText={darkText}>
                            {description}
                    </Subtitle>
                    <BtnWrap>
                        <Button to="home" 
                        smooth={true} 
                        duration={500} 
                        spy={true} 
                        exact='true' 
                        offset={-80} 
                        primary={primary ? 1:0} 
                        dark = {dark?0:1} 
                        dark2={dark2?0:1} style={{"border":"1px solid #01bf71"}}>
                            {buttonLabel}</Button>
                    </BtnWrap>
                </TextWrapper>
                </Coloumn1>
                <Coloumn2>
                    <ImgWrap>
                        <Img src={img} alt={alt}/>
                    </ImgWrap>
                </Coloumn2>
            </InfoRow>
        </InfoWrapper>
    </InfoContainer>
    </>
  )
}

export default InfoSection