import * as React from "react";
import styled from "styled-components";
import { HeadingTwo } from "../Typography";
import ReactTooltip from "react-tooltip";

interface IHeroElementsProps {
  resistance: string;
  weakness: string;
}

const elementEmojis = {
  Fire: "🔥",
  Air: "🌪️",
  Water: "🌊"
};

const ElementsRoot = styled.div`
  width: 50%;
  margin-top: 50px;
`;
const ElementHeading = styled(HeadingTwo)`
  color: white;
  width: 100%;
  text-transform: uppercase;
  font-style: italic;
  text-align: center;
  margin-top: 25px;
`;

const ElementsDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const ElementItemHeading = styled(HeadingTwo)`
  display: inline-block;
  margin: 10px;
  color: white;
  margin: 0 auto;
`;

const ElementItem = styled.div`
  display: inline-block;
  margin: 0 auto;
`;

const ElementItemEmoji = styled(HeadingTwo)`
  text-align: center;
  font-size: 150px;
`;

export const HeroElements: React.FC<IHeroElementsProps> = ({
  resistance,
  weakness
}) => {
  console.log(resistance, weakness);
  return (
    <ElementsRoot>
      <ReactTooltip />

      <ElementHeading>{"Traits"}</ElementHeading>
      <ElementsDiv>
        <ElementItem>
          <ElementItemHeading>{"Resistance"}</ElementItemHeading>
          <ElementItemEmoji data-tip={resistance}>
            {elementEmojis[resistance]}
          </ElementItemEmoji>
        </ElementItem>
        <ElementItem>
          <ElementItemHeading>{"Weakness"}</ElementItemHeading>
          <ElementItemEmoji data-tip={weakness}>
            {elementEmojis[weakness]}
          </ElementItemEmoji>
        </ElementItem>
      </ElementsDiv>
    </ElementsRoot>
  );
};
