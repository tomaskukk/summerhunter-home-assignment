import * as React from "react";
import gql from "graphql-tag";
import { useQuery } from "react-apollo-hooks";
import styled from "styled-components";
import { Route } from "react-router-dom";

import { TopBar } from "../../components/TopBar";
import { Hero } from "../../components/Hero";
import { Footer } from "../../components/Footer";
import { HeroCard } from "../../components/HeroCard";
import { Heropage, ITraits } from "../../components/Heropage";
import { IAttributes, ILifepowers, ISkills } from "../../components/Heropage";

const HEROES_QUERY = gql`
  query {
    heroes {
      name
      imgUrl
      description
      backStory
      traits {
        resistance
        weakness
      }
      attributes {
        strength
        intelligence
        stamina
        agility
        speed
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

interface IHeroIndexProps {}

interface IHero {
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

const HeroCardContainer = styled.div`
  display: -webkit-flex;
  display: flex;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-flex-wrap: wrap;
  flex-wrap: wrap;
  margin-top: 15px;
  padding: 1.5%;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;

  @media (min-width: 1400px) {
    margin-left: auto;
    margin-right: auto;
  }
`;

const HeroPageContainer = styled.div`
  display: -webkit-flex;
  display: flex;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-flex-wrap: wrap;
  flex-wrap: wrap;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  @media (min-width: 1400px) {
    margin-left: auto;
    margin-right: auto;
  }
  color: white;
`;

const handleLoading = () => <div>Loading...</div>;

const handleError = (message: string) => <div>Error! {message}</div>;

export const HeroIndex: React.FC<IHeroIndexProps> = () => {
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

  const heroByName = name => heroes.find(hero => hero.name === name);

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

        <Heropage {...heroByName("Gideon")} />
        <Heropage {...heroByName("Porcu")} />
        <Heropage {...heroByName("Lisa McAllister")} />
      </HeroPageContainer>
      <Footer />
    </main>
  );
};
