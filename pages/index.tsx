import type { NextPage } from "next";
import Layout from "../components/Layout";
import MaxWidthWrapper from "../components/MaxWidthWrapper";
import DesktopHeroLayout from "../components/DesktopHeroLayout";
import PhoneHeroLayout from "../components/PhoneHeroLayout";
import Projects from "../components/Projects";

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
        <Projects />
      </Layout>
    </MaxWidthWrapper>
  );
};

export default Home;
