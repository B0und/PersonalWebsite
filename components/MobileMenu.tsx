/* eslint-disable no-unused-vars */
import React, { Dispatch, SetStateAction } from "react";
import styled, { keyframes } from "styled-components";
import { DialogOverlay, DialogContent } from "@reach/dialog";
import VisuallyHidden from "@reach/visually-hidden";
import Icon from "./Icon";
import { WEIGHTS } from "../helpers/constants";
import { links } from "../helpers/data";

interface IMobileMenu {
  isOpen: boolean;
  onDismiss: any;
}

const MobileMenu: React.FC<IMobileMenu> = ({ isOpen, onDismiss }) => {
  return (
    <Wrapper isOpen={isOpen} onDismiss={onDismiss}>
      <Backdrop />
      <Content aria-label="Menu">
        <InnerWrapper>
          <CloseButton onClick={onDismiss}>
            <Icon id="close" />
            <VisuallyHidden>Dismiss menu</VisuallyHidden>
          </CloseButton>

          <Nav>
            {links.map((link) => (
              <NavLink
                key={link.title}
                href={link.href}
                onClick={link.title === "projects" ? onDismiss : null}
              >
                {link.title}
              </NavLink>
            ))}
          </Nav>
        </InnerWrapper>
      </Content>
    </Wrapper>
  );
};

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const slideIn = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0%);
  }
`;

const Wrapper = styled(DialogOverlay)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: transparent;
  display: flex;
  justify-content: flex-end;
`;

const Backdrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: var(--color-backdrop);
  animation: ${fadeIn} 500ms;
`;

const Content = styled(DialogContent)`
  --overfill: 16px;
  position: relative;
  background: #252950;
  width: calc(250px + var(--overfill));
  height: 100%;
  margin-right: calc(var(--overfill) * -1);
  padding: 24px 32px;

  @media (prefers-reduced-motion: no-preference) {
    animation: ${slideIn} 500ms both cubic-bezier(0, 0.6, 0.32, 1.06);
    animation-delay: 200ms;
  }
`;

const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  height: 100%;
  animation: ${fadeIn} 600ms both;
  animation-delay: 400ms;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: var(--overfill);
  padding: 16px;

  background: none;
  border: none;
  color: white;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

const NavLink = styled.a`
  width: 100%;
  padding: 16px;
  border-bottom: 1px solid transparent;
  font-size: ${18 / 16}rem;

  &:hover,
  &:focus {
    border-bottom: 1px solid var(--color-secondary);
  }

  &:last-of-type {
    font-weight: 500;
    color: var(--color-secondary);
  }
`;
export default MobileMenu;
