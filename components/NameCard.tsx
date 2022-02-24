import React from "react";
import styled, { css } from "styled-components";
import { QUERIES } from "../helpers/constants";
import CornerWrapper from "./CornerWrapper";

const NameCard = () => {
  return (
    <Wrapper>
      <CornerWrapper
        as="section"
        squareSize="var(--square-size)"
        cutBottomLeftCorner={true}
        cutTopRightCorner={true}
        colorBorder="transparent"
        colorBackground="var(--color-background)"
      >
        <PaddingDiv>
          <Name>
            Vlad <br /> Moiseenko
          </Name>
          <IdText aria-hidden="true">id: l00k1n6f0r4fr0n73ndd3v3l0p3rj0b</IdText>
        </PaddingDiv>
      </CornerWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  --square-size: 75px;
  --card-bg: var(--color-primary);

  @media ${QUERIES.tabletAndSmaller} {
    --square-size: 40px;
  }
`;

const IdText = styled.p`
  font-family: "Roboto Mono", monospace;

  text-transform: uppercase;
  margin-top: 64px;

  font-size: clamp(4px, calc(2.25rem + (12 - 4) * ((100vw - 700px) / (1062 - 700))), 12px);
  min-height: 0vw; /* safari fluid bug fix */

  background: inherit;
  color: var(--color-background);
`;

const Name = styled.h1`
  font-size: clamp(36px, calc(2.25rem + (64 - 36) * ((100vw - 700px) / (1062 - 700))), 64px);
  min-height: 0vw;
  line-height: 100%;
  letter-spacing: 0.02em;
  white-space: nowrap;

  background: inherit;
  color: var(--color-background);
`;

const PaddingDiv = styled.div`
  background: var(--color-primary);
  padding: 52px 64px;

  @media ${QUERIES.tabletAndSmaller} {
    padding: 36px 48px;
  }

  @media ${QUERIES.phoneAndSmaller} {
    padding: 24px 28px;
  }
`;

export default NameCard;
