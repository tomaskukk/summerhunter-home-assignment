// It is your job to implement this. More info in README

import * as React from "react";

interface IHeroCardProps {
  name: string;
  // extend this
}

export const HeroCard: React.FC<IHeroCardProps> = props => {
  console.log(props);
  return <div>{props.name}</div>;
};
