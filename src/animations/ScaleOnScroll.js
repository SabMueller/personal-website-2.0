import { motion, useViewportScroll, useTransform } from 'framer-motion';
import styled from 'styled-components/macro';

export default function TechStack() {
  const { scrollYProgress } = useViewportScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 1]);

  return (
    <Section className='wrapper'>
      <motion.div className='container' style={{ opacity }}>
        {/*         <motion.div
          className='item'
          style={{
            scaleY: scrollYProgress,
          }}
        /> */}
      </motion.div>
    </Section>
  );
}

const Section = styled.div`
  width: 150px;
  height: 150px;
  position: fixed;
  top: 50%;
  left: 50%;
  xtransform: translateX(-50%) translateY(-50%);

  .container {
    width: 100%;
    height: 100%;
    overflow: hidden;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 30px;
  }

  .item {
    width: inherit;
    height: inherit;
    background: white;
    transform-origin: 50% 100%;
  }
`;
