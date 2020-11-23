import React from 'react';
import ImgHere from '../../images/profile.jpg';
import Divider from '../../images/divider.svg'
import {
    ProfileContainer,
    ProfileWrapper,
    Container,
    ImageContainer,
    ImgCircle,
    InfoContainer,
    Title,
    InfoBox, 
    DividerContainer,
    ImgDivider
} from './Profile.elements'

const Profile = () => {
    return (
        <ProfileContainer id="profile">
            <ProfileWrapper>
                <Container>
                    <ImageContainer>
                        <ImgCircle src={ImgHere}/>  
                    </ImageContainer>
                </Container>
                <Container>
                    <InfoContainer>
                        <Title>
                            About Me
                        </Title>
                        <InfoBox>
                            Hi! My name is Cindy Le, and I have been studying to be a Fullstack Web Developer in the last 2 years. My main focus is on Front-End Development. 
                        </InfoBox>
                    </InfoContainer>
                </Container>
            </ProfileWrapper>
            <DividerContainer>
            <ImgDivider src={Divider}/>
            </DividerContainer>
        </ProfileContainer>
    )
}

export default Profile