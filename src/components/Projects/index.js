import React from 'react';
import Divider from '../../images/divider.svg';
import healthbro from '../../images/healthbro.png';
import vancouver from '../../images/project1.jpg';
import todo from '../../images/project3.jpg';
import {
    ProjectContainer, 
    ProjectH1, 
    ProjectWrapper, 
    ProjectCard, 
    ProjectIcon, 
    ProjectH2, 
    ProjectP, 
    DividerContainer, 
    ImgDivider,
    ProjectTech
} from './Projects.elements'

const Project = () => {
    return (
        <ProjectContainer id="projects">
            <ProjectH1>Individual Projects</ProjectH1>
            <ProjectWrapper>
                <ProjectCard>
                    <ProjectIcon src={healthbro}/>
                    <ProjectH2>Health Bro Redesign</ProjectH2>
                    <ProjectP>I redesigned a web app idea from a group project. The app aims to assist users to find recipes based upon their calories while catering to their health needs. The design focuses on recipe cards for the user to easily see the highlights of the recipe before looking at the full recipe card.</ProjectP>
                    <ProjectTech>Technologies Used: Figma</ProjectTech>
                </ProjectCard>
                <ProjectCard>
                    <ProjectIcon src={vancouver} />
                    <ProjectH2>Vancouverite On Location</ProjectH2>
                    <ProjectP>A passion project that is aimed to help locals rediscover their own backyard. It would help connect locals or residents in Vancouver with travellers visiting Vancouver who don't want to follow the traditional tourist spots.</ProjectP>
                    <ProjectTech>Technologies Used: CSS, HTML, Javascript</ProjectTech>
                </ProjectCard>
                <ProjectCard>
                    <ProjectIcon src={todo}/>
                    <ProjectH2>Todo App</ProjectH2>
                    <ProjectP>An app meant to help users see their to do list, mark and delete tasks. The user can edit or add new tasks.</ProjectP>
                    <ProjectTech>Technologies Used: React, Node.js, CSS, HTML</ProjectTech>
                </ProjectCard>
            </ProjectWrapper>
            <DividerContainer>
            <ImgDivider src={Divider}/>
            </DividerContainer>
        </ProjectContainer>
        
    )
}

export default Project