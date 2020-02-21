import * as React from "react";
import styled from "styled-components";
import { IAttributes } from "./index";
import { ProgressBar } from "./progressbar";
import { Paragraph } from "../Typography";

interface IHerostoryProps {
  description: string;
  backStory: string;
}

const HeroStoryContainer = styled(Paragraph)`
  width: 50%;
  text-align: left;
  color: white;
  background: rgb(0, 0, 0);
  background: rgba(0, 0, 0, 0.7);
  padding: 15px;
  border-radius: 15px;
  border: 2px solid rgba(255, 255, 255, 0.5);
`;

const ShowMoreButton = styled.button`
  background: none;
  border: none;
  padding: 0px;
`;

export const HeroStory: React.FC<IHerostoryProps> = ({
  description,
  backStory
}) => {
  const [showBackStory, setShowBackStory] = React.useState(false);

  return (
    <HeroStoryContainer>
      {description}
      <br></br>
      {showBackStory ? backStory : null}
      <ShowMoreButton onClick={() => setShowBackStory(!showBackStory)}>
        {showBackStory ? "Show less" : "Show more"}
      </ShowMoreButton>
    </HeroStoryContainer>
  );
};