import * as React from "react";
import styled from "styled-components";
import { ISkills } from "../../views/HeroIndex";
import { Paragraph } from "../Typography";
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
  width: 40%;
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

const ButtonContainer = styled.div`
  text-align: center;
`;

const ButtonText = styled(Paragraph)`
  color: black;
  margin: 0px;
  padding: 0px;
`;

export const HeroSkillContainer: React.FC<ISkillContainerProps> = ({
  skills
}) => {
  const [skillName, setSkillName] = React.useState("");
  React.useEffect(() => setSkillName(skills[0].name), [skills]);

  return (
    <HeroSkillRoot>
      <SectionHeading>{"Skills"}</SectionHeading>
      <ButtonContainer>
        {skills.map(skill => (
          <ShowSkill
            className={`${skill.name}-button`}
            onClick={() => setSkillName(skill.name)}
            backgroundColor={skill.name === skillName ? "moccasin" : "white"}
            key={skill.name}
          >
            <ButtonText>{skill.name}</ButtonText>
          </ShowSkill>
        ))}
      </ButtonContainer>
      <HeroSkill {...skills.find(skill => skill.name === skillName)} />
    </HeroSkillRoot>
  );
};
