import React from 'react'
import Video from '../../videos/skypattern.mp4'
import { HeroContainer, HeroBg, VideoBg, HeroContent, CloudsContainer, Row1, Row2, HeroGradient, CloudPlace, AccHeader, } from './VideoMapElements';
import Goal25 from '../../images/Clouds/Twenty2.png'
import Goal50 from '../../images/Clouds/Fifty2.png'
import Goal75 from '../../images/Clouds/Seventy2.png'
import Goal100 from '../../images/Clouds/Hundred2.png'
import Bonus from '../../images/Clouds/BonusCloud2.png'
import RoadmapPic from '../../images/s1roadmap.png'

const VideoMap = () => {
    return (
        <HeroContainer id="roadmap">
            <HeroBg>
                <HeroGradient />
                <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
            </HeroBg>
            <HeroContent>
                        <AccHeader  src={RoadmapPic}></AccHeader>
                <CloudsContainer>
                    <Row1>
                    <CloudPlace src={Goal25}/>
                    <CloudPlace src={Goal50}/>
                    <CloudPlace src={Goal75}/>
                    </Row1>
                    <Row2>
                    <CloudPlace src={Goal100}/>
                    <CloudPlace src={Bonus}/>
                    </Row2>
                </CloudsContainer>
            </HeroContent>
        </HeroContainer>
        );
};


export default VideoMap
