import React from "react";
import styled from "styled-components";
import { QUERIES } from "../helpers/constants";
import { BorderWrapper } from "./WrapperBorder";

const NameCard = () => {
  return (
    <CustomWrapper>
      <Name>
        Vlad <br /> Moiseenko
      </Name>
      <IdText>id: l00k1n6f0r4fr0n73ndd3v3l0p3rj0b</IdText>
    </CustomWrapper>
  );
};

const CustomWrapper = styled(BorderWrapper)`
  white-space: nowrap;

  background: var(--color-primary-green);
  padding-left: 53px;

  @media ${QUERIES.tabletAndSmaller} {
    padding-left: 28px;
  }
`;

const IdText = styled.p`
  text-transform: uppercase;
  margin-top: 64px;

  font-size: clamp(0.25rem, calc(0.5rem + ((1vw - 3.75px) * 1.8462)), 0.875rem);
  min-height: 0vw; /* safari fluid bug fix */

  background: inherit;
  color: var(--color-background);
`;

const Name = styled.h1`
  font-size: clamp(2.25rem, calc(2.25rem + ((1vw - 3.75px) * 8.6154)), 4rem);
  min-height: 0vw; /* safari fluid bug fix */

  line-height: 100%;
  letter-spacing: 0.02em;

  background: inherit;
  color: var(--color-background);
`;
export default NameCard;
