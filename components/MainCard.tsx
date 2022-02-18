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
  height: 100%;
  min-height: 0;
  width: auto;

  display: flex;
  flex-direction: column;

  /* svg width / height */
  aspect-ratio: 655/300;
  margin-bottom: 16px;
`;

const IdText = styled.p`
  text-transform: uppercase;
  /* padding-bottom: 64px; */
  padding-left: 8%;
  padding-bottom: 8%;

  /* font-size: ${14 / 16}rem; */
  font-size: clamp(8px, calc(0.5rem + ((1vw - 3.75px) * 1.8462)), 14px);
  min-height: 0vw;

  background: inherit;
  color: var(--color-background);
`;

const Name = styled.h1`
  /* padding-top: 32px; */
  /* padding-left: 55px; */
  /* padding-bottom: 64px; */
  padding-top: 7%;
  padding-left: 8%;
  padding-bottom: 8.5%;

  /* font-size: ${64 / 16}rem; */
  font-size: clamp(36px, calc(2.25rem + ((1vw - 3.75px) * 8.6154)), 64px);
  min-height: 0vw;

  line-height: 100%;
  letter-spacing: 0.02em;

  background: inherit;
  color: var(--color-background);
`;
export default MainCard;
