import Script from "next/script";
import styled from "styled-components";
import Footer from "./Footer";
import Navbar from "./Navbar";


const Layout: React.FC = ({ children }) => {
  return (
    <>

      <Navbar />
      <StyledMain>{children}</StyledMain>
      <Footer />
    </>
  );
};
const StyledMain = styled.main`
  // due to rotated squares shenanigans
  overflow: hidden;
`;

export default Layout;
