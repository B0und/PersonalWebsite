import * as React from "react";
import styled from "styled-components";
import { QUERIES, WEIGHTS } from "../helpers/constants";

const Navbar: React.FC = () => {
  const links = [
    { title: "blog", href: "#" },
    { title: "contact", href: "#" },
    { title: "resume", href: "#" },
  ];
  return (
    <header>
      <Nav>
        <NavTitle>unbound project</NavTitle>
        <List>
          {links.map((link) => {
            return (
              <Item key={link.title}>
                <Link href={link.href}>{link.title}</Link>
              </Item>
            );
          })}
        </List>
      </Nav>
    </header>
  );
};

const Nav = styled.nav`
  --nav-color: #eeeeee;

  display: flex;
  flex-direction: row;
  align-items: baseline;
  justify-content: space-between;
  padding-bottom: 10px;
  border-bottom: 1px solid var(--color-border);

  padding-top: 64px;
  margin-bottom: 64px;

  @media ${QUERIES.tabletAndSmaller} {
    padding-top: 32px;
    margin-bottom: 32px;
  }
`;

const NavTitle = styled.h2`
  font-size: ${16 / 16}rem;
  color: var(--nav-color);
`;

const List = styled.ul`
  list-style: none;
  display: flex;
  gap: 16px;
`;

const Link = styled.a`
  padding: 8px;
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
export default Navbar;
