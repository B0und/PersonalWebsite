import * as React from "react";
import styled from "styled-components";
import { QUERIES } from "../helpers/constants";

const WrapperBorder: React.FC = ({ children }) => {
  return <BorderWrapper>{children}</BorderWrapper>;
};

export const BorderWrapper = styled.div`
  position: relative;
  border: 1px solid var(--color-border);

  height: fit-content;
  display: flex;
  flex-direction: column;

  --wrapper-padding: 64px;
  --square-size: 75px;

  @media ${QUERIES.tabletAndSmaller} {
    --wrapper-padding: 48px;
    --square-size: 40px;
  }

  @media ${QUERIES.phoneAndSmaller} {
    --wrapper-padding: 24px;
  }

  padding: var(--wrapper-padding);
  padding-top: calc(var(--wrapper-padding) - 12px);
  padding-bottom: calc(var(--wrapper-padding) - 12px);

  &:before {
    content: "";
    position: absolute;

    right: calc(var(--square-size) / -2);
    top: calc(var(--square-size) / -2);
    height: var(--square-size);
    width: var(--square-size);

    background-color: var(--color-background);
    transform: rotate(45deg);

    border-bottom: 1px solid var(--color-border);
  }

  &:after {
    content: "";
    position: absolute;

    left: calc(var(--square-size) / -2);
    bottom: calc(var(--square-size) / -2);
    height: var(--square-size);
    width: var(--square-size);

    background-color: var(--color-background);
    transform: rotate(45deg);

    border-top: 1px solid var(--color-border);
  }
`;
export default WrapperBorder;
