import React from 'react';

import { Container, StyledGrid, Logo, Menu, LinkButton } from './Header.style';

function Header() {
  return (
    <Container>
      <StyledGrid>
        <Logo to="/">Star Wars Top Trumps</Logo>
        <Menu>
          <LinkButton to="/">Play</LinkButton>
          <LinkButton to="/results/">Results</LinkButton>
        </Menu>
      </StyledGrid>
    </Container>
  );
}

export default Header;
