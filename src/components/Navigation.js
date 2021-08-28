import styled from 'styled-components';
import { NavHashLink } from 'react-router-hash-link';

export default function Navigation() {
  return (
    <NavWrapper>
      <StyledLink smooth to='/'>
        Home
      </StyledLink>
      <StyledLink to='#about'>About Me</StyledLink>
      <StyledLink to='#portfolio'>Portfolio</StyledLink>
      <StyledLink to='#contact'>Contact</StyledLink>
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

const StyledLink = styled(NavHashLink)`
  color: var(--white);
  font-family: Montserrat, sans-serif;
  text-decoration: none;
  color: ${(props) => (props.isActive ? 'var(--red)' : '(var--white)')};

  &:hover {
    color: var(--red);
  }
`;
