import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";
import Layout from "../components/Layout";
import MainCard from "../components/MainCard";
import MaxWidthWrapper from "../components/MaxWidthWrapper";

/**
 * Home: The Landing page of the web app
 * @return {JSX.Element} The JSX Code for the Home Page
 */
const Home: NextPage = () => {
  return (
    <MaxWidthWrapper className="ml-auto mr-auto max-w-[1386px] pl-4 pr-4 ">
      <Layout>
        <MainCard />
      </Layout>
    </MaxWidthWrapper>
  );
};

export default Home;
