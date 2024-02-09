import Accordion from './Accordion'
import TAccordion from './TogAccordion'
import React from 'react'
import { AccordianSection2, AccordianContainer, AccHeader, HeaderContainer, } from './AccorElements'
import AboutPic from '../../images/faq.png'

const Organizer = () => {
    return (
        
        <AccordianSection2 id='faq'>
            <HeaderContainer>
                        <AccHeader  src={AboutPic}></AccHeader>
            </HeaderContainer>
            <AccordianContainer>
    <TAccordion 
    title="Why should I buy a Cutie?"
    content="Our roadmap is composed of real accomplishable goals, and we will build a strong community with long term support through multiple roadmap seasons and access to future projects. We are also committed to the mission of ensuring children grow up healthy, educated, and safe by donating to Save the Children with some of our profits."/>
    <Accordion title="How will the minting process work?"
    content="We plan to launch when Ethereum stabilizes, we are hoping for late November or early December. The price to mint will vary based on the value of Ethereum at release, potentially around 0.06 Eth to mint. We will release a large quantity of our stock via whitelist, and any stock remaining after whitelists will be released as a public mint on our website or smart contract the next day."/>
    <Accordion title="What are the benefits to owning a Cutie?"
    content="You are free to do anything you want with them! You can trade it, or you can use them to enter our community discussions, giveaways, AirDrops, and special events. More features and future support will be added to give the Cuties value over time. For example, we plan to incorporate some form of staking/crafting in the future."/>
    <Accordion title="How do I get on the whitelist?"
    content="Whitelists will be given to active community members. They will also be given out via events, competitions, and giveaways in our Discord and on Twitter. Join our Discord and follow us on Twitter to stay up to date for more whitelist opportunities."/>
    <Accordion title="When is reveal?"
    content="The Cuties will reveal 48 hours after public mint."/>
    </AccordianContainer>
</AccordianSection2>
    )
}

export default Organizer



