import * as React from "react";
import styled from "styled-components";
import { HeadingOne, Paragraph } from "../Typography";
import { attributeEmojis } from "../HeroCard";

interface IProgressBarProps {
  width: number;
  attribute: string;
}

interface IProps {
  width: number;
}

const ProgressBarRoot = styled.div`
  position: relative;
  height: 20px;
  width: 150px;
  border-radius: 40px;
  border: 3px solid #333;
`;

const Filler = styled.div`
  height: 100%;
  background: #f9f9f9;
  border-radius: inherit;
  transition: width 0.2s ease-in;
  width: ${(props: IProps) => props.width}%;
`;

const ProgressBarTitle = styled(Paragraph)`
  color: white;
  margin: 0px;
  padding 0px;

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
