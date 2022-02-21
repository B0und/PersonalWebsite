import * as React from "react";
import styled from "styled-components";

const WrapperBorder: React.FC = ({ children }) => {
  return <BorderWrapper>{children}</BorderWrapper>;
};

export const BorderWrapper = styled.div`
  position: relative;

  border: 1px solid var(--color-border);

  /* min-width: 0; */
  height: fit-content;
  display: flex;
  flex-direction: column;

  --wrapper-padding: 64px;
  padding: var(--wrapper-padding);
  padding-top: calc(var(--wrapper-padding) - 12px);
  padding-bottom: calc(var(--wrapper-padding) - 12px);

  /* max-width: 655px; */
  /* height: fit-content; */

  &:before {
    --square-size: 75px;

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
    --square-size: 75px;

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
