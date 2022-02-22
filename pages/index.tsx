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
import DesktopHeroLayout from "../components/DesktopHeroLayout";
import PhoneHeroLayout from "../components/PhoneHeroLayout";

/**
 * Home: The Landing page of the web app
 * @return {JSX.Element} The JSX Code for the Home Page
 */
const Home: NextPage = () => {
  return (
    <MaxWidthWrapper>
      <Layout>
        <DesktopHeroLayout />
        <PhoneHeroLayout />
      </Layout>
    </MaxWidthWrapper>
  );
};

export default Home;
