import React from "react";
import styled from "styled-components";
import { QUERIES } from "../helpers/constants";
import MainProjectCard from "./MainProjectCard";
import ProjectCard from "./ProjectCard";

const projectInfo = {
  title: "Wikipedia Speedrun Game",
  description:
    "The goal is simple: using links, navigate from one wiki article to another one, as fast as you can!",
  github: "https://github.com/B0und/WikiSpeedrun",
  live: "https://wikispeedrun.org/",
};

const Projects = () => {
  return (
    <Section>
      <Heading>Projects</Heading>
      <Content>
        <MainProjectCard />
        <ProjectWrapper>
          <ProjectCard projectInfo={projectInfo} />
          <ProjectCard projectInfo={projectInfo} />
          <ProjectCard projectInfo={projectInfo} />
        </ProjectWrapper>
      </Content>
    </Section>
  );
};

const Heading = styled.h2`
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 0.035em;
  padding-top: 96px;
  padding-bottom: 64px;

  color: var(--color-secondary);
  font-size: clamp(24px, calc(1.5rem + (48 - 24) * ((100vw - 700px) / (1062 - 700))), 48px);
  min-height: 0vw;
  font-weight: 500;

  @media ${QUERIES.tabletAndSmaller} {
    padding: 64px 0px;
  }

  @media ${QUERIES.phoneAndSmaller} {
    padding: 32px 0px;
  }
`;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  gap: 62px;

  /* direct children */
  & > * {
    flex: 1;
  }

  @media ${QUERIES.tabletAndSmaller} {
    gap: 16px;
  }

  @media ${QUERIES.phoneAndSmaller} {
    flex-direction: column;
  }
`;

const ProjectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 16px;
`;

export default Projects;
