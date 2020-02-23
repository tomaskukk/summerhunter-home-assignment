import * as React from "react";
import styled from "styled-components";
import { Paragraph } from "../Typography";
import { attributeEmojis } from "../HeroCard";

interface IProgressBarProps {
  width: number;
  attribute: string;
}

interface IFillerProps {
  width: number;
}

const ProgressBarRoot = styled.div`
  position: relative;
  height: 20px;
  width: 200px;
  background: rgba(0, 0, 0, 0.7);
  border: 1px groove white;
  border-radius: 5px;
  margin-bottom: 10px;
  @media (max-width: 768px) {
    margin: 0 auto;
    text-align: center;
  }
`;

// Pass the attributes number as width
const Filler = styled.div`
  height: 100%;
  background: #f9f9f9;
  border-radius: inherit;
  transition: width 0.3s ease-in;
  width: ${(props: IFillerProps) => props.width}%;
`;

const ProgressBarTitle = styled(Paragraph)`
  margin: 0px;
  padding 0px;
  color: white;
  text-transform: uppercase;
  font-size: 20px;
`;

export const ProgressBar: React.FC<IProgressBarProps> = ({
  attribute,
  width
}) => {
  return (
    <>
      <ProgressBarTitle>
        {attribute} {attributeEmojis[attribute]}
      </ProgressBarTitle>
      <ProgressBarRoot>
        <Filler width={width}></Filler>
      </ProgressBarRoot>
    </>
  );
};
