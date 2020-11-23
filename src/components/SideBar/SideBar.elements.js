import styled from 'styled-components';
import {FaTimes} from 'react-icons/fa';
import { Link as LinkS } from 'react-router-dom';

export const SideBarContainer = styled.aside`
    position: fixed;
    z-index:999;
    width: 100%;
    height: 100%;
    background: #42485f;
    display: grid;
    align-items: center;
    top: 0;
    left: 0;
    transition: 0.2s ease-in-out;
    opacity: ${({ isOpen }) => (isOpen ? '100%' : '0%' )};
    top: ${({ isOpen }) => (isOpen ? '0' : '100%')};
`;

export const CloseIcon = styled(FaTimes)`
    color: #ffff;
`;

export const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;
`;

export const SideBarMenu = styled.ul`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, 80px);
    text-align: center;

    @media screen and (max-width: 480px) {
        grid-template-rows: repeat()(6, 60px);
    }
`;

export const SideBarWrapper = styled(LinkS)`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    text-decoration: none;
    list-style: none;
    transition: 0.2s ease-in-out;
    color: #ffff;
    cursor: pointer;

    &:hover {
        color: red;
        transition: 02.s ease-in-out;
    }
`;

export const SideBtnWrap = styled.div`
    display: flex;
    justify-content: center;
`;

export const SideBarRoute = styled.div`
    border-radius: 50px;
    background: #01bf71;
    white-space: nowrap;
    padding: 1.5rem 64px;
    color: #010606;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    
    &:hover {
        transition: all 0.2s ease-in-out;
        background: #ffff;
        color: #010606;
    }
`;

export const SideBarLink = styled.div`
    display: flex;
    justify-content: center;
`