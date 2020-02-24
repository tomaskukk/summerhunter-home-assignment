// It is your job to implement this. More info in README

import * as React from "react";
import styled from "styled-components";
import { Paragraph, HeadingTwo } from "../../components/Typography";
import { Link } from "react-router-dom";
import { IAttributes } from "../Heropage";

interface IHeroCardProps {
  name: string;
  description: string;
  imgUrl: string;
  attributes: IAttributes;
}

export const attributeEmojis = {
  strength: "💪",
  intelligence: "🧠",
  agility: "🤸",
  speed: "🏃",
  stamina: "🧘"
};

const HeroCardDiv = styled.div`
  padding: 15px;
  max-width: 400px;
`;

const HeroImg = styled.img`
  max-width: 100%;
  max-height: 400px;
  border-radius: 4px;
  -webkit-transform: scale(1);
  transform: scale(1);
  -webkit-transition: 0.5s ease-in-out;
  transition: 0.3s ease-in-out;
  :hover {
    -webkit-transform: scale(0.97);
    transform: scale(0.97);
  }
`;

const HeroHeading = styled(HeadingTwo)`
  text-align: center;
`;

const LinkToHeroPage = styled(Link)`
  color: #001147;
  font-family: "Montserrat";
  font-weight: 800;
`;

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

  const firstSentenceFromDescription = description.split(".")[0] || "";

  return (
    <HeroCardDiv>
      <HeroHeading>
        {name} {getHighestAttributeEmoji()}
      </HeroHeading>
      <HeroImg src={imgUrl}></HeroImg>
      <Paragraph>{firstSentenceFromDescription}...</Paragraph>
      <LinkToHeroPage className={`${name}-herolink`} to={`/heroes/${name}`}>
        {"Show more"}
      </LinkToHeroPage>
    </HeroCardDiv>
  );
};
