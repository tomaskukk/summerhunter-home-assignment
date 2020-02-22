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
  text-align: left;
  color: white;

  padding: 15px;

  max-width: 50%;
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
      {showBackStory ? backStory : null}
      <ShowMoreButton onClick={() => setShowBackStory(!showBackStory)}>
        {showBackStory ? "Show less" : "Show more"}
      </ShowMoreButton>
    </HeroStoryContainer>
  );
};
