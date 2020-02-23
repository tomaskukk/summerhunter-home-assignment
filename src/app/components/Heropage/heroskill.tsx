import * as React from "react";
import styled from "styled-components";
import { Paragraph, HeadingTwo } from "../Typography";
import ReactTooltip from "react-tooltip";

interface IHeroSkillsProps {
  damage: number;
  element: string;
  description: string;
}

const SkillRootContainer = styled.div`
  display: inline-block;
  width: 100%;
`;

const SkillContentContainer = styled.div`
  display: inline-block;
`;

const SkillItemContainer = styled.div`
  display: inline-block;
`;

const SkillTitle = styled(HeadingTwo)`
  color: white;
`;

const SkillItemDescription = styled(Paragraph)`
  width: 65%;
  font-size: 20px;
  color: white;
  margin-top: 0px;
  padding-top: 0px;
`;

export const HeroSkill: React.FC<IHeroSkillsProps> = ({
  damage,
  element,
  description
}) => {
  return (
    <SkillRootContainer>
      <SkillContentContainer>
        <SkillItemContainer>
          <ReactTooltip />
          <SkillTitle data-tip={"Damage"}> 🔪 {damage}</SkillTitle>
          <SkillTitle data-tip={"Element"}>🔘 {element}</SkillTitle>
        </SkillItemContainer>
        <SkillItemDescription>{description}</SkillItemDescription>
      </SkillContentContainer>
    </SkillRootContainer>
  );
};
