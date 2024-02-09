import React from 'react'
import Pfp1 from '../../images/TeamPics/TommyPic.png'
import Pfp2 from '../../images/TeamPics/MintyPic.png'
import Pfp3 from '../../images/TeamPics/TurtlePic.png'
import { ServicesContainer, Textbox, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2, ServicesH3, ServicesP, Subtitle, BodyContainer, SocialIconLink, FTwitter, } from './ServicesElements'
import AboutPic from '../../images/ourteam.png'
import TwitterSVG from '../../images/TwitterSVG.svg'

const Services = () => {
    return (
        <ServicesContainer id='team'>
            <ServicesH1 src={AboutPic}></ServicesH1>
          <Textbox><Subtitle>We are a small three person team driven by our love for art and creativity. We are inspired by anime, lolita fashion, dress up games, and the potential of the blockchain. We are passionate about long term, future support for Cute Crypto and even more NFT projects.</Subtitle></Textbox>
          <BodyContainer>
         <ServicesWrapper>
            <ServicesCard href='//twitter.com/TommySalamiTV' target='_blank'
              aria-label='Twitter'>
            <ServicesIcon src={Pfp1}/>
            <ServicesH3>Developer</ServicesH3>
            <ServicesP>Developer</ServicesP>
            <SocialIconLink href='//twitter.com/TommySalamiTV' 
                            target='_blank'
                            aria-label='Twitter'>
                            <FTwitter src={TwitterSVG} />
            </SocialIconLink>
            </ServicesCard>
            <ServicesCard href='//twitter.com/mintsprinkle666' target='_blank'
              aria-label='Twitter'>
            <ServicesIcon src={Pfp2}/>
            <ServicesH2>Artist</ServicesH2>
            <ServicesP>Artist</ServicesP>
            <SocialIconLink href='//twitter.com/mintsprinkle666' target='_blank'
                            aria-label='Twitter'>
                                <FTwitter src={TwitterSVG} />
                            </SocialIconLink>
            </ServicesCard>
            <ServicesCard href='//twitter.com/ShmooNFT' target='_blank'
              aria-label='Twitter'>
            <ServicesIcon src={Pfp3}/>
            <ServicesH3>Marketer</ServicesH3>
            <ServicesP>Marketing</ServicesP>
            <SocialIconLink href='' target='_blank'
                            aria-label='Twitter'>
                                <FTwitter src={TwitterSVG} />
                            </SocialIconLink>
            </ServicesCard>
          </ServicesWrapper>
        </BodyContainer>
      </ServicesContainer>
    )
}

export default Services
