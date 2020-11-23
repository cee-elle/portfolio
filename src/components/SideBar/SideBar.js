import React from 'react'
import { 
    SideBarContainer, 
    Icon, 
    CloseIcon, 
    SideBarWrapper, 
    SideBarMenu, 
    SideBarLink,
    SideBarRoute 
} from './SideBar.elements.js'

const SideBar = ({isOpen, toggle}) => {
    return (
        <SideBarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon/>
            </Icon>
            <SideBarWrapper>
                <SideBarMenu>
                    <SideBarLink to="Home">
                        Home
                    </SideBarLink>
                    <SideBarLink to="profile">
                        About
                    </SideBarLink>
                    <SideBarLink to="projects">
                        Projects
                    </SideBarLink>
                    <SideBarLink to="contact">
                        Contact Me
                    </SideBarLink>
                    {/* <SideBarRoute to="./github">
                        Github
                    </SideBarRoute> */}
                </SideBarMenu>
            </SideBarWrapper>
        </SideBarContainer>
    )
}

export default SideBar