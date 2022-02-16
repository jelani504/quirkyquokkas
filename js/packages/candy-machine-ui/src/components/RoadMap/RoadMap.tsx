import React from 'react'
import {
    List,
    ListItem,
    ListIcon,
  } from '@chakra-ui/react'
  import { Container } from '../../globalStyles'
import {MdCheckCircle, MdSettings} from 'react-icons/md';
import { SectionHeader, RoadmapHeader, RoadmapContainer } from './RoadMap.elements';
import {roadmapData} from '../../utils';

const listItems = roadmapData.reduce((prev: any, sectionObj: any, key) => {
    const sectionName = Object.keys(sectionObj)[0];
    prev[sectionName] = sectionObj[sectionName].map((textObj: {completed: boolean, text: string}, itemKey: number) => {
            if (textObj.completed ){
                return <ListItem key={itemKey} marginBottom={12} fontSize='24'>
                <ListIcon as={MdCheckCircle} color='#38a169' marginRight=''/>
                {textObj.text}
            </ListItem>
            }
            return <ListItem key={itemKey} fontSize='17px'>
            <ListIcon as={MdSettings} color='#38a169' marginRight='10px' fontSize='17px'/>
            {textObj.text}
        </ListItem>
        });
    return prev;
}, {});

console.log(listItems);

const RoadMap = () => {
  return (
    <RoadmapContainer>
        <Container>
            <RoadmapHeader>ROADMAP</RoadmapHeader>
            <List spacing={3}>
                <SectionHeader>Getting Started</SectionHeader>
                {listItems.gettingStarted}
                <SectionHeader>Building the Quirky Quokkas Community</SectionHeader>
                {listItems.communityBuilding}
                <SectionHeader>Launch</SectionHeader>
                {listItems.launch}
                <SectionHeader>Expansion</SectionHeader>
                {listItems.expansion}
            </List>
        </Container>
    </RoadmapContainer>
  )
};

export default RoadMap