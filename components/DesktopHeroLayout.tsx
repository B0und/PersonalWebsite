import React from "react";
import styled from "styled-components";
import { QUERIES } from "../helpers/constants";
import About from "./About";
import NameCard from "./NameCard";
import Separator from "./Separator";
import Skills from "./Skills";
import Stats from "./Stats";
import CornerWrapper from "./CornerWrapper";

const DesktopHeroLayout = () => {
  return (
    <HeroWrapper>
      <NameWrapper>
        <NameCard />
        <Skills />
      </NameWrapper>
      <CornerWrapper
        squareSize="var(--square-size)"
        cutTopRightCorner={true}
        cutBottomLeftCorner={true}
      >
        <PaddingDiv>
          <About />
          <SpacedSeparator
            color="#ebebeb"
            subLineWidth="45%"
            subLineHeight="3px"
            lineSide="right"
          />
          <StatsTitle>website statistics</StatsTitle>
          <Stats />
        </PaddingDiv>
      </CornerWrapper>
    </HeroWrapper>
  );
};

const HeroWrapper = styled.div`
  --square-size: 75px;

  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: 1fr;
  gap: 64px;

  @media ${QUERIES.tabletAndSmaller} {
    display: none;
  }
`;

const SpacedSeparator = styled(Separator)`
  margin-top: 102px;
  margin-bottom: 24px;
`;

const StatsTitle = styled.p`
  text-align: right;
  font-size: ${16 / 16}rem;
  text-transform: uppercase;

  letter-spacing: 0.21em;
  color: var(--color-border);
  margin-bottom: 60px;
`;

const NameWrapper = styled.div`
  min-width: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const PaddingDiv = styled.div`
  background: inherit;
  padding: 52px 64px;

  @media ${QUERIES.tabletAndSmaller} {
    padding: 36px 48px;
  }
`;

export default DesktopHeroLayout;
