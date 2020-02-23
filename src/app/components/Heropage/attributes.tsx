import * as React from "react";
import styled from "styled-components";
import { IAttributes, SectionHeading } from "./index";
import { ProgressBar } from "./progressbar";

interface IAttributesProps {
  attributes: IAttributes;
}

const AttributesDiv = styled.div`
  width: 30%;
  color: white;
  min-width: 250px;
  display: block;
  @media (max-width: 768px) {
    margin: 0 auto;
    text-align: center;
  }
`;

export const Attributes: React.FC<IAttributesProps> = ({ attributes }) => {
  return (
    <>
      <AttributesDiv>
        {["strength", "agility", "stamina", "speed", "intelligence"].map(
          attribute => (
            <ProgressBar
              key={attribute}
              attribute={attribute}
              width={attributes[attribute]}
            />
          )
        )}
      </AttributesDiv>
    </>
  );
};
