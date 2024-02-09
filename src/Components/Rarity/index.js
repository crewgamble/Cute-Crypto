import React from 'react'
import { AboutContainer, AboutWrapper, AboutRow, Textbox, Column1, Column2, TextWrapper, TopLine, Subtitle, ImgWrap, Img, RarityBanner} from './AboutElements'
import AboutPic from '../../images/rarityWhite.png'
import img2 from '../../videos/PreviewVideo2.mp4'


const RaritySection = ({lightBg, id, imgStart, darkText, description, img, alt}) => {
    return (
        <>
        <AboutContainer lightBg={lightBg} id={id}>
            <AboutWrapper>
                <AboutRow imgStart={imgStart}>
                    <Column1>
                    <TextWrapper>
                    <RarityBanner src={AboutPic} />
                        <TopLine darkText={darkText}>{description}</TopLine>
                        <pre></pre>                        <Textbox><Subtitle>Cuties are randomly generated with eight different attributes: Background, Back Hair, Skin, Face, Front Hair, Headwear, Facial Accesories, and Clothes. There are over 200 individual traits each with its own rarity ranked from common to secret. The last tier, "Secret" is comprised of unique traits completely unshared with other Cuties making them one of one pieces.</Subtitle>
                       <Subtitle>For quality assurance, and maximum cuteness we made it so traits involving skin will always be the same color, and the color of the front hair and back hair will always be the same.</Subtitle>
                       <Subtitle>There are over a million possible combinations, but only 8,888 will be released...</Subtitle></Textbox>
                    </TextWrapper>
                    </Column1>
                    <Column2>
                     <ImgWrap>
                        {/* <Img autoPlay loop muted src={img} alt={alt} /> */}
                        <Img autoPlay loop muted src={img2} alt={alt} /> 
                    </ImgWrap>
                    </Column2>
                </AboutRow>
            </AboutWrapper>
        </AboutContainer>
        </>
    );
}

export default RaritySection
