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
  /* height: 100%; */
`;

export default Layout;
