import * as React from "react";
import styled from "styled-components";
import { IAttributes } from "./index";
import { ProgressBar } from "./progressbar";
import { Paragraph } from "../Typography";

interface IAttributesProps {
  attributes: IAttributes;
}

const AttributesDiv = styled.div`
  width: 40%;
  color: white;
  min-width: 250px;
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
