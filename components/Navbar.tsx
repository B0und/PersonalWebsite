import * as React from "react";
import styled from "styled-components";

const Navbar: React.FC = () => {
  const links = [
    { title: "blog", href: "#" },
    { title: "contact", href: "#" },
    { title: "resume", href: "#" },
  ];
  return (
    <Nav>
      <h2>unbound project</h2>
      <List>
        {links.map((link) => {
          return (
            <li key={link.title}>
              <a href={link.href}>{link.title}</a>
            </li>
          );
        })}
      </List>
    </Nav>
  );
};

const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: baseline;
  justify-content: space-between;
  border-bottom: 1px solid var(--color-border);

  padding-top: 32px;
  margin-bottom: 32px;
`;

const List = styled.ul`
  /* list-style-type: none; */
  list-style: none;
  display: flex;
  gap: 16px;
`;
export default Navbar;
