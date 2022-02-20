import React from "react";
import styled from "styled-components";

const MainCard = () => {
  return (
    <Wrapper>
      <Name>
        Vlad <br /> Moiseenko
      </Name>
      <IdText>id: l00k1n6f0r4fr0n73ndd3v3l0p3rj0b</IdText>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: url("/main-card.svg") no-repeat;
  background-position: center;
  background-size: 100% 100%;

  max-width: 655px;

  display: flex;
  flex-direction: column;

  /* svg width / height */
  aspect-ratio: 655/300;
  margin-bottom: 16px;
`;

const IdText = styled.p`
  text-transform: uppercase;
  padding-left: 8%;
  padding-bottom: 8%;

  font-size: clamp(0.25rem, calc(0.5rem + ((1vw - 3.75px) * 1.8462)), 0.875rem);
  min-height: 0vw; /* safari fluid bug fix */

  background: inherit;
  color: var(--color-background);
`;

const Name = styled.h1`
  padding-top: 7%;
  padding-left: 8%;
  padding-bottom: 8.5%;

  font-size: clamp(2.25rem, calc(2.25rem + ((1vw - 3.75px) * 8.6154)), 4rem);
  min-height: 0vw; /* safari fluid bug fix */

  line-height: 100%;
  letter-spacing: 0.02em;

  background: inherit;
  color: var(--color-background);
`;
export default MainCard;
