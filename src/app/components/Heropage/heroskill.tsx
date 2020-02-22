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
  width: 100%;
`;

const SkillItem = styled(Paragraph)`
  font-size: 20px;
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
      <SkillItem>
        {"Damage: "} {damage}
      </SkillItem>

      <SkillItem>
        {"Element: "} {element}
      </SkillItem>
    </SkillContent>
  );
};
