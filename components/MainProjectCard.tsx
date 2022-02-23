import Image from "next/image";
import React from "react";
import styled from "styled-components";
import { QUERIES } from "../helpers/constants";
import CornerWrapper from "./CornerWrapper";

const data = {
  title: "Wikipedia Speedrun Game",
  text: "The goal is simple: using links, navigate from one wiki article to another one, as fast as you can!",
  libraries: ["React", "Redux", "React-router", "Create React App", "Emotion", "Reach UI, Mantine"],
  url: "/vercel.svg",
};

const MainProject = () => {
  return (
    <Wrapper>
      <CornerWrapper as="article" cutTopLeftCorner={true}>
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
            <Image src={data.url} width={50} height={50} alt="" />
          </RowWrapper>
          <ButtonWrapper>
            <button>code</button>
            <button>live</button>
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
  display: flex;
  flex-direction: row;
`;

const PaddingDiv = styled.div`
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

  font-size: clamp(18px, calc(1.125rem + (24 - 18) * ((100vw - 700px) / (1062 - 700))), 24px);
  min-height: 0vw;

  margin-bottom: 25px;

  &::before {
    --size: 36px;
    content: "";
    display: inline-block;
    /* vertical-align: -25%; */
    width: var(--size);
    height: var(--size);
    background: var(--color-primary);
    margin: auto 0;
    margin-right: 1rem;
    vertical-align: middle;
    /* transform: translateY(-50%); */

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
  color: black;
  font-size: ${18 / 16}rem;
  padding: 2px 15px;
  text-transform: uppercase;
  margin-bottom: 14px;
`;
export default MainProject;
