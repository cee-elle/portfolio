import React, {useState, useEffect} from 'react'
import ImgLogo from '../../images/logo.svg'
import { 
    Nav, 
    NavBarContainer, 
    NavLogo, 
    MobileIcon, 
    NavMenu, 
    NavItem,
    NavLinks, 
    NavBtn, 
    NavBtnLink, 
    ImgLogoContainer
} from './NavBar.elements'
import { IconContext } from 'react-icons/lib';
import {animateScroll as scroll} from 'react-scroll'

import { FaBars } from 'react-icons/fa'
const NavBar = ({ toggle }) => {

    const [scrollNav, setScrollNav] = useState(true)
    const changeNav = () => {
        if(window.scrollY >= 80) {
            setScrollNav(false)
        } else {
            setScrollNav(true)
        }
    }
    useEffect(() => {
        window.addEventListener('scroll', changeNav)
        
    }, []);

    const toggleHome = () => {
        scroll.scrollToTop();
    }
    return (
        <>
        <IconContext.Provider value={{color: '#fff'}}>
            <Nav scrollNav={scrollNav}>
                <NavBarContainer>
                    <NavLogo to="/" onClick={toggleHome}>
                        <ImgLogoContainer src={ImgLogo} />
                    </NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="/" onClick={toggleHome} smooth={true} duration={500} spy={true} exact='true' offset={-80}>Home</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="profile" smooth={true} duration={500} spy={true} exact='true' offset={-80}>About</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="projects" smooth={true} duration={500} spy={true} exact='true' offset={-80}>Projects</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="collab" smooth={true} duration={500} spy={true} exact='true' offset={-80}>Fullstack Projects</NavLinks>
                        </NavItem>
                        {/* <NavBtn>
                            <NavBtnLink to="/github">GitHub</NavBtnLink>
                        </NavBtn> */}
                    </NavMenu>
                </NavBarContainer>
            </Nav>    
        </IconContext.Provider>
        </>
    )
}

export default NavBar;