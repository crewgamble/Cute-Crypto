import React, {useState, useEffect} from 'react';
import { FaBars } from 'react-icons/fa';
import { ethers } from 'ethers';
import {Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, SocialIconLink, FTwitter, FaOpenSea, FDiscord, } from './NavbarElements';
import {animateScroll as scroll} from 'react-scroll';
import TwitterSVG from '../../images/TwitterSVG.svg';
import DiscordSVG from '../../images/DiscordSVG.svg';
import OpenSeaSVG from '../../images/OpenSea.svg';
import Logo from '../../images/full_logo2.png';
import { Button } from '../ButtonElement';



const toggleHome = () => {
    scroll.scrollToTop();
};


const Navbar = ({ toggle }) => {
    const [scrollNav, setScrollNav] = useState(false);
    const [connectedWallet, setConnectedWallet] = useState();

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

    useEffect(() => {
        try{
            let provider = new ethers.providers.Web3Provider(window.ethereum);
            if (typeof provider !== 'undefined') {
                window.ethereum.on('accountsChanged', (accounts) => {
                console.log(`account changed to ${accounts[0]}`);
                setConnectedWallet(accounts[0]);
            })
          
            window.ethereum.on('chainChanged', (chainId) => {
                console.log(`network changed to ${chainId}. Reloading...`);
                window.location.reload();
            })
          
            window.ethereum.on('disconnect', (providerRpcError) => {
                console.log('ethereum disconnected', providerRpcError);
                setConnectedWallet();
            })
          
            getAccount();
          }
        } catch (err) {
            console.log(err);
            console.log("No ethereum service.");
        }
      }, [connectedWallet]);

      const getAccount = async () => {
        try {
            console.log('ethereum connected');
            let accounts = await window.ethereum.request({ method: "eth_accounts" });
            console.log(`${accounts[0]} connected`);
            setConnectedWallet(accounts[0]);
        } catch (err) {
            console.log(err);
        }
      }
    
      const requestAccount = async () => {
        try {
            await window.ethereum.request({ method: "eth_requestAccounts" });
        } catch (err) {
            console.log(err);
        }
      }

    return (
        <>
        <Nav scrollNav={scrollNav}>
            <NavbarContainer>
                <NavLogo src={Logo} to='/' onClick={toggleHome}
                duration={250} />
                <MobileIcon onClick={toggle}>
                    <FaBars />
                </MobileIcon >
                <NavMenu>
                    <NavItem>
                        <NavLinks to='about'
                        smooth={true}
                        duration={300}
                        spy={true}
                        exact='true'
                        offset={-50}
                        scrollNav={scrollNav}
                        >ABOUT</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='rarity'
                        smooth={true}
                        duration={300}
                        spy={true}
                        exact='true'
                        offset={-50}
                        scrollNav={scrollNav}
                        >RARITY</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='roadmap'
                        smooth={true}
                        duration={300}
                        spy={true}
                        exact='true'
                        offset={-50}
                        scrollNav={scrollNav}
                        >ROADMAP</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='faq'
                        smooth={true}
                        duration={300}
                        spy={true}
                        exact='true'
                        offset={-50}
                        scrollNav={scrollNav}
                        >FAQ</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='team'
                        smooth={true}
                        duration={300}
                        spy={true}
                        exact='true'
                        offset={-50}
                        scrollNav={scrollNav}
                        >TEAM</NavLinks>
                    </NavItem>
                </NavMenu>
                <NavBtn>
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
                            <Button onClick={requestAccount}>Connect Wallet</Button>

                            
                </NavBtn>

            </NavbarContainer>          
        </Nav>
        </>
    );
};

export default Navbar
