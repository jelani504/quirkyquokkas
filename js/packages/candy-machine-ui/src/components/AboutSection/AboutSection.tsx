import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Button } from '../../globalStyles'
import Paper from '@material-ui/core/Paper';

import { CardsHeader, ImgWrapper, Img, AboutSec, InfoRow, InfoColumn, TextWrapper, TopLine, Heading, Subtitle, CardHolder } from './AboutSection.elements'

const AboutSection = ({ alt, start, img, lightBg, imgStart, lightTopLine, lightText, lightTextDesc, primary, description, buttonLabel, headline, topLine }: {img:string, start: string, alt: string, buttonLabel: string, topLine: string, headline: string, description: string, primary:boolean, lightBg: boolean, imgStart: string, lightTopLine: boolean, lightText: boolean, lightTextDesc: boolean}) => {
  return (
    <>
    <AboutSec lightBg={lightBg}> 
        <Container>
            <InfoRow imgStart={imgStart}>
                <InfoColumn>
                    <TextWrapper>
                        <TopLine  lightTopLine={lightTopLine}>{topLine}</TopLine>
                        <Heading lightText={lightText}>{headline}</Heading>
                        <Subtitle lightTextDesc={lightTextDesc}>{description}</Subtitle>
                        <Link to='/discord'>
                            <Button big fontBig primary={primary}>
                                {buttonLabel}
                            </Button>
                        </Link>
                    </TextWrapper>
                </InfoColumn>
                <InfoColumn>
                    <ImgWrapper start={start}>
                        <Img src={img} alt={alt}/>
                    </ImgWrapper>
                </InfoColumn>
            </InfoRow>
            <CardHolder>
                <CardsHeader>Why hold a Quirky Quokka?</CardsHeader>
                <Paper
            style={{ margin: 5, padding: 24, backgroundColor: '#151A1F', borderRadius: 6, width: "30%" }} elevation={4}
          >Info</Paper>
          <Paper
            style={{ margin: 5, padding: 24, backgroundColor: '#151A1F', borderRadius: 6, width: "30%" }} elevation={4}
          >Info</Paper>
           <Paper
            style={{ margin: 5, padding: 24, backgroundColor: '#151A1F', borderRadius: 6, width: "30%" }} elevation={4}
          >Info</Paper>
            </CardHolder>
        </Container>
    </AboutSec>
    </>
  )
}

export default AboutSection