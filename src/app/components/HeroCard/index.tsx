// It is your job to implement this. More info in README

import * as React from "react";
import styled from "styled-components";
import { Paragraph, HeadingTwo } from "../../components/Typography";
import { Route, Link, Redirect, withRouter } from "react-router-dom";

interface IHeroCardProps {
  name: string;
  description: string;
  imgUrl: string;
  attributes: object;
}

const HeroCardDiv = styled.div`
  padding: 15px;
  max-width: 400px;
`;

const HeroImg = styled.img`
  max-width: 100%;
  max-height: 400px;
  border-radius: 4px;
`;

const HeroHeading = styled(HeadingTwo)`
  text-align: center;
`;

const LinkToHeroPage = styled(Link)`
  color: #001147;
  font-family: "Montserrat";
  font-weight: 800;
`;

export const attributeEmojis = {
  strength: "💪",
  intelligence: "🧠",
  agility: "🤸",
  speed: "🏃",
  stamina: "🧘"
};
export const HeroCard: React.FC<IHeroCardProps> = ({
  name,
  imgUrl,
  description,
  attributes
}) => {
  const getHighestAttributeEmoji = () => {
    let attributesWithoutTypename = { ...attributes };
    delete attributesWithoutTypename["__typename"];
    const highest: string = Object.keys(
      attributesWithoutTypename
    ).reduce((a, b) =>
      attributesWithoutTypename[a] > attributesWithoutTypename[b] ? a : b
    );
    return attributeEmojis[highest];
  };

  // || "Something else to render if fetching description fails?"
  const firstSentenceFromDescription = description.split(".")[0];
  // const namePathWithoutWhiteSpaces = name.replace(/\s/g, "");

  return (
    <HeroCardDiv>
      <HeroHeading>
        {name} {getHighestAttributeEmoji()}
      </HeroHeading>
      <HeroImg src={imgUrl}></HeroImg>
      <Paragraph>{firstSentenceFromDescription}...</Paragraph>
      <LinkToHeroPage to={`/heroes/${name}`}>{"Show more"}</LinkToHeroPage>
    </HeroCardDiv>
  );
};
