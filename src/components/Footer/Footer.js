import React from 'react'
import { Link } from 'react-router-dom'
import ImgLogo from '../../images/logo.svg'
import {
    FooterContainer, 
    FooterSubscription, 
    FooterSubHeading, 
    FooterSubText,
    FooterLinksWrapper,
    FooterLinkItems, 
    FooterLinkTitle, 
    FooterLink, 
    SocialMedia, 
    SocialMediaWrap, 
    SocialLogo, 
    SocialIcons,
    WebsiteRights,
    SocialIconLink,
    ImgLogoContainer,
    NavGit, 
    NavMail,
    NavIn
} from './Footer.element'


const Footer = () => {
    return (
        <>
            <FooterContainer>
                {/* <FooterSubscription>
                    <FooterSubHeading>
                        Join me
                        <FooterSubText>
                        This is where it begins
                        </FooterSubText>
                    </FooterSubHeading>
                </FooterSubscription>
                <FooterLinksWrapper>
                    <FooterLinkItems>
                        <FooterLinkTitle>
                            <FooterLink to='/contact'>How to reach me</FooterLink>
                        </FooterLinkTitle>
                    </FooterLinkItems>
                </FooterLinksWrapper> */}
            <SocialMedia>
                <SocialMediaWrap>
                    <SocialLogo to="/">
                        <ImgLogoContainer src={ImgLogo} />
                    </SocialLogo>
                    <WebsiteRights>Cindy Le © 2020</WebsiteRights>
                    <SocialIcons>
                        <SocialIconLink href='/' target="_blank" aria-label="Instagram">
                            <NavGit />
                        </SocialIconLink>
                        <SocialIconLink href='/' target="_blank" aria-label="Facebook">
                            <NavMail />
                        </SocialIconLink>
                        <SocialIconLink href='/' target="_blank" aria-label="GitHub">
                            <NavIn/>
                        </SocialIconLink>
                    </SocialIcons>
                </SocialMediaWrap>
            </SocialMedia>
            </FooterContainer>
        </>
    )
}


export default Footer