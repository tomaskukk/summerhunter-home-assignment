import * as React from "react";
import gql from "graphql-tag";
import { useQuery } from "react-apollo-hooks";
import styled from "styled-components";
import { Route } from "react-router-dom";

import { TopBar } from "../../components/TopBar";
import { Hero } from "../../components/Hero";
import { Footer } from "../../components/Footer";
import { HeroCard } from "../../components/HeroCard";
import { Heropage } from "../../components/Heropage";

const HEROES_QUERY = gql`
  query {
    heroes {
      name
      imgUrl
      description
      attributes {
        strength
        intelligence
        stamina
        agility
        speed
      }
    }
  }
`;

export interface IHero {
  name: string;
  imgUrl: string;
  description: string;
  backStory: string;
  healthpoints: number;
  mana: number;
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

const HeroCardContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 15px;
  padding: 1.5%;
  box-sizing: border-box;

  @media (min-width: 1400px) {
    margin-left: auto;
    margin-right: auto;
  }
`;

const HeroPageContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  box-sizing: border-box;
  @media (min-width: 1400px) {
    margin-left: auto;
    margin-right: auto;
  }
  color: white;
`;

const handleLoading = () => <div>Loading...</div>;

export const handleError = (message: string) => <div>Error! {message}</div>;

export const HeroIndex: React.FC = () => {
  const {
    data: { heroes },
    error,
    loading
  } = useQuery<{ heroes: IHero[] }>(HEROES_QUERY);

  if (error) {
    return handleError(error.message);
  }

  if (loading) {
    return handleLoading();
  }

  const heroByName = (name: string) => heroes.find(hero => hero.name === name);

  return (
    <main>
      <TopBar />
      <Hero />
      <Route
        path="/"
        render={() => (
          <HeroCardContainer>
            {heroes.map(hero => (
              <HeroCard key={hero.name} {...hero} />
            ))}
          </HeroCardContainer>
        )}
      />
      <HeroPageContainer>
        <Route
          exact
          path="/heroes/:name"
          render={({ match }) => (
            <Heropage {...heroByName(match.params.name)} />
          )}
        />
      </HeroPageContainer>
      <Footer />
    </main>
  );
};
