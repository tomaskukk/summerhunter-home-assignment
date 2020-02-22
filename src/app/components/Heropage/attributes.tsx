import * as React from "react";
import styled from "styled-components";
import { IAttributes } from "./index";
import { ProgressBar } from "./progressbar";
import { Paragraph, HeadingTwo } from "../Typography";

interface IAttributesProps {
  attributes: IAttributes;
}

const AttributesDiv = styled.div`
  color: white;
  width: 40%;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
`;

export const Attributes: React.FC<IAttributesProps> = ({ attributes }) => {
  return (
    <AttributesDiv>
      {["strength", "agility", "stamina", "speed", "intelligence"].map(
        attribute => (
          <ProgressBar
            key={attribute}
            attribute={attribute}
            width={attributes[attribute]}
          ></ProgressBar>
        )
      )}
    </AttributesDiv>
  );
};
