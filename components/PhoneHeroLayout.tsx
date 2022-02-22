import Image from "next/image";
import React from "react";
import styled from "styled-components";
import { QUERIES } from "../helpers/constants";
import About from "./About";
import NameCard from "./NameCard";
import Separator from "./Separator";
import Skills from "./Skills";
import Stats from "./Stats";
import WrapperBorder, { BorderWrapper } from "./WrapperBorder";

const PhoneHeroLayout = () => {
  return (
    <HeroWrapper>
      <NameCard />
      <AboutWrapper>
        <About />
        <StyledSkills />
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
`;

const AboutWrapper = styled(BorderWrapper)`
  /* flex: 1 1 auto; */
  /* min-width: 0; */
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  height: auto;
  /* display: grid;
  grid-auto-flow: column;
  grid-auto-columns: 1fr; */
  gap: 32px;
`;

const StyledSkills = styled(Skills)`
  padding-left: 0px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 64px;
`;
export default PhoneHeroLayout;
