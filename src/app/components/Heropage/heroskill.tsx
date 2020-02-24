import * as React from "react";
import styled from "styled-components";
import { Paragraph } from "../Typography";
import ReactTooltip from "react-tooltip";

interface IHeroSkillsProps {
  damage: number;
  element: string;
  description: string;
}

const SkillRootContainer = styled.div`
  display: inline-block;
  width: 100%;
  margin: 0 auto;
`;

const SkillItemContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
`;

const SkillTitle = styled(Paragraph)`
  font-size: 30px;
  color: white;
`;

const SkillItemDescription = styled(Paragraph)`
  font-size: 20px;
  color: white;
  margin-top: 0px;
  padding-top: 0px;
  @media (max-width: 768px) {
    margin: 0 auto;
  }
`;

export const HeroSkill: React.FC<IHeroSkillsProps> = ({
  damage,
  element,
  description
}) => {
  return (
    <SkillRootContainer>
      <SkillItemContainer>
        <ReactTooltip />
        <SkillTitle data-tip={"Element"}>🔘 {element}</SkillTitle>
        <SkillTitle data-tip={"Damage"}> 🔪 {damage}</SkillTitle>
      </SkillItemContainer>
      <SkillItemDescription>{description}</SkillItemDescription>
    </SkillRootContainer>
  );
};
