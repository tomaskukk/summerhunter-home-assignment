// It is your job to implement this. More info in README

import * as React from "react";
import styled from "styled-components";

interface IHeroPageProps {
  name: string;
  description: string;
  imgUrl: string;
}

const Image = styled.div`
  background-image: url(${props => props.imgUrl});
  min-height: 580px;
  height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  max-width: 1100px;
  margin: 0 auto;
  z-index: 0;
  @media (max-width: 768px) {
    max-height: 500px;
    min-height: 500px;
  }
`;

export const Heropage: React.FC<IHeroPageProps> = ({
  imgUrl,
  name,
  description
}) => {
  console.log(name);

  return <Image imgUrl={imgUrl}></Image>;
};
