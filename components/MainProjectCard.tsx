import Image from "next/image";
import React from "react";
import styled from "styled-components";
import { QUERIES } from "../helpers/constants";
import CornerWrapper from "./CornerWrapper";

const data = {
  title: "Wikipedia Speedrun Game",
  text: "The goal is simple: using links, navigate from one wiki article to another one, as fast as you can!",
  libraries: ["React", "Redux", "React-router", "Create React App", "Emotion", "Reach UI, Mantine"],
  imageUrl: "/vercel.svg",
};

const MainProject = () => {
  return (
    <Wrapper>
      <CornerWrapper
        as="article"
        cutTopLeftCorner={true}
        colorBorder="var(--color-border)"
        colorBackground="var(--color-background)"
        squareSize="var(--square-size)"
      >
        <PaddingDiv>
          <RowWrapper>
            <Content>
              <Title>{data.title}</Title>
              <Description>{data.text}</Description>
              <SubHeading>tech stack</SubHeading>
              <LibrariesList>
                {data.libraries.map((lib) => (
                  <li key={lib}>{lib}</li>
                ))}
              </LibrariesList>
            </Content>
            <Image src={data.imageUrl} width={50} height={50} alt="" />
          </RowWrapper>
          <ButtonWrapper>
            <CornerWrapper
              as="article"
              cutBottomLeftCorner={true}
              colorBorder="var(--color-secondary)"
              colorBackground="var(--color-background)"
              squareSize="20px"
              borderWidth="2px"
            >
              <CodeLink>&lt;github /&gt;</CodeLink>
            </CornerWrapper>
            <CornerWrapper
              as="article"
              cutBottomRightCorner={true}
              colorBorder="transparent"
              colorBackground="var(--color-background)"
              squareSize="20px"
            >
              <LiveLink>live &#8594;</LiveLink>
            </CornerWrapper>
          </ButtonWrapper>
        </PaddingDiv>
      </CornerWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  --square-size: 75px;

  @media ${QUERIES.tabletAndSmaller} {
    --square-size: 40px;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
`;

const RowWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const ButtonWrapper = styled.div`
  align-self: flex-end;
  margin-top: 35px;
  display: flex;
  flex-direction: row;
  gap: 64px;
`;

const PaddingDiv = styled.div`
  display: flex;
  flex-direction: column;
  background: inherit;
  padding: 52px 64px;

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
`;

const Title = styled.h2`
  /* text-align: center; */
  display: inline;
  vertical-align: middle;
  color: var(--color-primary);
  font-weight: 500;

  font-size: clamp(18px, calc(1.125rem + (24 - 18) * ((100vw - 700px) / (1062 - 700))), 24px);
  min-height: 0vw;

  margin-bottom: 25px;

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
  /* max-width: 40ch; */

  margin-bottom: 35px;
`;

const SubHeading = styled.h3`
  width: fit-content;
  background-color: var(--color-primary);
  color: #0f0f0f;
  font-size: ${18 / 16}rem;
  font-weight: 500;
  padding: 2px 15px;
  text-transform: uppercase;
  margin-bottom: 14px;
`;

const Link = styled.a`
  cursor: pointer;
  min-width: 132px;
  padding: 17px 12px;
  text-align: center;
  font-size: ${18 / 16}rem;
  font-weight: 500;
`;

const CodeLink = styled(Link)`
  transition: color 0.2s ease;
  transition: background-color 0.2s ease;

  &:hover {
    background: var(--color-secondary);
    color: black;
  }
`;

const LiveLink = styled(Link)`
  transition: color 0.2s ease;
  transition: background-color 0.2s ease;
  background: var(--color-primary);
  color: black;

  &:hover {
    background: #000000;
    color: var(--color-primary);
  }
`;
export default MainProject;
