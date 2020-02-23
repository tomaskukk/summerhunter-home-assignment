import * as React from "react";
import styled from "styled-components";
import { ISkills } from "@componentsHeropage";
import { HeadingTwo } from "../Typography";
import { HeroSkill } from "./heroskill";

interface ISkillContainerProps {
  skills: ISkills[];
}

interface IButtonProps {
  backgroundColor: string;
}

const HeroSkillRoot = styled.div`
  display: block;
  text-align: left;
  margin-top: 50px;
  min-width: 50%;
  width: 100%;
  margin: 10px;
`;

const ShowSkill = styled.button`
  font-family: "Montserrat";
  color: #001147
  transition: all 0.3s ease 0s;
  margin: 10px;
  padding: 20px;
  border-radius: 300px;
  border: none;
  background-color: ${(props: IButtonProps) => props.backgroundColor};
`;

const SkillHeading = styled(HeadingTwo)`
  color: white;
  width: 100%;
  margin-top: 25px;
  text-transform: uppercase;
`;

export const HeroSkillContainer: React.FC<ISkillContainerProps> = props => {
  const [skillName, setSkillName] = React.useState("");
  React.useEffect(() => setSkillName(props.skills[0].name), [props.skills]);

  return (
    <HeroSkillRoot>
      <SkillHeading>{"Skills"}</SkillHeading>
      {props.skills.map((skill, i) => (
        <ShowSkill
          onClick={() => setSkillName(skill.name)}
          backgroundColor={skill.name === skillName ? "moccasin" : "white"}
          key={skill.name}
        >
          {skill.name}
        </ShowSkill>
      ))}
      <HeroSkill {...props.skills.find(skill => skill.name === skillName)} />
    </HeroSkillRoot>
  );
};
