import styled from 'styled-components/macro';
import FadeInWhenVisible from '../animations/FadeInWhenVisible';

import artIcon from '../images/art.png';
import bulbIcon from '../images/lightbulb.png';
import cleanIcon from '../images/clean.png';
import profitIcon from '../images/profits.png';
import responsiveIcon from '../images/responsive.png';
import shuttleIcon from '../images/shuttle.png';

export default function TechValues() {
  return (
    <TechValueSection>
      <FadeInWhenVisible>
        <Hexagon>
          <div className='hexagon-wrapper'>
            <div className='hexagon'>
              <img src={responsiveIcon} alt='icon of different device sizes' />
            </div>
          </div>
          <h3>Responsiveness</h3>
          <p>
            From mobile to desktop - My projects usually are super responsive!
            Unless - of course - it is specified otherwise.
          </p>
        </Hexagon>
      </FadeInWhenVisible>
      <FadeInWhenVisible>
        <Hexagon>
          <div className='hexagon-wrapper'>
            <div className='hexagon'>
              <img src={shuttleIcon} alt='rocket icon' />
            </div>
          </div>
          <h3>Dynamics</h3>
          <p>
            Adding life to components and giving the users things to explore -
            that's what I love to do!
          </p>
        </Hexagon>
      </FadeInWhenVisible>
      <FadeInWhenVisible>
        <Hexagon>
          <div className='hexagon-wrapper'>
            <div className='hexagon'>
              <img src={bulbIcon} alt='lightbulb icon' />
            </div>
          </div>
          <h3>Intuition</h3>
          <p>
            I strive to maximize the UI/UX experience in all my projects by
            making it easy to use and accessible!
          </p>
        </Hexagon>
      </FadeInWhenVisible>
      <FadeInWhenVisible>
        <Hexagon>
          <div className='hexagon-wrapper'>
            <div className='hexagon'>
              <img src={artIcon} alt='icon of art tools' />
            </div>
          </div>
          <h3>Uniqueness</h3>
          <p>
            I try to make every project a unique piece of art by designing it
            carefully and thoroughly.
          </p>
        </Hexagon>
      </FadeInWhenVisible>
      <FadeInWhenVisible>
        <Hexagon>
          <div className='hexagon-wrapper'>
            <div className='hexagon'>
              <img src={cleanIcon} alt='icon of sparkling stars' />
            </div>
          </div>
          <h3>Clean & Low Code</h3>
          <p>
            I want my projects to be as compact, tidy and organized as possible
            - therefore I try to keep it short and simple and constantly
            optimize by refactoring.
          </p>
        </Hexagon>
      </FadeInWhenVisible>
      <FadeInWhenVisible>
        <Hexagon>
          <div className='hexagon-wrapper'>
            <div className='hexagon'>
              <img src={profitIcon} alt='icon of a chart' />
            </div>
          </div>
          <h3>Efficiency</h3>
          <p>
            Reliability & Speed are two of my main concerns when coding a
            project because I want to ensure high performance to reduce loading
            times and payload and improve product quality.
          </p>
        </Hexagon>
      </FadeInWhenVisible>
    </TechValueSection>
  );
}

const TechValueSection = styled.section`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  gap: 2rem;
  padding: 1rem;
  width: 70vw;
  margin: 0 auto;
`;

const Hexagon = styled.div`
  .hexagon-wrapper {
    margin: auto;
    display: flex;
    text-align: initial;
    width: 200px;
    height: 200px;
    cursor: pointer;
  }

  h3 {
    text-align: center;
    font-size: 1.8rem;
    margin-bottom: 0.5rem;
    font-family: var(--ff-serif);
    color: var(--red);
  }

  p {
    text-align: justify;
    text-justify: inter-word;
    width: 20rem;
    color: var(--white);
    line-height: 2;
  }

  .hexagon {
    position: relative;
    width: 46%;
    height: 80%;
    margin: auto;
    color: var(--white);
    background: linear-gradient(-180deg, #edaf97, #666370);
    display: flex;
    align-content: center;
    justify-content: center;
    transition: 0.5s;
  }

  img {
    z-index: 1;
    margin: auto;
    width: 4rem;
  }

  .hexagon:before,
  .hexagon:after {
    position: absolute;
    content: '';
    background: inherit;
    height: 100%;
    width: 100%;
    border-radius: 0;
    transition: 0.5s;
    transform-origin: center;
  }
  .hexagon:before {
    transform: rotateZ(60deg);
  }
  .hexagon:after {
    transform: rotateZ(-60deg);
  }
  .hexagon:hover {
    border-radius: 50px;
    transition: 0.5s;
  }
  .hexagon:hover:before {
    border-radius: 50px;
    transition: 0.5s;
  }
  .hexagon:hover:after {
    border-radius: 50px;
    transition: 0.5s;
  }
`;
