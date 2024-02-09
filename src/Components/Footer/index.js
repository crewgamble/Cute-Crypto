import React, {useState, useEffect} from 'react'
import { FooterContainer, FooterWrap, SocialMedia, SocialMediaWrap, SocialLogo, WebsiteRights, SocialIcons, SocialIconLink, FaOpenSea, FDiscord, FTwitter } from './FooterElements';
import OpenSeaSVG from '../../images/OpenSea.svg'
import {animateScroll as scroll} from 'react-scroll'
import TwitterSVG from '../../images/TwitterSVG.svg'
import DiscordSVG from '../../images/DiscordSVG.svg'

const toggleHome = () => {
    scroll.scrollToTop();
};

const Footer = ({ toggle }) => {
    const [scrollNav, setScrollNav] = useState(false)

    const changeNav = ()=> {
        if(window.scrollY >= 80) {
            setScrollNav(true)
        } else {
            setScrollNav(false)
        }

    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, [])

    
    return (
        <FooterContainer>
            <FooterWrap>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='/' onClick={toggleHome} duration={250}>Cute Crypto</SocialLogo>
                        <WebsiteRights>Cute Crypto © {new Date().getFullYear()}</WebsiteRights>
                        <SocialIcons>
                        <SocialIconLink href='//twitter.com/CuteCryptoNFT' target='_blank'
                            aria-label='Twitter'>
                                <FTwitter src={TwitterSVG} />
                            </SocialIconLink>
                            <SocialIconLink href='//discord.gg/cutecrypto' target='_blank'
                            aria-label='Discord'>
                                <FDiscord src={DiscordSVG} />
                            </SocialIconLink>
                            <SocialIconLink href='//opensea.io/collection/cutecrypto' target='_blank'
                            aria-label='OpenSea'>
                                <FaOpenSea src={OpenSeaSVG} />
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
        
    );
};


export default Footer