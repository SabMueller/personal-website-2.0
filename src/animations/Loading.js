import { motion } from 'framer-motion';
import { FiLoader } from 'react-icons/fi';
import styled from 'styled-components/macro';

export default function Loading() {
  return (
    <LoadingPage>
      <h1>Please wait while we initialize the page...</h1>
      <div>
        <motion.div
          initial={{ scale: 1.0, opacity: 0.25 }}
          animate={{ scale: 0.9, opacity: 0.75 }}
          transition={{
            yoyo: Infinity,
            duration: 0.5,
            ease: 'easeIn',
          }}>
          <FiLoader size={48} />
        </motion.div>
      </div>
    </LoadingPage>
  );
}

const LoadingPage = styled.section`
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

  h1 {
    font-family: Montserrat, sans-serif;
    color: var(--white);
    font-weight: 600;
    letter-spacing: 2px;
    text-transform: uppercase;
  }

  div {
    display: grid;
    place-items: center;
  }
`;
