import React from "react";
import styled from "styled-components";

const MainCard = () => {
  return (
    <Wrapper
      className="relative flex max-w-2xl  flex-col 
        bg-[url('/main-card.svg')] bg-contain bg-no-repeat pt-16 text-mainbg"
    >
      <Name className=" pl-14 pt-7 pb-14 text-7xl">
        Vlad <br /> Moiseenko
      </Name>
      <IdText>id: l00k1n6f0r4fr0n73ndd3v3l0p3rj0b</IdText>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: url("/main-card.svg") no-repeat;
  /* color: #33bbd0; */
  background-size: 100% auto;
  /* max-width: 659px; */
  min-height: 0;
  width: auto;

  display: flex;
  flex-direction: column;

  /* svg width / height */
  aspect-ratio: 659/304;
`;

const IdText = styled.p`
  text-transform: uppercase;
  /* padding-bottom: 64px; */
  padding-left: 55px;

  font-size: ${14 / 16}rem;
  color: black;
`;

const Name = styled.h1`
  padding-top: 32px;
  padding-left: 55px;
  padding-bottom: 64px;

  font-size: ${64 / 16}rem;
  line-height: 100%;
  letter-spacing: 0.02em;
  color: black;
`;
export default MainCard;
