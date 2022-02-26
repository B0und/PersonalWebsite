import * as React from "react";
import styled, { keyframes } from "styled-components";

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

const CornerAnim = keyframes`
  from {
    transform: scaleX(0);
     /* transform: scaleY(0); */
  }
  to {
    transform: scaleX(1);
    /* transform: scaleY(1); */
  }
`;

const SideAnim = keyframes`
from {
  width: 0%;
  height: 0%;
}
to {
  width: 100%;
  height: 100%;
}
`;

const BorderWrapper = styled.div<ICornerWrapperProps>`
  --size: ${(p) => p.squareSize};
  --border-clr: ${(p) => p.colorBorder};
  --background-clr: ${(p) => p.colorBackground};
  --border-width: ${(p) => p.borderWidth || "1px"};

  position: relative;
  display: flex;
  flex-direction: column;
  border: var(--border-width) solid var(--border-clr);
  border: var(--border-width) solid transparent;

  &::before,
  &::after {
    pointer-events: none;
    content: "";
    position: absolute;
    width: 0px;
    height: 0px;

    animation: ${SideAnim} ease-in-out 1s 0s 1 normal forwards;
  }

  &::before {
    top: 0px;
    left: 0px;
    border-top: 1px solid var(--border-clr);
    border-left: 1px solid var(--border-clr);
  }

  &::after {
    right: 0px;
    bottom: 0px;
    border-bottom: 1px solid var(--border-clr);
    border-right: 1px solid var(--border-clr);
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
    hsl(236, 33.3%, 17%) 4px,
    hsl(236, 33.3%, 17%) 8px
  );
  transform: rotate(45deg);
  z-index: 1;

  &:before {
    content: "";
    position: absolute;
    width: 100%;
    height: 0px;
    border-bottom: 1px solid var(--color-border);
    bottom: 0px;
    transform: scaleX(0);
    background: var(--color-border);
    color: var(--color-border);

    animation: ${CornerAnim} ease-in-out 1s 0s 1;
  }
`;

const TopRightCorner = styled(Corner)`
  top: var(--coordinates);
  right: var(--coordinates);
  border-bottom: var(--border-width) solid var(--border-clr);
`;

const BottomLeftCorner = styled(Corner)`
  bottom: var(--coordinates);
  left: var(--coordinates);
  border-top: var(--border-width) solid var(--border-clr);
`;

const TopLeftCorner = styled(Corner)`
  top: var(--coordinates);
  left: var(--coordinates);
  border-right: var(--border-width) solid var(--border-clr);
`;

const BottomRightCorner = styled(Corner)`
  bottom: var(--coordinates);
  right: var(--coordinates);
  border-left: var(--border-width) solid var(--border-clr);
`;

export default CornerWrapper;
