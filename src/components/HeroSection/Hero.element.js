import styled from 'styled-components';

export const HeroContainer = styled.div`
    background: #42485F;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 800px;
    position: relative;
    z-index: 1;
`;

export const HeroBg = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`;

export const ImgBg = styled.img`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    background: #42485F;
`

export const HeroContent = styled.div`
    z-index: 3;
    max-width: 800px;
    padding-left: 15%;
    padding-top: 5%;
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: none;
`

export const HeroLogo = styled.div`
    width: 100%;
    height: 100%;
    --o-object-fit: cover;
    object-fit: cover;
    background: none;

`
export const ImgLogo = styled.img`
    height: 100%;
    width: 100%;
    background: none;
 
`