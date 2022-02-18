import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";

const Hello = styled.div`
  color: red;
`;
const Home: NextPage = () => {
  return <Hello>hello</Hello>;
};

export default Home;
