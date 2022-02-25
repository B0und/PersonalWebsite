import React from "react";

import { X, GitHub, Menu } from "react-feather";
import styled from "styled-components";

const icons = {
  close: X,
  github: GitHub,
  menu: Menu,
};

interface Props {
  id: "close" | "github" | "menu";
  color?: string;
  size?: number;
  strokeWidth?: number;
}

const Icon: React.FC<Props> = ({ id, color, size, strokeWidth, ...delegated }) => {
  const Component = icons[id];

  if (!Component) {
    throw new Error(`No icon found for ID: ${id}`);
  }

  return (
    <Wrapper strokeWidth={strokeWidth} {...delegated}>
      <Component color={color} size={size} />
    </Wrapper>
  );
};

const Wrapper = styled.div<{ strokeWidth: number | undefined }>`
  & > svg {
    display: block;
    stroke-width: ${(p) => (p.strokeWidth !== undefined ? p.strokeWidth + "px" : undefined)};
  }
`;

export default Icon;
