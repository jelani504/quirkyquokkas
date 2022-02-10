import React from 'react'
import { Container } from '../../globalStyles'
import { AboutSec, InfoRow, InfoColumn, TextWrapper } from './AboutSection.elements'

const AboutSection = ({ lightBg, imgStart }: {lightBg: boolean, imgStart: boolean}) => {
  return (
    <>
    <AboutSec lightBg={lightBg}> 
        <Container>
            <InfoRow imgStart={imgStart}>
                <InfoColumn>
                    <TextWrapper>
                        h
                    </TextWrapper>
                </InfoColumn>
            </InfoRow>
        </Container>
    </AboutSec>
    </>
  )
}

export default AboutSection