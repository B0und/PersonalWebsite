import { keyframes } from "styled-components";

export const CornerWidthAnim = keyframes`
  from {
    transform: scaleX(0);
    
  }
  to {
    transform: scaleX(1);
  }
`;

export const CornerHeightAnim = keyframes`
  from {
    transform: scaleY(0);
  }
  to {
    transform: scaleY(1);
  }
`;

export const SideAnim = keyframes`
from {
  width: 0%;
  height: 0%;
}
to {
  width: 100%;
  height: 100%;
}
`;

export const FadeIn = keyframes`
from {
  opacity: 0;
}
to {
  opacity: 1;
}
`;
