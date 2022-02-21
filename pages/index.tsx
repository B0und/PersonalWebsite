import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";
import About from "../components/About";
import Layout from "../components/Layout";
import NameCard from "../components/NameCard";
import MaxWidthWrapper from "../components/MaxWidthWrapper";
import Separator from "../components/Separator";
import Skills from "../components/Skills";
import WrapperBorder from "../components/WrapperBorder";

/**
 * Home: The Landing page of the web app
 * @return {JSX.Element} The JSX Code for the Home Page
 */
const Home: NextPage = () => {
  return (
    <MaxWidthWrapper>
      <Layout>
        <MainGrid>
          <NameCard />
          <Skills />
          <AboutSection>
            <About />
            <SpacedSeparator
              color="#ebebeb"
              subLineWidth="43%"
              subLineHeight="3px"
              lineSide="right"
            />
            <StatsTitle>website statistics</StatsTitle>
            <Image
              src="/graphic.svg"
              alt="Fake data display, but it looks cool"
              height={308}
              width={485}
            />
          </AboutSection>
        </MainGrid>
      </Layout>
    </MaxWidthWrapper>
  );
};

const MainGrid = styled.div`
  display: grid;
  grid-template-rows: 400px 1fr;
  grid-template-columns: 1fr 1fr;
  grid-template-areas:
    "name-card about"
    "skills about";

  column-gap: 64px;
  row-gap: 100px;

  margin-bottom: 64px;
`;

const AboutSection = styled(WrapperBorder)`
  grid-area: about;
`;

const SpacedSeparator = styled(Separator)`
  margin-top: 102px;
  margin-bottom: 86px;
  /* margin-bottom: auto; */
`;

const StatsTitle = styled.p`
  text-align: right;
  font-size: ${16 / 16}rem;
  text-transform: uppercase;

  letter-spacing: 0.21em;
  color: var(--color-border);
  /* margin-top: auto; */
  margin-bottom: 60px;
`;

export default Home;
