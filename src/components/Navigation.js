import styled from 'styled-components';

export default function Navigation() {
  return (
    <NavWrapper>
      <StyledNavLink activeClassName='active' href='#top'>
        Home
      </StyledNavLink>
      <StyledNavLink className='link' href='/#about'>
        About Me
      </StyledNavLink>
      <StyledNavLink className='link' href='/#projects'>
        Portfolio
      </StyledNavLink>
      <StyledNavLink className='link' href='/#contact'>
        Contact
      </StyledNavLink>
    </NavWrapper>
  );
}

const NavWrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-around;

  background-color: var(--black);
  border-bottom: 4px solid var(--primary);
  height: 3.125rem;
  position: sticky;
  top: 0;
  z-index: 999;

  .active {
    color: var(--red);
  }
`;

const StyledNavLink = styled.a`
  color: var(--white);
  font-family: Montserrat, sans-serif;
  text-decoration: none;

  &:hover {
    color: var(--red);
  }
`;
