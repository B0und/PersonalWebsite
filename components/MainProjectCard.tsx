import React from "react";
import styled from "styled-components";
import { FadeIn } from "../helpers/animations";
import { QUERIES } from "../helpers/constants";
import { mainProject } from "../helpers/data";
import CornerWrapper from "./CornerWrapper";

const MainProjectCard = () => {
  return (
    <Wrapper>
      <CornerWrapper
        style={{ height: "100%" }}
        as="article"
        cutTopLeftCorner={true}
        colorBorder="var(--color-border)"
        colorBackground="var(--color-background)"
        squareSize="var(--square-size)"
      >
        <PaddingDiv>
          <Content>
            <ContentSpacing>
              <Title>{mainProject.title}</Title>
              <Description>{mainProject.text}</Description>
            </ContentSpacing>
            <ContentSpacing>
              <SubHeading>tech stack</SubHeading>
              <LibrariesList>
                {mainProject.libraries.map((lib) => (
                  <li key={lib}>{lib}</li>
                ))}
              </LibrariesList>
            </ContentSpacing>

            <ButtonWrapper>
              <CornerWrapper
                cutBottomLeftCorner={true}
                colorBorder="var(--color-secondary)"
                colorBackground="var(--color-background)"
                squareSize="20px"
                borderWidth="2px"
              >
                <CodeLink href={mainProject.github} target="_blank">
                  &lt;github /&gt;
                </CodeLink>
              </CornerWrapper>
              <CornerWrapper
                cutBottomRightCorner={true}
                colorBorder="transparent"
                colorBackground="var(--color-background)"
                squareSize="20px"
              >
                <LiveLink href={mainProject.live} target="_blank">
                  live &#8594;
                </LiveLink>
              </CornerWrapper>
            </ButtonWrapper>
          </Content>
        </PaddingDiv>
      </CornerWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  min-width: 450px;
  --square-size: 75px;

  @media ${QUERIES.tabletAndSmaller} {
    --square-size: 40px;
  }

  @media ${QUERIES.phoneAndSmaller} {
    min-width: auto;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 100%;
`;

const ContentSpacing = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;

  @media ${QUERIES.phoneAndSmaller} {
    gap: 16px;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 64px;

  margin-top: 35px;

  @media ${QUERIES.phoneAndSmaller} {
    flex-wrap: wrap;
    gap: 16px;
  }
`;

const PaddingDiv = styled.div`
  height: 100%;

  display: flex;
  flex-direction: column;
  background: inherit;
  padding: 52px 64px;

  animation: ${FadeIn} var(--fade-ease) var(--fade-duration) var(--fade-delay) both 1;

  @media ${QUERIES.tabletAndSmaller} {
    padding: 36px 48px;
  }

  @media ${QUERIES.phoneAndSmaller} {
    padding: 24px 28px;
  }
`;

const LibrariesList = styled.ul`
  columns: 2;
  width: fit-content;
  margin-left: -22px;

  @media ${QUERIES.phoneAndSmaller} {
    font-size: ${14 / 16}rem;
  }
`;

const Title = styled.h2`
  display: inline;
  vertical-align: middle;
  color: var(--color-primary);
  font-weight: 600;
  white-space: nowrap;

  font-size: clamp(18px, calc(1.125rem + (24 - 18) * ((100vw - 700px) / (1062 - 700))), 24px);
  min-height: 0vw;

  @media ${QUERIES.phoneAndSmaller} {
    white-space: normal;
  }

  &::before {
    --size: 36px;
    content: "";
    display: inline-block;

    width: var(--size);
    height: var(--size);
    background: var(--color-primary);
    margin: auto 0;
    margin-right: 1rem;
    vertical-align: middle;

    @media ${QUERIES.phoneAndSmaller} {
      --size: 16px;
    }
  }
`;

const Description = styled.p`
  font-size: clamp(14px, calc(0.875rem + (16 - 14) * ((100vw - 700px) / (1062 - 700))), 16px);
  min-height: 0vw;
  max-width: 45ch;

  margin-bottom: 35px;
`;

const SubHeading = styled.h3`
  width: fit-content;
  background-color: var(--color-primary);
  font-family: "Roboto Mono", monospace;
  color: #0f0f0f;
  font-size: ${18 / 16}rem;
  font-weight: 500;
  padding: 6px 15px;
  text-transform: uppercase;

  @media ${QUERIES.phoneAndSmaller} {
    font-size: ${16 / 16}rem;
  }
`;

const Link = styled.a`
  font-family: "Roboto Mono", monospace;

  cursor: pointer;
  min-width: 132px;
  text-align: center;
  font-size: ${18 / 16}rem;
  font-weight: 500;

  padding: 18px 12px;

  @media ${QUERIES.phoneAndSmaller} {
    min-width: 100px;
    padding: 12px 8px;
    font-size: ${14 / 16}rem;
  }
`;

const CodeLink = styled(Link)`
  &:hover,
  &:focus {
    transition: color 0.3s ease;
    transition: background-color 0.3s ease;
    background: var(--color-secondary);
    color: black;
  }
`;

const LiveLink = styled(Link)`
  background: var(--color-primary);
  color: black;

  &:hover,
  &:focus {
    transition: color 0.3s ease;
    transition: background-color 0.3s ease;
    background: #000000;
    color: var(--color-primary);
  }
`;
export default MainProjectCard;
