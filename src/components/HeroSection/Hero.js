import React from 'react'
import Img from '../../images/hero-divider.svg'
import ImgText from '../../images/logoText.svg'
import {HeroContainer, HeroBg, ImgBg, HeroContent, HeroLogo, ImgLogo} from './Hero.element'

const HeroSection = () => {
    return (
        <HeroContainer>
            <HeroBg>
                <ImgBg src={Img} type='img'/>
            </HeroBg>
            <HeroContent>
                <HeroLogo>
                <ImgLogo src={ImgText} type='img'/>
                </HeroLogo>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
