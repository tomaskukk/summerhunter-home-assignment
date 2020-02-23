// It is your job to implement this. More info in README

import * as React from "react";
import styled from "styled-components";
import { HeadingOne, Paragraph, HeadingTwo, HeadingThree } from "../Typography";
import { Attributes } from "./attributes";
import { HeroStory } from "./herostory";
import { HeroSkillContainer } from "./heroskillcontainer";
import { HeroElements } from "./elements";

interface IHeroPageProps {
  name: string;
  description: string;
  imgUrl: string;
  backStory: string;
  traits: ITraits;
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

export interface ITraits {
  resistance: string;
  weakness: string;
}

export interface ISkills {
  name: string;
  damage: number;
  element: string;
  description: string;
}

interface IPictureProps {
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
    url(${(props: IPictureProps) => props.imgUrl});
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
    url(${(props: IPictureProps) => props.imgUrl});
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

const HeroContentContainer = styled.div`
  width: 95%;
  display: flex;
  justify-content: space-evenly;
  margin: 0 auto;
  flex-wrap: wrap;
`;

const LifePowers = styled(Paragraph)`
  color: white;
  text-align: center;
  margin-top: -15px;
  font-size: 15px;
  text-transform: uppercase;
`;

export const SectionHeading = styled(HeadingTwo)`
  color: white;
  width: 100%;
  margin-top: 25px;
  text-transform: uppercase;
  font-style: italic;
`;

export const Heropage: React.FC<IHeroPageProps> = props => {
  const rootRef = React.useRef(null);

  React.useEffect(
    () =>
      window.scrollTo({ top: rootRef.current.offsetTop, behavior: "smooth" }),
    [props]
  );

  return (
    <HeroPageRoot ref={rootRef} imgUrl={props.imgUrl}>
      <Image imgUrl={props.imgUrl}>
        <HeroNameHeading>{props.name}</HeroNameHeading>
        <LifePowers>
          {"Health: "} {props.lifepowers.healthpoints} {" • "}
          {"Mana: "} {props.lifepowers.mana}
        </LifePowers>
        <HeroContentContainer>
          <Attributes attributes={props.attributes} />
          <HeroStory
            description={props.description}
            backStory={props.backStory}
          />
          <HeroSkillContainer skills={props.skills} />
          <HeroElements {...props.traits} />
        </HeroContentContainer>
      </Image>
    </HeroPageRoot>
  );
};
