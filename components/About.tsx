import React from "react";
import styled from "styled-components";

const About = () => {
  return (
    <Wrapper>
      <Header>About</Header>
      <Text>
        I`m a Frontend developer based in Moscow. Currently focused on building fascinating web
        projects, learning new things and getting employed.
      </Text>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  /* background: url("/border-all.svg") no-repeat;
  background-position: center;
  background-size: 100% 100%; */

  /* svg width / height */
  /* aspect-ratio: 669/772; */
  position: relative;

  border: 1px solid var(--color-border);

  height: fit-content;
  display: flex;
  flex-direction: column;

  padding: 36px;
  margin-top: 36px;

  max-width: 655px;

  &:before {
    --square-size: 75px;

    content: "";
    position: absolute;

    right: calc(var(--square-size) / -2);
    top: calc(var(--square-size) / -2);
    height: var(--square-size);
    width: var(--square-size);

    background-color: var(--color-background);
    transform: rotate(45deg);

    border-bottom: 1px solid var(--color-border);
  }

  &:after {
    --square-size: 75px;

    content: "";
    position: absolute;

    left: calc(var(--square-size) / -2);
    bottom: calc(var(--square-size) / -2);
    height: var(--square-size);
    width: var(--square-size);

    background-color: var(--color-background);
    transform: rotate(45deg);

    border-top: 1px solid var(--color-border);
  }
`;

const Header = styled.h2`
  color: var(--color-primary-red);
  font-size: ${48 / 16}rem;
  text-transform: uppercase;
  width: fit-content;
`;

const Text = styled.p`
  max-width: 45ch;
`;
export default About;
