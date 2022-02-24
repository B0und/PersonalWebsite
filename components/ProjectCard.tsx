import React from "react";
import styled from "styled-components";
import { QUERIES } from "../helpers/constants";
import CornerWrapper from "./CornerWrapper";

export interface IMainProjectProps {
  last?: boolean;
  projectInfo: {
    title: string;
    description: string;
    github: string;
    live: string;
  };
}

const ProjectCard: React.FC<IMainProjectProps> = ({ last = false, projectInfo }) => {
  return (
    <Wrapper>
      <CornerWrapper
        as="article"
        cutTopLeftCorner={last ? true : undefined}
        colorBorder="var(--color-border)"
        colorBackground="var(--color-background)"
        squareSize="var(--square-size)"
      >
        <PaddingDiv>
          <Title>{projectInfo.title}</Title>
          <Description>{projectInfo.description}</Description>

          <ButtonWrapper>
            <CodeLink href={projectInfo.github} target="_blank">
              github source &#8594;
            </CodeLink>

            <LiveLink href={projectInfo.live} target="_blank">
              view live &#8594;
            </LiveLink>
          </ButtonWrapper>
        </PaddingDiv>
      </CornerWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  min-width: 400px;
  --square-size: 75px;

  @media ${QUERIES.phoneAndSmaller} {
    min-width: auto;
  }
`;

const ButtonWrapper = styled.div`
  margin-top: 8px;
  display: flex;
  flex-direction: row;
  gap: 32px;

  @media ${QUERIES.tabletAndSmaller} {
    justify-content: space-between;
    gap: 8px;
    flex-wrap: wrap;
  }
`;

const PaddingDiv = styled.div`
  display: flex;
  flex-direction: column;
  background: inherit;
  gap: 16px;
  padding: 20px 28px;

  /* @media ${QUERIES.tabletAndSmaller} {
    padding: 36px 48px;
  }

  @media ${QUERIES.phoneAndSmaller} {
    padding: 24px 28px;
  } */
`;

const Title = styled.h2`
  display: inline;
  vertical-align: middle;
  color: var(--color-primary);
  font-weight: 600;

  font-size: clamp(16px, calc(1.125rem + (18 - 16) * ((100vw - 700px) / (1062 - 700))), 18px);
  min-height: 0vw;

  &::before {
    --size: 24px;
    content: "";
    display: inline-block;

    width: var(--size);
    height: calc(var(--size) / 4);
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
  max-width: 55ch;
`;

const Link = styled.a`
  font-family: "Roboto Mono", monospace;

  cursor: pointer;
  text-align: center;
  font-size: ${16 / 16}rem;
  font-weight: 500;
  padding-bottom: 2px;
  white-space: nowrap;
  border-bottom: 1px solid #999999;

  @media ${QUERIES.phoneAndSmaller} {
    font-size: ${14 / 16}rem;
  }
`;

const CodeLink = styled(Link)`
  border-bottom: 1px solid var(--color-secondary);

  &:hover,
  &:focus {
    transition: color 0.3s ease;
    transition: background-color 0.3s ease;
    background: var(--color-secondary);
    color: black;
  }
`;

const LiveLink = styled(Link)`
  color: var(--color-primary);

  &:hover,
  &:focus {
    transition: color 0.3s ease;
    transition: background-color 0.3s ease;
    background: var(--color-primary);
    color: black;
  }
`;
export default ProjectCard;
