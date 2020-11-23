import React from 'react'
import { Button } from '../ButtonElement'
import { 
    InfoContainer, 
    InfoWrapper, 
    InfoRow, 
    Column1, 
    Column2, 
    TextWrapper, 
    TopLine, 
    Heading, 
    Subtitle, 
    BtnWrap, 
    Img, 
    ImgWrap,
    ProjectTech
} from './Info.elements'

const InfoSection = ({lightBg, id, imgStart, topLine, lightText, darkText, buttonLabel, description, img, alt, headline, primary, dark, dark2, tech}) => {
    return (
        <>
            <InfoContainer lightBg={lightBg} id={id}>
                <InfoWrapper>
                    <InfoRow imgStart={imgStart}>
                        <Column1>
                            <TextWrapper>
                                <TopLine>{topLine}</TopLine>
                                <Heading lightText={lightText}>{headline}</Heading>
                                <Subtitle darkText={darkText}>{description}</Subtitle>
                                <ProjectTech darkText={darkText}>{tech}</ProjectTech>
                                {/* <BtnWrap>
                                    <Button to="home" 
                                    smooth={true} 
                                    duration={500}
                                    spy={true} 
                                    exact="true"
                                    offset={-80}
                                    primary={primary ? 1: 0}
                                    dark={dark ? 1 : 0}
                                    dark2={dark2 ? 1 : 0}
                                    > Home </Button>
                                </BtnWrap> */}
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                                <Img src={img} alt={alt}/>
                            </ImgWrap>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </>
    )
}

export default InfoSection
