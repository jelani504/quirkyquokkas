import React from 'react';
import { FooterContainer, FooterSubHeading, FooterSubscription, FooterSubText} from './Footer.elements';

const Footer = () => {
  return (
    <FooterContainer>
        <FooterSubscription>
            <FooterSubHeading>
                Join the Quirky Quokkas Community
            </FooterSubHeading>
            <FooterSubText>
                Don't miss out on our limited collection of Quirky Quokka NFTs!
            </FooterSubText>
        </FooterSubscription>
    </FooterContainer>
  )
}

export default Footer