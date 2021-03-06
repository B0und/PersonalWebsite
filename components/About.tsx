import React from "react";
import styled from "styled-components";
import { FadeIn } from "../helpers/animations";
import { QUERIES } from "../helpers/constants";

const About = () => {
  return (
    <AboutSection>
      <Header>About</Header>
      <Text>
        I`m a Frontend developer based in Moscow. Currently focused on building fascinating web
        projects, learning new things and getting employed.
      </Text>
    </AboutSection>
  );
};

const Header = styled.h2`
  color: var(--color-secondary);
  font-size: clamp(24px, calc(1.5rem + (36 - 24) * ((100vw - 700px) / (1062 - 700))), 36px);
  min-height: 0vw;
  font-weight: 500;
  letter-spacing: 0.035em;

  text-transform: uppercase;
  padding-bottom: 20px;

  filter: drop-shadow(0 0 5px var(--color-secondary));
`;

const Text = styled.p`
  min-width: 35ch;
  font-size: clamp(14px, calc(0.875rem + (17 - 14) * ((100vw - 700px) / (1062 - 700))), 17px);
  min-height: 0vw;

  border-left: 2px solid var(--color-secondary);
  padding-left: 16px;

  @media ${QUERIES.tabletAndSmaller} {
    max-width: 30ch;
    min-width: 0;
  }

  @media ${QUERIES.phoneAndSmaller} {
    max-width: max-content;
  }
`;

const AboutSection = styled.section`
  animation: ${FadeIn} var(--fade-ease) var(--fade-duration) var(--fade-delay) both 1;
`;
export default About;
