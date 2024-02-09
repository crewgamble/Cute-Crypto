import React, { useState } from 'react'
import Sidebar from './Components/Sidebar'
import Navbar from './Components/NavBar'
import HeroSection from './Components/HeroSection'
import AboutSection from './Components/AboutSection/index.js'
import { homeObjOne } from './Components/AboutSection/Data'
import RaritySection from './Components/Rarity'
import { homeObjTwo } from './Components/Rarity/Data'
import DemoRarity from './Components/Rarity/DemoDivider'
import VideoMap from './Components/Roadmap2/VideoMap'
import Organizer from './Components/Accordion2/Organizer'
import Services from './Components/Team'
import Footer from './Components/Footer'

const Home = () => {
 const [isOpen, setIsOpen] = useState(false)
 
 const toggle = () => {
     setIsOpen(!isOpen)
 } 

    return (
        <>
          <Sidebar isOpen={isOpen} toggle={toggle}/>
          <Navbar toggle={toggle} />
          <HeroSection />
          <AboutSection {...homeObjOne} />
          <RaritySection {...homeObjTwo} />
          {/*<DemoRarity /> */}
          <VideoMap />
          <Organizer />
          <Services />
          <Footer />
        </>
    )
}

export default Home