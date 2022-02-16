import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Button } from '../../globalStyles'
import Paper from '@material-ui/core/Paper';

import { SmallSubtitle, HoldHeartIcon, CenteredRow, CommunityIcon, FreeMintIcon, VoteIcon, Card, CardInfo, CardHeader, CardsHeader, ImgWrapper, Img, AboutSec, InfoRow, InfoColumn, TextWrapper, TopLine, Heading, Subtitle, CardHolder } from './AboutSection.elements'

const AboutSection = ({ alt, start, img, lightBg, imgStart, lightTopLine, lightText, lightTextDesc, primary, description, buttonLabel, headline, topLine }: {img:string, start: string, alt: string, buttonLabel: string, topLine: string, headline: string, description: string, primary:boolean, lightBg: boolean, imgStart: string, lightTopLine: boolean, lightText: boolean, lightTextDesc: boolean}) => {
  return (
    <>
    <AboutSec > 
        <Container>
            <InfoRow>
                <InfoColumn>
                    <TextWrapper>
                        <Heading>{headline}</Heading>
                        <SmallSubtitle>{description}</SmallSubtitle>
                        <Link to='/discord'>
                            <Button big fontBig primary={primary}>
                                {buttonLabel}
                            </Button>
                        </Link>
                    </TextWrapper>
                </InfoColumn>
                <InfoColumn>
                    <ImgWrapper>
                        <Img src={img} alt={alt}/>
                    </ImgWrapper>
                </InfoColumn>
            </InfoRow>
            <CardHolder>
                <CardsHeader>Why hold a Quirky Quokka?</CardsHeader>
                    <Card>
                        <Paper style={{  height: 340, margin: 5, padding: 24, backgroundColor: '#151A1F', borderRadius: 6, width: "100%" }} elevation={4}>
                            <FreeMintIcon></FreeMintIcon>
                            <CardHeader>Free Mints</CardHeader>
                            <CardInfo>
                            Mint every version of Quirky Quokkas on both the Ethereum and Solana blockchains for free(+ gas fees) by holding an original Quokka!
                            </CardInfo>
                        </Paper>
                    </Card>
                    <Card>
                        <Paper style={{ height: 340, margin: 5, padding: 24, backgroundColor: '#151A1F', borderRadius: 6, width: "100%" }} elevation={4}>
                            <VoteIcon ></VoteIcon>
                            <CardHeader>DAO Voting</CardHeader>
                            <CardInfo> Vote on which artist will create the art for the next version of Quirky Quokkas!</CardInfo>
                        </Paper>
                    </Card>
                    <Card>
                        <Paper style={{ height: 340, margin: 5, padding: 24, backgroundColor: '#151A1F', borderRadius: 6, width: "100%" }} elevation={4}>
                            <CommunityIcon></CommunityIcon>
                            <CardHeader>Community</CardHeader>
                            <CardInfo>Be a part of the happiest NFT community on the planet and show off your Quokka! </CardInfo>
                        </Paper>
                    </Card>
            </CardHolder>
            <CenteredRow>
                <HoldHeartIcon></HoldHeartIcon>
                <Heading>Hold until your happy!</Heading>
                <Subtitle>This is an evolving project the allows holders to collectively choose which artist they want to commission the next edition of the collection. Hold until you’re satisfied with a version and then sell for the versions you don’t prefer. Our team is dedicated to creating versions of Quirky Quokkas across all blockchains and metaverses for free to holders of Original Quokkas! </Subtitle>
            </CenteredRow>
        </Container>
    </AboutSec>
    </>
  )
}

export default AboutSection