import * as React from "react";
import styled from "styled-components";
import { IconType } from "./Icon";
import IconButton from "./IconButton";

const Footer: React.FC = () => {
  return (
    <Wrapper>
      <Link href="https://github.com/B0und" target="_blank">
        Designed and Built by Vlad Moiseenko
      </Link>
      <Container>
        <StyledIconButton>
          <IconButton
            as="a"
            href="https://twitter.com/unbound_dev"
            target="_blank"
            id="twitter"
            hiddenText="twitter"
            size={24}
            style={{ padding: "16px" }}
          />
        </StyledIconButton>

        <StyledIconButton>
          <IconButton
            as="a"
            href="https://github.com/B0und"
            target="_blank"
            id="github"
            hiddenText="Github"
            size={24}
            style={{ padding: "16px" }}
          />
        </StyledIconButton>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;

  padding-bottom: 32px;
`;

const Link = styled.a`
  text-align: center;
  color: var(--color-border);

  &:hover,
  &:focus {
    color: var(--color-primary);
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 16px;
  color: var(--color-border);
`;

const StyledIconButton = styled.div`
  &:hover,
  &:focus {
    color: var(--color-primary);
  }
`;
export default Footer;
