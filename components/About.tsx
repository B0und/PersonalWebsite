import React from "react";
import styled from "styled-components";

const About = () => {
  return (
    <>
      <Header>About</Header>
      <Text>
        I`m a Frontend developer based in Moscow. Currently focused on building fascinating web
        projects, learning new things and getting employed.
      </Text>
    </>
  );
};

const Header = styled.h2`
  color: var(--color-primary-red);
  font-size: ${48 / 16}rem;
  text-transform: uppercase;
  width: fit-content;
  padding-bottom: 20px;
`;

const Text = styled.p`
  /* max-width: 50ch; */

  border-left: 2px solid var(--color-primary-red);
  padding-left: 16px;
`;
export default About;
