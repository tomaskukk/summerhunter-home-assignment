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
  flex-wrap: wrap;
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
  text-align: center;
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
        <SkillTitle className="skill-element" data-tip={"Element"}>
          🔘 {element}
        </SkillTitle>
        <SkillTitle className="skill-damage" data-tip={"Damage"}>
          🔪 {damage}
        </SkillTitle>
      </SkillItemContainer>
      <SkillItemDescription className="skill-description">
        {description}
      </SkillItemDescription>
    </SkillRootContainer>
  );
};
