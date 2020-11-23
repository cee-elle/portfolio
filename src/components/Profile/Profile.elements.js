import styled from 'styled-components'

export const ProfileContainer = styled.div`
    background: #42485F;
    width: 100vw;
    margin: 8rem 0;
`;

export const ProfileWrapper = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    grid-gap: 16px;
    padding: 0 50px;

    @media screen and (max-width: 1000px) {
        grid-template-columns: 1fr 1fr;
    }
    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
        padding: 0 20px;
    }
`

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    max-height: 500px;
    padding: 30px;
    transition: all 0.2s ease-in-out;
`;

export const ImageContainer = styled.div`
    width: 20rem;
    height: 20rem;
    border-radius: 50%;
    position: relative;
    overflow: hidden;
    background: #42485F;
    box-shadow: -4px 4px 8px rgba(0, 0, 0, 0.25);
`;

export const ImgCircle = styled.img`
    width: 100%;
    height: 100%;
    object-fit:cover;
`;

export const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
   
`;

export const Title = styled.h2`
    color: #ffffff;
    font-family: 'Playfair Display', serif;
    font-size: 4rem;
    text-align: center;
`;

export const InfoBox = styled.h6`
    color: #ffffff;  
    font-size: 1rem;
    font-weight: 300;
    margin-top: 2rem;
    text-align: center;
`;

export const DividerContainer = styled.div`
    width: 100vw;
`;

export const ImgDivider = styled.img`
    margin-top: 5rem;
    width: 100%;
    transform: scaleX(-1);
`