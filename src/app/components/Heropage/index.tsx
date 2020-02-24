import gql from "graphql-tag";
import * as React from "react";
import styled from "styled-components";
import { HeadingOne, Paragraph, HeadingTwo } from "../Typography";
import { Attributes } from "./attributes";
import { HeroStory } from "./herostory";
import { HeroSkillContainer } from "./heroskillcontainer";
import { HeroElements } from "./elements";
import { useQuery } from "react-apollo-hooks";
import { IHero, handleError, handleLoading } from "../../views/HeroIndex";

const HERO_BY_NAME = name => gql`
  query {
    heroByName(name: ${name}) {
      backStory
      traits {
        resistance
        weakness
      }
      lifepowers {
        healthpoints
        mana
      }
      skills {
        name
        damage
        element
        description
      }
    }
  }
`;

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
  text-align: center;
`;

// since we are provided with graphql api lets use it as it should be used
// lets get the information needed only after we need it
// doesn't really matter in this app, but if it would be a bigger application
// it migth matter a lot

export const Heropage: React.FC<IHeroPageProps> = props => {
  const rootRef = React.useRef(null);

  const {
    data: { heroByName },
    error,
    loading
  } = useQuery<{ heroByName: IHero }>(HERO_BY_NAME(JSON.stringify(props.name)));

  React.useEffect(
    () =>
      window.scrollTo({ top: rootRef.current.offsetTop, behavior: "smooth" }),

    [props]
  );

  if (error) {
    return handleError(error.message);
  }

  // lets give all the information we can from props while loading
  // and serve rest after query is complete
  if (loading) {
    return (
      <HeroPageRoot ref={rootRef} imgUrl={props.imgUrl}>
        <Image imgUrl={props.imgUrl}>
          <HeroNameHeading className="heropage-heading">
            {props.name}
          </HeroNameHeading>

          <HeroContentContainer>
            <Attributes attributes={props.attributes} />
          </HeroContentContainer>
        </Image>
      </HeroPageRoot>
    );
  }

  return (
    <HeroPageRoot ref={rootRef} imgUrl={props.imgUrl}>
      <Image imgUrl={props.imgUrl}>
        <HeroNameHeading className="heropage-heading">
          {props.name}
        </HeroNameHeading>
        <LifePowers className="hero-lifepowers">
          {"Health: "} {heroByName.lifepowers.healthpoints} {" • "}
          {"Mana: "} {heroByName.lifepowers.mana}
        </LifePowers>
        <HeroContentContainer>
          <Attributes attributes={props.attributes} />
          <HeroStory
            description={props.description}
            backStory={heroByName.backStory}
          />
          <HeroSkillContainer skills={heroByName.skills} />
          <HeroElements {...heroByName.traits} />
        </HeroContentContainer>
      </Image>
    </HeroPageRoot>
  );
};
