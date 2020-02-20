import * as React from "react";
import gql from "graphql-tag";
import { useQuery } from "react-apollo-hooks";
import styled from "styled-components";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { TopBar } from "../../components/TopBar";
import { Hero } from "../../components/Hero";
import { Section } from "../../components/Section";
import { Footer } from "../../components/Footer";
import { HeroCard } from "../../components/HeroCard";
import { Heropage } from "../../components/Heropage";

const HEROES_QUERY = gql`
  query {
    heroes {
      name
      imgUrl
      description
      backStory
      attributes {
        strength
        intelligence
        stamina
        agility
        speed
      }
      lifepowers {
        resistance
        weakness
        healthpoints
        mana
      }
      skills {
        name
        damage
        element
      }
    }
  }
`;

// interface IHeroIndexProps {

// }

interface IHero {
  name: string;
  imgUrl: string;
  description: string;
  attributes: object;
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

// display: flex;
//   padding: 50px;
//   align-self: center;
//   max-width: 1150px;
//   @media (min-width: 1400px) {
//     margin-left: auto;
//     margin-right: auto;
//   }

const handleLoading = () => <div>Loading...</div>;

const handleError = (message: string) => <div>Error! {message}</div>;

export const HeroIndex: React.FC<IHero> = () => {
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

  console.log(heroes);

  const heroByName = name => {
    console.log(
      name,
      heroes.map(hero => hero.name)
    );
    return heroes.find(hero => hero.name === name);
  };

  return (
    <Router>
      <main>
        <TopBar />
        <Hero />

        <Route
          exact
          path="/"
          render={() => (
            <HeroCardContainer>
              {heroes.map(hero => (
                <HeroCard key={hero.name} {...hero} />
              ))}
            </HeroCardContainer>
          )}
        />

        <Route
          exact
          path="/heros/:name"
          render={({ match }) => (
            <Heropage {...heroByName(match.params.name)} />
          )}
        />
        <Footer />
      </main>
    </Router>
  );
};
