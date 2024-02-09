import React from 'react'
import { 
    SidebarContainer, 
    Icon, 
    CloseIcon, 
    SidebarWrapper, 
    SidebarMenu, 
    SidebarLink, 
    SideBtnWrap, 
    SocialIconLink,
    FTwitter,
    FDiscord,
    FaOpenSea 
} from './SidebarElements';
import TwitterSVG from '../../images/TwitterSVG.svg'
import DiscordSVG from '../../images/DiscordSVG.svg'
import OpenSeaSVG from '../../images/OpenSea.svg'

const Sidebar = ({ isOpen, toggle }) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                
                <SidebarMenu>
                    <SidebarLink to="about" onClick={toggle}
                                                                
                                                                exact='true'
                                                                offset={+100}
                    >ABOUT</SidebarLink>
                    <SidebarLink to="rarity" onClick={toggle}
                                                                
                                                                exact='true'
                                                                offset={+0}
                    >RARITY</SidebarLink>
                    <SidebarLink to="roadmap" onClick={toggle}
                                                                
                                                                exact='true'
                                                                offset={+0}>ROADMAP</SidebarLink>
                    <SidebarLink to="faq" onClick={toggle}
                                            
                                            exact='true'
                                            offset={+0}
                    >FAQ</SidebarLink>
                    <SidebarLink to="team" onClick={toggle}                         
                     
                        exact='true'
                        offset={+300}
                        >TEAM</SidebarLink>
            <SocialIconLink href='//twitter.com/CuteCryptoNFT' target='_blank' aria-label='Twitter'>
                <FTwitter src={TwitterSVG} />
            </SocialIconLink>
                                    <SocialIconLink href='//discord.gg/cutecrypto' target='_blank'aria-label='Discord'>
                                        <FDiscord src={DiscordSVG} />
                                    </SocialIconLink>


                                <SocialIconLink href='//opensea.io/collection/cutecrypto' target='_blank'aria-label='OpenSea'>
                                    <FaOpenSea src={OpenSeaSVG} />
                                </SocialIconLink> 
                </SidebarMenu>
                <SideBtnWrap>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
