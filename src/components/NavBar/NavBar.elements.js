import styled from 'styled-components'
import { Link as LinkR } from 'react-router-dom'
import { Link as LinkS} from 'react-scroll'

export const Nav = styled.nav`
    background: ${({ scrollNav }) => (scrollNav ? '#42485f' : '#0a1111')};
    height: 80px;
    /* margin-top: -80px; */
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;

    @media screen and (max-width: 960px) {
        transition: 0.8s all ease;
    }
`;

export const NavBarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 1000%;
    padding: 0 24px;
    max-width: 11000px;
`;

export const NavLogo = styled(LinkR)`
    color: #ffff;
    justify-self: flex-start;
    cursor: pointer;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    margin-left: 24px;
    font-weight: bold;
    text-decoration: none;
`;

export const MobileIcon = styled.div`
    display:none;

    @media screen and (max-width: 768px) {
        color: #ffff;
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
    }
`;

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-right: -22px;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const NavItem = styled.li`
    height: 60px;
`;

export const NavLinks = styled(LinkS)`
    color: #ffff;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    text-decoration: none;
    padding: 0 0.5rem;
    height: 100%;
    cursor: pointer;
    margin-right: 2rem;
    text-transform: uppercase;

    &.active {
        border-bottom: 3px solid #fddb92;
    }
`;

export const NavBtn = styled.nav`
    display: flex;
    align-items: center;
    margin-right: 2rem;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const NavBtnLink = styled(LinkR)`
    border-radius: 50px;
    background: #fddb92;
    white-space: nowrap;
    padding: 10px 22px;
    color: red;
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #ffff;
        color: red;
    }
`
export const ImgLogoContainer = styled.img`
    height: 100%;
    padding: 1rem;
`;
