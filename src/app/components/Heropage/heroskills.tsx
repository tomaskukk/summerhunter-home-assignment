import * as React from "react";
import styled from "styled-components";
import { Paragraph, HeadingTwo } from "../Typography";

interface IHeroSkillsProps {
  damage: number;
  element: string;
  name: string;
}

const SkillContent = styled.div`
  display: block;
  margin: 10px;
`;

const SkillItem = styled(Paragraph)`
  display: block;
  color: white;
`;

const SkillTitle = styled(HeadingTwo)`
  color: white;
`;

export const HeroSkill: React.FC<IHeroSkillsProps> = ({
  name,
  damage,
  element
}) => {
  return (
    <SkillContent>
      <SkillTitle>{name}</SkillTitle>
      <SkillItem>
        {"Damage: "} {damage}
      </SkillItem>

      <SkillItem>
        {"Element: "} {element}
      </SkillItem>
    </SkillContent>
  );
};
