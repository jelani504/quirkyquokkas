import styled from 'styled-components';
import { GiVote } from 'react-icons/gi';
import { ImImages } from 'react-icons/im';
import { IoPeopleCircleOutline } from 'react-icons/io5';

export const VoteIcon = styled(GiVote)`
    margin-bottom: 24px;
    font-size: 82px;
`;

export const FreeMintIcon = styled(ImImages)`
    margin-bottom: 24px;
    font-size: 76px;
`;

export const CommunityIcon = styled(IoPeopleCircleOutline)`
    margin-bottom: 24px;
    font-size: 82px;
`;

export const AboutSec = styled.div<{ lightBg: boolean }>`
    color: #fff;
    padding: 160px 0;
    background: ${({ lightBg }) => (lightBg ? '#fff' : '#101522')};
`;

export const InfoRow = styled.div<{imgStart: string}>`
    display: flex;
    margin: 0 -15px -15px -15px;
    flex-wrap: wrap;
    align-items: center;
    flex-direction: ${({imgStart}) => (imgStart ? 'row-reverse' : 'row')};
`;

export const InfoColumn = styled.div`
    margin-bottom: 15px;
    padding-right: 15px;
    padding-left: 15px;
    flex: 1;
    max-width: 50%;
    flex-basis: 50%;

    @media screen and (max-width: 768px){
        max-width: 100%;
        flex-basis: 100%;
        display: flex;
        justify-content: center;
    }
`;

export const TextWrapper = styled.div`
    max-width: 540px;
    padding-top: 0;
    padding-bottom: 60px;

    @media screen and (max-width: 768px){
        padding-bottom: 65px;
    }
`;

export const TopLine = styled.div<{lightTopLine: boolean}>`
    font-size: 18px;
    line-height: 16px;
    letter-spacing: 1.4px;
    margin-bottom: 16px;
    color : ${({lightTopLine}) => ( lightTopLine ? '#a9b3c1' : '#4359f7')};
`;

export const Heading = styled.h1<{lightText: boolean}>`
  margin-bottom:24px;
  font-size: 48px;
  line-height: 1.1;
  color: ${({lightText}) => (lightText ? '#f7f8fa' : '#1c2237')};  
`;

export const Subtitle = styled.p<{lightTextDesc: boolean}>`
    max-width: 440px;
    margin-bottom: 35px;
    font-size: 18px;
    line-height: 24px;
  color: ${({lightTextDesc}) => (lightTextDesc ? '#a9b3c1' : '#1c2237')}; 

`;

export const ImgWrapper = styled.div<{start: string}>`
    max-width: 555px;
    display: flex;
    justify-content: ${({start})=>(start ? 'flex-start' : 'flex-end')};
`;

export const Img = styled.img`
    padding-right:0;
    border: 0;
    max-width: 100%;
    vertical-align: middle;
    display: inline-block;
    max-height: 500px;
`;

export const CardHolder = styled.div`
    display: flex;
    margin: 0 -15px -15px -15px;
    flex-wrap: wrap;
    align-items: center;
    width: 100%;
    text-align: center;
    flex-direction: row;
`;

export const Card = styled.div`
    margin-bottom: 15px;
    padding-right: 15px;
    padding-left: 15px;
    flex: 1;
    max-width: 30%;
    flex-basis: 30%;

    @media screen and (max-width: 768px){
        max-width: 100%;
        flex-basis: 100%;
        display: flex;
        justify-content: center;
    }
`;

export const CardsHeader = styled.h1`
    width: 100%;
    text-align: center;
    margin-bottom: 48px;
`;

export const CardHeader = styled.h2`
    width: 100%;
    text-align: center;
    margin-bottom: 24px;
`;

export const CardInfo = styled.p`
    line-height: 34px;
`;
