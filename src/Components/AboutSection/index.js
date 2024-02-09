import React from 'react'
import { AboutContainer, Textbox, AboutWrapper, AboutRow, Column1, Column2, TextWrapper, Subtitle, ImgWrap, Img, AboutBanner} from './AboutElements'
import AboutPic from '../../images/about.png'
import img2 from '../../images/CircleDisplay.png'

const AboutSection = ({lightBg, id, imgStart, img, alt, }) => {
    return (
        <>
        <AboutContainer lightBg={lightBg} id={id}>
            <AboutWrapper>
                <AboutRow imgStart={imgStart}>
                    <Column1>
                    <TextWrapper>
                        <AboutBanner src={AboutPic} />
                        <Textbox><Subtitle>Cute Crypto was born as a passion project for our team incorporating our love for art, fashion, and NFTs. We wanted to bring our pastels, J-fashion, and other cuteness to the Ethereum blockchain. Our first collection is a pass that will give exclusive access to all our future projects and also functions as a full scale art project. The collection consists of 8,888 hand-drawn randomly generated Cuties. The Cuties are composed of 200 possible traits across eight different properties at launch. We can’t wait for you to join us and show off your cuteness in the Metaverse.</Subtitle>
                        </Textbox>
                    </TextWrapper>
                    </Column1>
                    <Column2>
                     <ImgWrap>
                     {/* <Img src={img} alt={alt} /> */}
                        <Img src={img2} />
                    </ImgWrap>
                    </Column2>  
                </AboutRow>
            </AboutWrapper>
        </AboutContainer>
        </>
    );
}

export default AboutSection
