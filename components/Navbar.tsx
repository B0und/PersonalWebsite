import * as React from "react";
import styled from "styled-components";
import { CornerWidthAnim, FadeIn } from "../helpers/animations";
import { QUERIES, WEIGHTS } from "../helpers/constants";
import { links } from "../helpers/data";
import IconButton from "./IconButton";
import MobileMenu from "./MobileMenu";

const Navbar: React.FC = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  return (
    <header>
      <Nav>
        <NavTitle href="/">unbound project</NavTitle>
        <List>
          {links.map((link) => {
            return (
              <Item key={link.title}>
                <Link href={link.href}>{link.title}</Link>
              </Item>
            );
          })}
        </List>
        <Hamburger>
          <IconButton
            onClick={() => {
              setShowMobileMenu(true);
            }}
            id="menu"
            hiddenText="Open menu"
          />
        </Hamburger>
      </Nav>
      <MobileMenu isOpen={showMobileMenu} onDismiss={() => setShowMobileMenu(false)}></MobileMenu>
    </header>
  );
};

const Nav = styled.nav`
  --nav-color: #eeeeee;
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: baseline;
  justify-content: space-between;

  padding-top: 64px;
  padding-bottom: 10px;
  margin-bottom: 64px;

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

    animation: ${CornerWidthAnim} var(--border-ease) var(--border-duration) 0s 1 both;
  }

  @media ${QUERIES.tabletAndSmaller} {
    padding-top: 32px;
    margin-bottom: 32px;
  }

  @media ${QUERIES.phoneAndSmaller} {
    align-items: center;
    padding-bottom: 0px;
  }
`;

const NavTitle = styled.a`
  font-size: ${16 / 16}rem;
  color: var(--nav-color);
  font-weight: 500;

  animation: ${FadeIn} var(--fade-ease) var(--fade-duration) var(--fade-delay) both 1;

  &:hover,
  &:focus-visible {
    color: var(--color-primary);
    font-weight: 600;
  }
`;

const List = styled.ul`
  list-style: none;
  display: flex;
  gap: 16px;

  animation: ${FadeIn} var(--fade-ease) var(--fade-duration) var(--fade-delay) both 1;

  @media ${QUERIES.phoneAndSmaller} {
    display: none;
  }
`;

const Link = styled.a`
  padding: 8px;

  &:hover,
  &:focus-visible {
    color: var(--color-primary);
  }
`;

const Item = styled.li`
  font-size: ${16 / 16}rem;
  color: var(--nav-color);

  /* every item except last */
  & + &:before {
    content: "|";
    display: inline-block;
    color: var(--nav-color);
    transform-origin: center;
    transform: translateY(5px) rotate(45deg);
    padding-right: 12px;
    font-weight: 400;
  }

  :last-child {
    color: var(--color-secondary);
    font-weight: ${WEIGHTS.medium};
  }
`;

const Hamburger = styled.div`
  display: none;
  align-self: center;
  color: var(--nav-color);

  animation: ${FadeIn} var(--fade-ease) var(--fade-duration) var(--fade-delay) both 1;

  @media ${QUERIES.phoneAndSmaller} {
    display: block;
  }
`;
export default Navbar;
