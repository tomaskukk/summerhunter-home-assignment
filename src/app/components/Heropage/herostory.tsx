import * as React from "react";
import styled from "styled-components";
import { Paragraph } from "../Typography";
import { SectionHeading } from "./index";

interface IHerostoryProps {
  description: string;
  backStory: string;
}

const HeroStoryContainer = styled(Paragraph)`
  width: 60%;
  text-align: left;
  color: white;
  padding: 15px;
  background: rgb(0, 0, 0);
  background: rgba(0, 0, 0, 0.5);
  border-radius: 15px;
  border: 2px solid rgba(255, 255, 255, 0.5);
  margin: 5px;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const ShowMoreButton = styled.button`
  background: none;
  border: none;
  padding: 0px;
  color: moccasin;
`;

export const HeroStory: React.FC<IHerostoryProps> = ({
  description,
  backStory
}) => {
  const [showBackStory, setShowBackStory] = React.useState(false);

  return (
    <>
      <HeroStoryContainer className="herostory">
        {description}
        {showBackStory ? backStory : null}
        <ShowMoreButton
          className="backstory-button"
          onClick={() => setShowBackStory(!showBackStory)}
        >
          {showBackStory ? "Show less" : "Show more"}
        </ShowMoreButton>
      </HeroStoryContainer>
    </>
  );
};
