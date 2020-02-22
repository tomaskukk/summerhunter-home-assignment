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

const ProgressContainer = styled.div`
  padding: 10px;
  display: block;
`;

const ProgressBarRoot = styled.div`
  position: relative;
  height: 20px;
  width: 150px;
  background: rgb(0, 0, 0);
  background: rgba(0, 0, 0, 0.7);
  border: 1px groove white;
  border-radius: 5px;
  margin: 0 auto;
  margin-bottom: 10px;
`;

const Filler = styled.div`
  height: 100%;
  background: #f9f9f9;
  border-radius: inherit;
  transition: width 0.2s ease-in;
  width: ${(props: IFillerProps) => props.width}%;
`;

const ProgressBarTitle = styled(Paragraph)`
  margin: 0px;
  padding 0px;
  color: white;
  text-align:center;
  text-transform: uppercase;
  font-size: 15px;
`;

const TitleSpan = styled.span`
  padding: 5px;
  border-radius: 15px;
`;

export const ProgressBar: React.FC<IProgressBarProps> = ({
  attribute,
  width
}) => {
  return (
    <ProgressContainer>
      <ProgressBarTitle>
        <TitleSpan>
          {attribute} {attributeEmojis[attribute]}
        </TitleSpan>
      </ProgressBarTitle>

      <ProgressBarRoot>
        <Filler width={width}></Filler>
      </ProgressBarRoot>
    </ProgressContainer>
  );
};
