import styled from "styled-components";
import { QUERIES } from "../helpers/constants";

const MaxWidthWrapper = styled.div`
  max-width: calc(1386 / 16 * 1rem);
  padding: 0 32px;
  margin: 0 auto;

  @media ${QUERIES.phoneAndSmaller} {
    padding: 0 16px;
  }
`;

export default MaxWidthWrapper;
