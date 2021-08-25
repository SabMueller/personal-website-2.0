import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <Main>
      <BackgroundShapes />
      <h2>Hi, nice to meet you! I'm</h2>
      <h1>Sabrina Mueller,</h1>
      <h2>a passionate</h2>
      <Headline>Web Developer</Headline>
      <StyledLink to='/projects'>
        <Button>View My Projects</Button>
      </StyledLink>
    </Main>
  );
}

const gradient = keyframes`

    0% {
        background-position: 0% 50%;
    }
    50% {
        background-position: 100% 50%;
    }
    100% {
        background-position: 0% 50%;
    }
`;

const infiniteScroll = keyframes`
0% {
    transform: translate3d(0, 0, 0);
  }

  100% {
    transform: translate3d(0, -1692px, 0);
  }

`;

const Main = styled.main`
  background-image: linear-gradient(to bottom right, #23a6d5, #23d5ab);
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  background-size: cover;
  color: var(--primary-darker);
  font-family: sans-serif;
  font-weight: 200;
  z-index: 1;
}


h1 {
  font-family: Montserrat, sans-serif;
  color: var(--white);
  font-weight: 600;
  letter-spacing: 2px;
  text-transform: uppercase;
}

h2 {
  font-family: Montserrat, sans-serif;
  color: var(--primary-dark);
  font-weight: 600;
  letter-spacing: 2px;
  text-transform: uppercase;
}
`;

const BackgroundShapes = styled.div`
  content: '';
  position: absolute;
  z-index: 2;
  left: 0;
  top: 0;
  width: 100%;
  height: 5076px;
  background-size: 100%;
  animation: 120s ${infiniteScroll} linear infinite;
  background-repeat: repeat;
  background-image: url('https://cdn2.hubspot.net/hubfs/53/Pricing%202017%20Assets/marketing/Header_Circles-1.svg');
`;

const Headline = styled.h1`
  background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
  background-size: 400% 400%;
  animation: ${gradient} 15s ease infinite;
  padding: 0.3rem;
  border-radius: 1rem;
  color: transparent;
  /* 
  background-clip: text;
  -webkit-background-clip: text; */
`;

const Button = styled.button`
  margin-top: 4rem;
  padding: 1rem;
  border-radius: 100vw;
  border: 1px solid var(--white);
  color: var(--white);
  background-color: transparent;
  font-family: Montserrat, sans-serif;
  cursor: pointer;
  z-index: 100;
  font-size: 1rem;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  z-index: 100;
`;
