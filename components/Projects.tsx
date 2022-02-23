import React from "react";
import styled from "styled-components";
import MainProject from "./MainProjectCard";

const Projects = () => {
  return (
    <Section>
      <Heading>Projects</Heading>
      <Content>
        <MainProject />
        <div>
          <article></article>
          <article></article>
          <article></article>
        </div>
      </Content>
    </Section>
  );
};

const Heading = styled.h2`
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 0.035em;
  padding-top: 64px;
  padding-bottom: 64px;

  color: var(--color-secondary);
  font-size: clamp(24px, calc(1.5rem + (48 - 24) * ((100vw - 700px) / (1062 - 700))), 48px);
  min-height: 0vw;
  font-weight: 500;
`;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Content = styled.div`
  /* width: 100%; */
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 64px;
`;

export default Projects;
