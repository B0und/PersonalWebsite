import * as React from "react";
import styled from "styled-components";

const WrapperBorder: React.FC = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

const Wrapper = styled.div`
  position: relative;

  border: 1px solid var(--color-border);

  height: fit-content;
  display: flex;
  flex-direction: column;

  padding: 36px;
  margin-top: 36px;

  max-width: 655px;

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
