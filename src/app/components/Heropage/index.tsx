// It is your job to implement this. More info in README

import * as React from "react";
import styled from "styled-components";
import { HeadingOne, Paragraph, HeadingTwo, HeadingThree } from "../Typography";
import { ProgressBar } from "./progressbar";
import { HeroSkill } from "./heroskill";
import { Attributes } from "./attributes";
import { HeroStory } from "./herostory";

interface IHeroPageProps {
  name: string;
  description: string;
  imgUrl: string;
  backStory: string;
  resistance: string;
  weakness: string;
  attributes: IAttributes;
  lifepowers: ILifepowers;
  skills: [ISkills];
}

export interface IAttributes {
  agility: number;
  intelligence: number;
  speed: number;
  stamina: number;
  strength: number;
}

export interface ILifepowers {
  healthpoints: number;
  mana: number;
}

export interface ISkills {
  name: string;
  damage: number;
  element: string;
}

interface IProps {
  imgUrl: string;
}

interface IButtonProps {
  backgroundColor: string;
}

const HeroPageRoot = styled.div`
  background-color: grey;
  position: relative;
  width: 100%;
`;

const Image = styled.div`
  background-color: #57595d;
  min-height: 800px;
  border-radius: 10px;
  margin-bottom: 100px auto;
  z-index: 0;
  width: 60%;
  margin: 50px auto;
  @media (max-width: 768px) {
    min-height: 500px;
    width: 100%;
  }
`;

const HeroNameHeading = styled(HeadingOne)`
  font-style: italic;
  text-transform: uppercase;
  width: 100%;
  color: white;
  text-align: center;
  margin-top: 0px;
  padding-top: 35px;
`;

const SkillHeading = styled(HeadingTwo)`
  color: white;
  width: 100%;
  margin-top: 25px;
`;

const HeroContentContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  padding-top: 40px;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  align-items: flex-start;
`;

const HeroSkillContainer = styled.div`
  margin: 30px;
  padding: 10px;
  display: flex;
  text-align: left;
  min-width: 45%;
`;

const SkillButtonContainer = styled.div`
  display: inline-block;
`;

const ShowSkill = styled.a`
font-family: "Montserrat";

color: #001147
  transition: all 0.3s ease 0s;
  display: block;
  width: 150px;
  margin: 10px;
  padding: 20px;
  border-radius: 300px;
  border: none;
  background-color: ${(props: IButtonProps) => props.backgroundColor};
  :hover {
color: #404040 ;
font-weight: 500 ;
letter-spacing: .3px;
background: pink;
-webkit-box-shadow: 0px 5px 40px -10px rgba(0,0,0,0.57);
-moz-box-shadow: 0px 5px 40px -10px rgba(0,0,0,0.57);
transition: all 0.3s ease 0s;
}
`;

const LifePowerItem = styled(Paragraph)`
  color: white;
  text-align: center;
  margin-top: -10px;
  font-size: 15px;
`;

const HeroImage = styled.img`
  margin: 0 auto;
  text-align: center;
  max-width: 250px;
  max-height: 250px;
`;

const HeroImageDiv = styled.div`
  margin: 0 auto;
  text-align: center;
`;

export const Heropage: React.FC<IHeroPageProps> = props => {
  const [skillName, setSkillName] = React.useState("");

  React.useEffect(() => setSkillName(props.skills[0].name), [props.skills]);
  console.log(props);

  return (
    <HeroPageRoot imgUrl={props.imgUrl}>
      <Image imgUrl={props.imgUrl}>
        <HeroNameHeading>{props.name}</HeroNameHeading>
        <HeroImageDiv>
          <HeroImage src={props.imgUrl}></HeroImage>
        </HeroImageDiv>
        <LifePowerItem>
          {"Resistance: "} {props.resistance}
        </LifePowerItem>
        <LifePowerItem>
          {"Weakness: "} {props.weakness}
        </LifePowerItem>{" "}
        <HeadingTwo>Overview</HeadingTwo>
        <HeroContentContainer>
          <Attributes attributes={props.attributes} />
          <HeroStory
            description={props.description}
            backStory={props.backStory}
          />
          {/*              <SkillHeading>{"Skills"}</SkillHeading>
          {" "}
          <HeroSkillContainer>
            <SkillButtonContainer>
              {props.skills.map((skill, i) => (
                <ShowSkill
                  backgroundColor={skill.name === skillName ? "pink" : "white"}
                  onClick={() => setSkillName(skill.name)}
                >
                  {skill.name}
                </ShowSkill>
              ))}
            </SkillButtonContainer>
            <HeroSkill
              {...props.skills.find(skill => skill.name === skillName)}
            ></HeroSkill>
          </HeroSkillContainer> */}
        </HeroContentContainer>
      </Image>
    </HeroPageRoot>
  );
};
