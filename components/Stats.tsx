import React from "react";
import styled from "styled-components";
import { FadeIn } from "../helpers/animations";
import { QUERIES } from "../helpers/constants";

const Stats = () => {
  return (
    <StyledImage
      src="/graphic.svg"
      alt="Fake data display, but it looks cool!"
      height={308}
      width={485}
    />
  );
};

const StyledImage = styled.img`
  animation: ${FadeIn} var(--fade-ease) var(--fade-duration) var(--fade-delay) both 1;

  @media ${QUERIES.tabletAndSmaller} {
    transform: rotate(-90deg);
    height: auto;
  }
`;

export default Stats;
