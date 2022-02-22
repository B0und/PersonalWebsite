import React from "react";
import styled from "styled-components";
import { QUERIES } from "../helpers/constants";
import About from "./About";
import NameCard from "./NameCard";
import Skills from "./Skills";
import { BorderWrapper } from "./WrapperBorder";

const PhoneHeroLayout = () => {
  return (
    <HeroWrapper>
      <NameCard />
      <AboutWrapper>
        <About />
        <Skills />
      </AboutWrapper>
    </HeroWrapper>
  );
};

const HeroWrapper = styled.div`
  display: none;

  @media ${QUERIES.tabletAndSmaller} {
    display: flex;
    flex-direction: column;
    gap: 64px;
  }

  @media ${QUERIES.phoneAndSmaller} {
    display: flex;
    flex-direction: column;
    gap: 32px;
  }
`;

const AboutWrapper = styled(BorderWrapper)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 48px;

  @media ${QUERIES.phoneAndSmaller} {
    display: flex;
    flex-direction: column;
    padding-top: 19px;
    padding-bottom: 26px;
  }
`;

export default PhoneHeroLayout;
