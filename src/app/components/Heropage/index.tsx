// It is your job to implement this. More info in README

import * as React from "react";
import styled from "styled-components";
import { HeadingOne, Paragraph } from "../Typography";
import { ProgressBar } from "./progressbar";

interface IHeroPageProps {
  name: string;
  description: string;
  imgUrl: string;
}

interface IProps {
  imgUrl: string;
}

const HeroPageRootImg = styled.div`
  background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.95),
      rgba(0, 0, 0, 0.95)
    ),
    url(${(props: IProps) => props.imgUrl});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  z-index: 0;
  width: 100%;
`;

const Image = styled.div`
  background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0),
      rgba(0, 0, 0, 0.9)
    ),
    linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5)),
    linear-gradient(to left, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5)),
    url(${(props: IProps) => props.imgUrl});
  min-height: 750px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  margin-bottom: 100px auto;
  z-index: 0;
  min-width: 1000px;
  width: 80%;
  margin: 0 auto;
  @media (max-width: 768px) {
    max-height: 500px;
    min-height: 500px;
    width: 100%;
  }
`;

const HeroNameHeading = styled(HeadingOne)`
  color: white;
  bottom: 0;
  position: absolute;
  width: 100%;
  left: 0px;
`;

const BasicInformationDiv = styled.div`
  border: 2px white;
  display: inline-block;
  color: white;
`;

export const Heropage: React.FC<IHeroPageProps> = props => {
  console.table(props);

  return (
    <HeroPageRootImg imgUrl={props.imgUrl}>
      <Image imgUrl={props.imgUrl}>
        <HeroNameHeading>{props.name}</HeroNameHeading>
      </Image>
      <BasicInformationDiv>
        {["strength", "agility", "stamina", "speed", "intelligence"].map(
          attribute => (
            <ProgressBar
              attribute={attribute}
              width={props.attributes[attribute]}
            ></ProgressBar>
          )
        )}
      </BasicInformationDiv>
    </HeroPageRootImg>
  );
};
