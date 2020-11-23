import styled from 'styled-components';
import { Link } from 'react-router-dom'
import { FiGithub, FiLinkedin } from 'react-icons/fi';
import { HiOutlineMail} from 'react-icons/hi';

export const FooterContainer = styled.div`
    background-color: #0a1111;
    padding: 1rem 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  
`;

export const FooterSubscription = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-bottom: 24px;
    padding: 24px;
    color: #fff;
`;

export const FooterSubHeading = styled.div`
    font-family: 'Trebuchet MS', 'Lato', 'Lucida Grande';
    margin-bottom: 24px;
    font-size: 24px;
`;

export const FooterSubText = styled.div`
    margin-bottom: 24px;
    font-size: 20px;
`
export const FooterLinksContainer = styled.div`
    width: 100%;
    max-width: 1000px;
    display: flex;
    justify-content: center;
    
    @media screen and (max-width: 820px) {
        padding-top: 32px;
    };
`;

export const FooterLinksWrapper = styled.div`
    display: flex;

    @media screen and (max-width: 820px) {
        flex-direction: column;
    };

`;
export const FooterLinkItems = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 16px;
    text-align: left;
    width: 160px;
    box-sizing: border-box;
    color: #fff;

    @media screen and (max-width: 420px) {
        nargin: 0;
        padding: 10px;
        width: 100%;
    };
`;

export const FooterLinkTitle = styled.div`
    margin-bottom: 16px;
`;

export const FooterLink = styled(Link)`
    color: #ffff;
    text-decoration: none;
    margin-bottom: 0.5rem;

    &:hover {
        color: #0467fb;
        transition: 0.3s ease-out;
    }
`;

export const SocialMedia = styled.section`
    max-width: 1000px;
    width: 100%;
    background: none;
`;
export const SocialMediaWrap = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 1000px;
    margin: 1rem auto 0 auto;
    background: none;

    @media screen and (max-width: 820px) {
        flex-direction: column;
    }
`;
export const SocialLogo = styled.div`
    color: #fff;
    justify-self: start;
    cursor: pointer;
    text-decoration: none;
    font-size: 2rem;
    display: flex;
    align-items: center;
    margin-bottom: 16px;
    max-height: 2rem;
    background: none;
`;

export const WebsiteRights = styled.p`
    color: #fff;
    font-size: 1rem;
    width: 33%;
    background: none;
`;

export const SocialIcons = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 240px;
    background: none;
`;
export const SocialIconLink = styled.a`
    color: #fff;
    font-size: 24px;
    background: none;

    &:hover {
        color: #fddb92;
    }
`;

export const ImgLogoContainer = styled.img`
    width: 33%;
    padding: 1rem;
    background: none;
`;
export const NavGit = styled(FiGithub)`
    background: none;
    color: #ffffff;
`
export const NavIn = styled(FiLinkedin)`
    background: none;
    color: #ffffff;
`
export const NavMail = styled(HiOutlineMail)`
    background: none;
    color: #ffffff;
`
