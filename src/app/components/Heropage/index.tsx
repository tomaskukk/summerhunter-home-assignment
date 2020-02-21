// It is your job to implement this. More info in README

import * as React from "react";
import styled from "styled-components";
import { HeadingOne, Paragraph, HeadingTwo } from "../Typography";
import { ProgressBar } from "./progressbar";
import { HeroSkill } from "./heroskills";
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
  width: 65%;
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
`;

const HeroContentContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  padding-top: 50px;
  display: -webkit-flex;
  display: flex;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-flex-wrap: wrap;
  flex-wrap: wrap;
`;

export const Heropage: React.FC<IHeroPageProps> = props => {
  console.log(props);

  return (
    <HeroPageRoot imgUrl={props.imgUrl}>
      <Image imgUrl={props.imgUrl}>
        <HeroNameHeading>{props.name}</HeroNameHeading>

        <HeroContentContainer>
          <Attributes attributes={props.attributes} />

          <HeroStory
            description={props.description}
            backStory={props.backStory}
          />

          {/* <AttributesDiv>
            <BasicInformationDiv>
              {"Resistance: "} {props.resistance}
            </BasicInformationDiv>

            <BasicInformationDiv>
              {"Weakness: "} {props.weakness}
            </BasicInformationDiv>

            <BasicInformationDiv>
              {"Health"} {props.lifepowers.healthpoints}
            </BasicInformationDiv>
            <BasicInformationDiv>
              {"Mana"} {props.lifepowers.mana}
            </BasicInformationDiv>
          </AttributesDiv> */}
          {props.skills.map(skill => (
            <HeroSkill key={skill.name} {...skill} />
          ))}
        </HeroContentContainer>
      </Image>
    </HeroPageRoot>
  );
};
