import React from "react";
import styled from "styled-components";
import { QUERIES } from "../helpers/constants";
import About from "./About";
import NameCard from "./NameCard";
import Separator from "./Separator";
import Skills from "./Skills";
import Stats from "./Stats";
import { BorderWrapper } from "./WrapperBorder";

const DesktopHeroLayout = () => {
  return (
    <HeroWrapper>
      <NameWrapper>
        <NameCard />
        <Skills />
      </NameWrapper>
      <AboutWrapper>
        <About />
        <SpacedSeparator color="#ebebeb" subLineWidth="43%" subLineHeight="3px" lineSide="right" />
        <StatsTitle>website statistics</StatsTitle>
        <Stats />
      </AboutWrapper>
    </HeroWrapper>
  );
};

const HeroWrapper = styled.div`
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
const AboutWrapper = styled(BorderWrapper)`
  display: flex;
  flex-direction: column;
`;

export default DesktopHeroLayout;
