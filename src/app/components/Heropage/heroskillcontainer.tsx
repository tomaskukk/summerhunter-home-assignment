import * as React from "react";
import styled from "styled-components";
import { ISkills } from "@componentsHeropage";
import { HeadingTwo, Paragraph } from "../Typography";
import { HeroSkill } from "./heroskill";
import { SectionHeading } from "./index";

interface ISkillContainerProps {
  skills: ISkills[];
}

interface IButtonProps {
  backgroundColor: string;
}

const HeroSkillRoot = styled.div`
  display: block;
  margin-top: 50px;
  max-width: 40%;
  min-width: 250px;
  @media (max-width: 768px) {
    width: 100%;
    margin: 0 auto;
    text-align: center;
  }
`;

const ShowSkill = styled.button`
  font-family: "Montserrat";
  color: #001147
  transition: all 0.3s ease 0s;
    padding: 10px;
  border: none;
  text-transform: uppercase;
  border-radius: 10px;
font-size: 15px;

  background-color: ${(props: IButtonProps) => props.backgroundColor};
`;

const ButtonText = styled(Paragraph)`
  color: black;
  margin: 0px;
  padding: 0px;
`;

export const HeroSkillContainer: React.FC<ISkillContainerProps> = props => {
  const [skillName, setSkillName] = React.useState("");
  React.useEffect(() => setSkillName(props.skills[0].name), [props.skills]);

  return (
    <HeroSkillRoot>
      <SectionHeading>{"Skills"}</SectionHeading>
      {props.skills.map((skill, i) => (
        <ShowSkill
          onClick={() => setSkillName(skill.name)}
          backgroundColor={skill.name === skillName ? "moccasin" : "white"}
          key={skill.name}
        >
          <ButtonText>{skill.name}</ButtonText>
        </ShowSkill>
      ))}
      <HeroSkill {...props.skills.find(skill => skill.name === skillName)} />
    </HeroSkillRoot>
  );
};
