import React from "react";
import styled from "styled-components";
import { QUERIES } from "../helpers/constants";
import Separator from "./Separator";

const languages = ["Javascript", "HTML", "Typescript", "CSS", "Python"];
const libraries = ["React", "Styled components", "Next.js", "Emotion", "React-router", "...rest"];

const Skills = () => {
  return (
    <Wrapper>
      <HeadingWrapper>
        <Title>tech</Title>
        <SubHeaderWrapper>
          <GraySubHeader>data</GraySubHeader>
          <SubHeader as="h3">programming languages</SubHeader>
        </SubHeaderWrapper>
      </HeadingWrapper>

      <Separator
        color="#ebebeb"
        subLineWidth="var(--subLineWidth)"
        subLineHeight="3px"
        lineSide="left"
      />

      <Content>
        <SkillGrid>
          {languages.map((language) => (
            <Item key={language}>{language}</Item>
          ))}
        </SkillGrid>

        <Border />
        <Border />

        <SubHeader as="h3">Libraries & frameworks</SubHeader>
        <SkillGrid>
          {libraries.map((library) => (
            <Item key={library}>{library}</Item>
          ))}
        </SkillGrid>
      </Content>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  --subLineWidth: 120px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  padding-left: 8%;

  @media ${QUERIES.tabletAndSmaller} {
    padding-left: 0px;
    --subLineWidth: 60px;
  }
`;
const HeadingWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 4rem;

  width: 100%;
  padding-right: 1rem;

  @media ${QUERIES.tabletAndSmaller} {
    padding-right: 0rem;
    align-items: baseline;
  }

  @media ${QUERIES.phoneAndSmaller} {
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 0.5rem;

    padding-right: 0;
  }
`;

const Title = styled.h2`
  font-size: clamp(24px, calc(1.5rem + (48 - 24) * ((100vw - 700px) / (1062 - 700))), 48px);
  min-height: 0vw; /* safari fix */

  color: var(--color-primary);
  text-transform: uppercase;
`;

const SubHeader = styled.p`
  font-size: clamp(12px, calc(0.75rem + (16 - 12) * ((100vw - 700px) / (1062 - 700))), 16px);
  min-height: 0vw;

  letter-spacing: 0.07em;
  text-transform: uppercase;
  color: var(--color-secondary);
  font-weight: 500;
  white-space: nowrap;

  @media ${QUERIES.tabletAndSmaller} {
    text-align: right;
    padding-left: 0px;
    --subLineWidth: 60px;
  }

  @media ${QUERIES.phoneAndSmaller} {
    text-align: right;
    margin-left: auto;
  }
`;

const GraySubHeader = styled.p`
  font-size: ${16 / 16}rem;
  letter-spacing: 0.07em;
  text-transform: uppercase;
  font-weight: 500;

  color: var(--color-border);

  @media ${QUERIES.tabletAndSmaller} {
    display: none;
  }
`;

const SubHeaderWrapper = styled.div`
  margin-left: auto;

  @media ${QUERIES.tabletAndSmaller} {
  }

  @media ${QUERIES.phoneAndSmaller} {
    margin-left: 0;
  }
`;

const Content = styled.div`
  align-self: flex-end;

  @media ${QUERIES.tabletAndSmaller} {
    margin-left: 0;
  }

  @media ${QUERIES.phoneAndSmaller} {
    width: 100%;
  }
`;
const SkillGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 9px;

  margin-top: 18px;

  &:not(:last-child) {
    margin-bottom: 24px;
  }
`;

const Item = styled.p`
  font-size: ${14 / 16}rem;
  font-weight: 500px;
  white-space: nowrap;

  &:nth-child(even) {
    text-align: right;
  }
`;

const Border = styled.span`
  display: block;
  width: 100%;
  height: 1px;
  border-top: 1px solid var(--color-border);
  margin: 5px 0;

  &:last-of-type {
    margin-bottom: 18px;
  }
`;

export default Skills;
