import React from "react";
import styled from "styled-components";
import { QUERIES } from "../helpers/constants";
import About from "./About";
import NameCard from "./NameCard";
import Skills from "./Skills";
import CornerWrapper from "./CornerWrapper";

const PhoneHeroLayout = () => {
  return (
    <HeroWrapper>
      <NameCard />
      <CornerWrapper
        squareSize="var(--square-size)"
        colorBorder="var(--color-border)"
        colorBackground="var(--color-background)"
        cutTopRightCorner={true}
        cutBottomLeftCorner={true}
      >
        <AboutWrapper>
          <About />
          <Skills />
        </AboutWrapper>
      </CornerWrapper>
    </HeroWrapper>
  );
};

const HeroWrapper = styled.div`
  --square-size: 75px;
  display: none;

  @media ${QUERIES.tabletAndSmaller} {
    --square-size: 40px;
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

const AboutWrapper = styled.div`
  background: inherit;
  /* padding: 52px 64px; */
  padding: 36px 48px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 48px;

  @media ${QUERIES.phoneAndSmaller} {
    padding: 24px 28px;

    display: flex;
    flex-direction: column;
    /* padding-top: 19px;
    padding-bottom: 26px; */
  }
`;

const PaddingDiv = styled.div`
  @media ${QUERIES.tabletAndSmaller} {
    padding: 36px 48px;
  }

  @media ${QUERIES.phoneAndSmaller} {
    padding: 24px 28px;
  }
`;

export default PhoneHeroLayout;
