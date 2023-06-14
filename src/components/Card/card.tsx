import React from "react";
import { CardWrapper } from "./card.styles";

interface CardProps {
  children: React.ReactNode;
}

const Card = ({ children }: CardProps) => {
  return <CardWrapper>{children}</CardWrapper>;
};

export default Card;
