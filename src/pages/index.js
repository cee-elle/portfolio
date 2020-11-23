import React, { useState } from 'react'
import { NavBar, SideBar, HeroSection, InfoSection, Projects, Footer, Profile} from '../components';
import { homeObjOne, homeObjThree } from '../components/InfoSection/Data'
import GlobalStyle from '../globalStyles'
import { BrowserRouter as Router } from 'react-router-dom';

const Home = () => {
    const [isOpen, setIsOpen] = useState("");

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <Router>
            <GlobalStyle />
            <SideBar isOpen={isOpen} toggle={toggle}/>
            <NavBar toggle={toggle} />
            <HeroSection />
            <Profile />
            <Projects/>
            <InfoSection {...homeObjOne}/>
            {/* <InfoSection {...homeObjThree}/> */}
            <Footer />

        </Router>
    )
}

export default Home