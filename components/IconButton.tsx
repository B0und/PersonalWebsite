import VisuallyHidden from "@reach/visually-hidden";
import React from "react";
import styled from "styled-components";
import Icon, { IconType } from "./Icon";

interface Props extends IconType {
  hiddenText: string;
  as?: any;
  size?: number;
  delegated?: any;
}

const IconButton: React.FC<Props & React.ComponentPropsWithoutRef<any>> = ({
  as,
  id,
  size = 24,
  hiddenText,
  ...delegated
}: Props): any => {
  return (
    <Wrapper as={as} {...delegated}>
      <IconSize id={id} size={size} />
      <VisuallyHidden>{hiddenText}</VisuallyHidden>
    </Wrapper>
  );
};

const Wrapper = styled.button<any>`
  display: block;
  cursor: pointer;
  border: none;
  background: transparent;
  color: inherit;
  padding: 8px;
`;

const IconSize = styled(Icon)`
  width: ${(p) => p.size}px;
  height: ${(p) => p.size}px;
`;

export default IconButton;
