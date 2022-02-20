import styled, { css } from "styled-components";

export interface ISeparatorProps {
  color: string;
  subLineWidth: string;
  subLineHeight: string;
  lineSide: "left" | "right";
}
/**
 * Separator component
 *
 * @param color - For example: "#fff"
 * @param subLineWidth - Thicker line at the bottom left. Example: "35px"
 * @param subLineHeight - height of sub line. Ex: "5px"
 * @param lineSide - Show the sub line on left or right
 * @returns styled span
 *
 */
const Separator = styled.span<ISeparatorProps>`
  --main-border-height: 1px;
  --border-color: ${(p) => p.color};
  --border-width: ${(p) => p.subLineWidth};
  --border-height: ${(p) => p.subLineHeight};

  display: block;
  position: relative;

  border-top: var(--main-border-height) solid var(--border-color);
  height: calc(var(--border-height) + var(--main-border-height));
  width: 100%;

  &::before {
    content: "";
    background-color: var(--border-color);

    height: var(--border-height);
    width: var(--border-width);

    position: absolute;

    top: 0;

    ${(props) =>
      props.lineSide === "left" &&
      css`
        left: 0;
      `}

    ${(props) =>
      props.lineSide === "right" &&
      css`
        right: 0;
      `}
  }

  &::after {
    content: "";
    position: absolute;

    top: 0;

    ${(props) =>
      props.lineSide === "left" &&
      css`
        left: var(--border-width);

        border-right: var(--border-height) solid transparent;
        border-top: var(--border-height) solid var(--border-color);
      `}

    ${(props) =>
      props.lineSide === "right" &&
      css`
        right: var(--border-width);

        border-left: var(--border-height) solid transparent;
        border-top: var(--border-height) solid var(--border-color);
      `}
  }
`;
export default Separator;
