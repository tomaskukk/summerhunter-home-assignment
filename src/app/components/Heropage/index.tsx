// It is your job to implement this. More info in README

import * as React from "react";
import styled from "styled-components";
import { HeadingOne, Paragraph, HeadingTwo, HeadingThree } from "../Typography";
import { ProgressBar } from "./progressbar";
import { HeroSkill } from "./heroskill";
import { Attributes } from "./attributes";
import { HeroStory } from "./herostory";
import { SkillItem } from "./heroskill";

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
  background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0),
      rgba(0, 0, 0, 0.9)
    ),
    linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.9)),
    linear-gradient(to left, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.9)),
    linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.95)),
    url(${(props: IProps) => props.imgUrl});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  width: 100%;
`;

const Image = styled.div`
  background-image: linear-gradient(
      to left,
      rgba(0, 0, 0, 0),
      rgba(0, 0, 0, 0.85)
    ),
    linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.85)),
    url(${(props: IProps) => props.imgUrl});
  min-height: 1000px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  margin-bottom: 100px auto;
  z-index: 0;
  width: 60%;
  margin: 0 auto;
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
  margin: 0px;
  padding: 0px;
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
  display: -webkit-flex;
  display: flex;
  justify-content: space-evenly;
  -webkit-justify-content: space-evenly;
  -webkit-flex-wrap: wrap;
  flex-wrap: wrap;
`;

const HeroSkillContainer = styled.div`
  margin: 30px;
  padding: 10px;
  min-width: 400px;
  display: block;
  text-align: left;
  width: 40%;
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
  margin-top: -15px;
  font-size: 15px;
  text-transform: uppercase;
`;

export const Heropage: React.FC<IHeroPageProps> = props => {
  const [skillName, setSkillName] = React.useState("");

  React.useEffect(() => setSkillName(props.skills[0].name), [props.skills]);
  console.log(props);

  return (
    <HeroPageRoot imgUrl={props.imgUrl}>
      <Image imgUrl={props.imgUrl}>
        <HeroNameHeading>{props.name}</HeroNameHeading>
        <LifePowerItem>
          {"Health: "} {props.lifepowers.healthpoints} {" ● "}
          {"Mana: "} {props.lifepowers.mana}
        </LifePowerItem>{" "}
        <HeroContentContainer>
          <Attributes attributes={props.attributes} />
          <HeroStory
            description={props.description}
            backStory={props.backStory}
          />
          <HeroSkillContainer>
            <SkillHeading>{"Skills"}</SkillHeading>
            <SkillButtonContainer>
              {props.skills.map(skill => (
                <HeroSkill key={skill.name} {...skill}></HeroSkill>
              ))}
            </SkillButtonContainer>
          </HeroSkillContainer>
          <HeroSkillContainer>
            <SkillHeading>{"Elements"}</SkillHeading>
            <SkillButtonContainer>
              <SkillItem>
                {"Resistance: "} {props.resistance}
              </SkillItem>
              <SkillItem>
                {"Weakness: "} {props.weakness}
              </SkillItem>
            </SkillButtonContainer>
          </HeroSkillContainer>
        </HeroContentContainer>
      </Image>
    </HeroPageRoot>
  );
};
