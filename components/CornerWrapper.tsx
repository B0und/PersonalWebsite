import * as React from "react";
import styled from "styled-components";
import { CornerHeightAnim, CornerWidthAnim, SideAnim } from "../helpers/animations";

export interface ICornerWrapperProps {
  as?: string | React.ComponentType<any>;
  style?: object;

  cutTopLeftCorner?: boolean;
  cutTopRightCorner?: boolean;
  cutBottomLeftCorner?: boolean;
  cutBottomRightCorner?: boolean;

  squareSize: string;
  colorBorder: string;
  colorBackground: string;
  borderWidth?: string;

  children?: React.ReactNode;
}

const CornerWrapper: React.FC<ICornerWrapperProps> = (props) => {
  return (
    <BorderWrapper<any>
      style={props.style}
      as={props.as}
      squareSize={props.squareSize}
      colorBorder={props.colorBorder}
      colorBackground={props.colorBackground}
      borderWidth={props.borderWidth}
    >
      {props.children}
      {props.cutTopLeftCorner && <TopLeftCorner<any> />}
      {props.cutTopRightCorner && <TopRightCorner<any> />}
      {props.cutBottomLeftCorner && <BottomLeftCorner<any> />}
      {props.cutBottomRightCorner && <BottomRightCorner<any> />}
    </BorderWrapper>
  );
};

const BorderWrapper = styled.div<ICornerWrapperProps>`
  overflow: hidden;

  --size: ${(p) => p.squareSize};
  --border-clr: ${(p) => p.colorBorder};
  --background-clr: ${(p) => p.colorBackground};
  --border-width: ${(p) => p.borderWidth || "1px"};

  position: relative;
  display: flex;
  flex-direction: column;

  &::before,
  &::after {
    pointer-events: none;
    content: "";
    position: absolute;
    width: 0px;
    height: 0px;

    animation: ${SideAnim} var(--border-ease) var(--border-duration) 0s 1 normal forwards;
  }

  &::before {
    top: 0px;
    left: 0px;
    border-top: var(--border-width) solid var(--border-clr);
    border-left: var(--border-width) solid var(--border-clr);
  }

  &::after {
    right: 0px;
    bottom: 0px;
    border-bottom: var(--border-width) solid var(--border-clr);
    border-right: var(--border-width) solid var(--border-clr);
  }
`;

const Corner = styled.span<ICornerWrapperProps>`
  --coordinates: calc(var(--size) / -2);
  position: absolute;
  height: var(--size);
  width: var(--size);

  background-color: var(--color-background);
  background-image: repeating-linear-gradient(
    -45deg,
    transparent,
    transparent 4px,
    var(--color-background-darker) 4px,
    var(--color-background-darker) 8px
  );
  transform: rotate(45deg);
  z-index: 1;

  &:before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
  }
`;

const TopRightCorner = styled(Corner)`
  top: var(--coordinates);
  right: var(--coordinates);

  &:before {
    border-bottom: var(--border-width) solid var(--border-clr);
    animation: ${CornerWidthAnim} var(--border-ease) var(--border-duration) 0s 1 normal forwards;
  }
`;

const BottomLeftCorner = styled(Corner)`
  bottom: var(--coordinates);
  left: var(--coordinates);

  &:before {
    border-top: var(--border-width) solid var(--border-clr);
    animation: ${CornerWidthAnim} var(--border-ease) var(--border-duration) 0s 1 normal forwards;
  }
`;

const TopLeftCorner = styled(Corner)`
  top: var(--coordinates);
  left: var(--coordinates);

  &:before {
    border-right: var(--border-width) solid var(--border-clr);
    animation: ${CornerHeightAnim} var(--border-ease) var(--border-duration) 0s 1 normal forwards;
  }
`;

const BottomRightCorner = styled(Corner)`
  bottom: var(--coordinates);
  right: var(--coordinates);

  &:before {
    border-left: var(--border-width) solid var(--border-clr);
    animation: ${CornerHeightAnim} var(--border-ease) var(--border-duration) 0s 1 normal forwards;
  }
`;

export default CornerWrapper;
