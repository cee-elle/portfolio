import styled from 'styled-components'

export const ProjectContainer = styled.div`
    height: 800px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #42485F;
    padding-top: 10rem;

    @media screen and (max-width: 768px) {
        height: 1100px;
    }
    @media screen and (max-width: 480px) {
        height: 1300px;
    }
`;
export const ProjectWrapper = styled.div`
    max-width: 1300px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: flex-start;
    justify-content: center;
    grid-gap: 2rem;
    padding: 0 50px;

    @media screen and (max-width: 1000px) {
        grid-template-columns: 1fr 1fr;
    }
    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
        padding: 0 20px;
    }
    
`;
export const ProjectCard = styled.div`
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    max-height: 500px;
    padding: 10px;
    transition: all 1.5s ease-in;

    &:hover {
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }
`;

export const ProjectH1 = styled.h1`
    font-size: 5rem;
    color: #fff;
    margin-bottom: 3rem;
    font-family: 'Playfair Display', serif;
    @media screen and (max-width: 780px) {
        font-size:4rem;
    }
    @media screen and (max-width: 480px) {
        font-size:2rem;
    }
    `;

export const ProjectH2 = styled.h2`
    color: #ffffff;
    font-size: 2rem;
    margin-bottom: 2rem;
    text-transform: uppercase;
    font-weight: 700;
    `;

export const ProjectP = styled.p`
    color: #ffffff; 
    font-size: 1rem;
    text-align: center;
    font-weight: 300;
    `;
export const ProjectTech = styled.p`
    color: #ffffff; 
    font-size: .5rem;
    text-align: center;
    font-weight: 300;
`
export const DividerContainer = styled.div`
    width: 100vw;
    `;

export const ImgDivider = styled.img`
    margin-top: 2rem;
    width: 100%;
    /* transform: scaleX(-1); */
    `

export const ProjectIcon = styled.img`
    width: 100%;
    margin-bottom: 2rem;
    background: #42485F;
    box-shadow: -4px 4px 8px rgba(0, 0, 0, 0.25);
    border-radius: 26px;
`;