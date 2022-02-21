import React from "react";
import styled from "styled-components";
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
          <SubHeader>programming languages</SubHeader>
        </SubHeaderWrapper>
      </HeadingWrapper>

      <Separator color="#ebebeb" subLineWidth="120px" subLineHeight="3px" lineSide="left" />

      <Content>
        <SkillGrid>
          {languages.map((language) => (
            <Item key={language}>{language}</Item>
          ))}
        </SkillGrid>

        <Border />
        <Border />

        <SubHeader>Libraries & frameworks</SubHeader>
        <SkillGrid>
          {libraries.map((library) => (
            <Item key={library}>{library}</Item>
          ))}
        </SkillGrid>
      </Content>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  grid-area: skills;

  display: flex;
  flex-direction: column;
  max-width: fit-content;
  padding-left: 8%;
`;
const HeadingWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Title = styled.h2`
  font-size: ${48 / 16}rem;
  color: var(--color-primary-green);
  text-transform: uppercase;
`;

const SubHeader = styled.p`
  font-size: ${16 / 16}rem;
  letter-spacing: 0.07em;
  text-transform: uppercase;
  color: var(--color-primary-red);
  font-weight: 500;
`;

const GraySubHeader = styled.p`
  font-size: ${16 / 16}rem;
  letter-spacing: 0.07em;
  text-transform: uppercase;
  font-weight: 500;

  color: var(--color-border);
`;

const SubHeaderWrapper = styled.div`
  margin-left: 64px;
`;

const Content = styled.div`
  margin-left: 187px;
`;
const SkillGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 9px;

  margin-top: 18px;
  margin-bottom: 24px;
`;

const Item = styled.p`
  font-size: ${14 / 16}rem;
  font-weight: 500px;

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
