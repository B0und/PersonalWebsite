import React from "react";
import styled from "styled-components";
import { QUERIES } from "../helpers/constants";
import { BorderWrapper } from "./WrapperBorder";

const NameCard = () => {
  return (
    <CustomWrapper as="section">
      <Name>
        Vlad <br /> Moiseenko
      </Name>
      <IdText aria-hidden="true">id: l00k1n6f0r4fr0n73ndd3v3l0p3rj0b</IdText>
    </CustomWrapper>
  );
};

const CustomWrapper = styled(BorderWrapper)`
  white-space: nowrap;
  border: none;

  background: var(--color-primary);
  padding-left: 53px;

  &:before {
    border-bottom: 1px solid transparent;
  }
  &:after {
    border-top: 1px solid transparent;
  }

  @media ${QUERIES.tabletAndSmaller} {
    padding-left: 28px;
  }

  @media ${QUERIES.tabletAndSmaller} {
    padding-top: 22px;
    padding-bottom: 22px;
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
  font-size: clamp(36px, calc(2.25rem + (64 - 36) * ((100vw - 700px) / (1062 - 700))), 64px);
  min-height: 0vw;
  line-height: 100%;
  letter-spacing: 0.02em;

  background: inherit;
  color: var(--color-background);
`;
export default NameCard;
