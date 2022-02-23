import * as React from "react";
import styled from "styled-components";

export interface ICornerWrapperProps {
  as?: string | React.ComponentType<any>;
  styles?: object;

  cutTopLeftCorner?: boolean;
  cutTopRightCorner?: boolean;
  cutBottomLeftCorner?: boolean;
  cutBottomRightCorner?: boolean;

  squareSize?: string;
  colorBorder?: string;
  colorBackground?: string;

  children?: React.ReactNode;
}

const CornerWrapper: React.FC<ICornerWrapperProps> = (props) => {
  return (
    <BorderWrapper as={props.as} style={props.styles}>
      {props.children}
      {props.cutTopLeftCorner && <TopLeftCorner />}
      {props.cutTopRightCorner && <TopRightCorner />}
      {props.cutBottomLeftCorner && <BottomLeftCorner />}
      {props.cutBottomRightCorner && <BottomRightCorner />}
    </BorderWrapper>
  );
};

CornerWrapper.defaultProps = {
  colorBorder: "var(--color-border)",
  colorBackground: "var(--color-background)",
  squareSize: "75px",
};

const BorderWrapper = styled.div<ICornerWrapperProps>`
  --square-size: ${(p) => p.squareSize};
  --color-border: ${(p) => p.colorBorder};
  --color-background: ${(p) => p.colorBackground};

  position: relative;
  display: flex;
  flex-direction: column;
  border: 1px solid var(--color-border);
`;

const Corner = styled.span`
  --coordinates: calc(var(--square-size) / -2);
  position: absolute;
  height: var(--square-size);
  width: var(--square-size);

  background-color: var(--color-background);
  transform: rotate(45deg);
`;

const TopRightCorner = styled(Corner)`
  top: var(--coordinates);
  right: var(--coordinates);
  border-bottom: 1px solid var(--color-border);
`;

const BottomLeftCorner = styled(Corner)`
  bottom: var(--coordinates);
  left: var(--coordinates);
  border-top: 1px solid var(--color-border);
`;

const TopLeftCorner = styled(Corner)`
  top: var(--coordinates);
  left: var(--coordinates);
  border-right: 1px solid var(--color-border);
`;

const BottomRightCorner = styled(Corner)`
  bottom: var(--coordinates);
  right: var(--coordinates);
  border-left: 1px solid var(--color-border);
`;

export default CornerWrapper;
