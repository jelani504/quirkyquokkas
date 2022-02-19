import React from 'react'
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    Box,
    AccordionIcon,
    AccordionPanel,
  } from '@chakra-ui/react'
import { FAQContainer, } from './FAQ.elements';
import { Container } from '../../globalStyles';
import { faqData } from '../../utils';

const accordionItems = faqData.map((faqItem, key) => {
    return (
        <AccordionItem key={key} >
                        <h2>
                        <AccordionButton height={'3rem'} backgroundColor={'#fdfccf'} borderColor={'#fff'}>
                            <Box fontSize='18px' flex='1' textAlign='center'>
                            {faqItem[0]}
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                            {faqItem[1]}
                        </AccordionPanel>
        </AccordionItem>
    );
});

const FAQ = () => {
  return (
    <FAQContainer>
        <Container>
                <h1>Frequently Asked Questions</h1>
                <h2>You can ask questions at any time in our discord</h2>
                <Accordion allowMultiple>
                    {accordionItems}
                </Accordion>
        </Container>
    </FAQContainer>
  )
}

export default FAQ