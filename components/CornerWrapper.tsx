import * as React from "react";
import styled from "styled-components";

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
  --size: ${(p) => p.squareSize};
  --border-clr: ${(p) => p.colorBorder};
  --background-clr: ${(p) => p.colorBackground};
  --border-width: ${(p) => p.borderWidth || "1px"};

  position: relative;
  display: flex;
  flex-direction: column;
  border: var(--border-width) solid var(--border-clr);
`;

const Corner = styled.span<ICornerWrapperProps>`
  --coordinates: calc(var(--size) / -2);
  position: absolute;
  height: var(--size);
  width: var(--size);

  background: var(--background-clr);
  transform: rotate(45deg);
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
