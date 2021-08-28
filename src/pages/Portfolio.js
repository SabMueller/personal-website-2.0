import styled from 'styled-components/macro';

import FadeInWhenVisible from '../animations/FadeInWhenVisible';
import githubLogo from '../images/githubLogo.png';
import herokuLogo from '../images/herokuLogo.png';

export default function Portfolio() {
  return (
    <Section id='portfolio'>
      <h1>My Projects</h1>
      <ProjectWrapper>
        <FadeInWhenVisible>
          <Iphone8>
            <div className='device device-iphone-8 device-spacegray'>
              <div className='device-frame'>
                <object
                  type='text/html'
                  data='https://pawzies.herokuapp.com/'
                  aria-label='embedded capstone project'
                  className='device-content'
                />
              </div>

              <div className='device-stripe'></div>
              <div className='device-header'></div>
              <div className='device-sensors'></div>
              <div className='device-btns'></div>
              <div className='device-power'></div>
              <p>I'm interactive! Try clicking a button or scrolling!</p>
            </div>
          </Iphone8>
        </FadeInWhenVisible>
        <ProjectDescription>
          <h2>PAWZIES</h2>
          <ProjectInfoWrapper>
            <h3>June 21 - July 21</h3>
            <h3>
              Capstone Project at{' '}
              <a
                href='https://www.neuefische.de/weiterbildung/web-development'
                target='_blank'
                rel='noreferrer'>
                neuefische
              </a>
            </h3>
          </ProjectInfoWrapper>
          <ProjectLink>
            <p>Webpage:</p>
            <p>Repository:</p>
          </ProjectLink>
          <ProjectLink>
            <a
              href='https://pawzies.herokuapp.com/'
              target='_blank'
              rel='noreferrer'>
              <HerokuLogo src={herokuLogo} alt='logo of heroku' />
            </a>
            <a
              href='https://github.com/SabMueller/capstone-project-pawzies'
              target='_blank'
              rel='noreferrer'>
              <GithubLogo src={githubLogo} alt='logo of github' />
            </a>
          </ProjectLink>

          <p>
            At PAWZIES you can find and adopt a furry friend for life! Browse
            among various animal types posted by rescue or shelter organizations
            and learn interesting facts about each animal as you go along. You
            can also add favorites and contact the respective organizations.
          </p>
          <p style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>
            Used Tech Stack:{' '}
          </p>
          <TechCloud>
            <span>React</span>
            <span>React - Router</span>
            <span>Styled Components</span>
            <span>MongoDB</span>
            <span>Mongoose</span>
            <span>node.js</span>
            <span>Express</span>
            <span>PropTypes</span>
            <span>Styleguidist</span>
            <span>React - Spring</span>
            <span>React - useGesture</span>
            <span>Cypress</span>
            <span>Adobe XD</span>
          </TechCloud>
        </ProjectDescription>
      </ProjectWrapper>
    </Section>
  );
}

const Section = styled.section`
  background-color: var(--white);
  padding: 1.5rem 0 4rem 0;
  border-bottom: 7px solid var(--red);

  h1 {
    font-family: var(--ff-cursive-alt);
    font-size: 3.5rem;
    text-align: center;
    padding: 2rem;
    color: var(--primary);
    margin-bottom: 4rem;
  }
  h2 {
    font-family: var(--ff-cursive-alt);
    font-size: 2.5rem;
    text-align: left;
    color: var(--red);
    margin-top: 2rem;
  }

  h3 {
    font-family: var(--ff-serif);
    margin: 1.5rem 0 1rem 0;
    color: var(--gray-light);
    letter-spacing: 0.1rem;
    font-size: 1.3rem;
  }
`;

const ProjectWrapper = styled.section`
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  p {
    text-align: justify;
    text-justify: inter-word;
    color: var(--gray-dark);
    line-height: 1.5;
    margin: 2rem 0 2rem 0;
    width: 40vw;
  }
`;

const ProjectDescription = styled.section`
  align-self: flex-start;
  position: relative;
`;

const ProjectLink = styled.section`
  display: grid;
  grid-template-columns: 0.4fr 0.4fr;
  grid-template-rows: 0.2fr;

  p {
    font-family: var(--ff-serif);
    color: var(--gray-light);
    letter-spacing: 0.1rem;
    font-size: 1.5rem;
    width: auto;
    margin: 0.8rem 0;
  }
`;

const GithubLogo = styled.img`
  width: 10rem;
  grid-column: 1;
`;

const HerokuLogo = styled.img`
  width: 11rem;
  grid-column: 2;
`;

const ProjectInfoWrapper = styled.section`
  /*   display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  align-items: center;
  gap: 1rem; */
  h3 {
    margin: 0.2rem 0;
  }
  a {
    text-decoration: none;
    color: var(--red);
    font-size: 1.7rem;
  }
`;

const TechCloud = styled.section`
  display: flex;
  width: 40vw;
  flex-flow: row wrap;
  gap: 1rem;

  span {
    background-color: var(--primary);
    padding: 0.7rem;
    border-radius: 100vw;
    font-family: var(--ff-sans);
    color: var(--gray-dark);
    font-size: 1.1rem;
  }
`;

const Iphone8 = styled.div`
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;

  p {
    font-style: italic;
    color: var(--black);
    font-size: 1.2rem;
    text-align: center;
    width: 20vw;
    margin: 1rem auto;
  }

  .device {
    position: relative;
    transform: scale(0.7);
    transform-origin: 50% 0%;
    z-index: 1;
  }

  @media only screen and (max-width: 1024px) {
    .device {
      transform: scale(0.7);
    }
  }

  @media only screen and (max-width: 768px) {
    .device {
      transform: scale(0.4);
    }
  }

  @media only screen and (max-width: 640px) {
    .device {
      transform: scale(0.4);
    }
  }
  .device-iphone-8 {
    height: 871px;
    width: 419px;
    position: relative;

    .device-frame {
      background: #222;
      border-radius: 68px;
      box-shadow: inset 0 0 0 2px #c8c9cb, inset 0 0 0 7px #e2e3e4;
      height: 871px;
      padding: 102px 22px;
      width: 419px;
    }

    // 1334-by-750-pixel resolution
    .device-content {
      border: 2px solid #222;
      border-radius: 4px;
      height: 667px;
      width: 375px;
      z-index: 300;
    }

    .device-stripe {
      &:after,
      &:before {
        border: solid rgba(#333, 0.15);
        border-width: 0 7px;
        content: '';
        height: 6px;
        left: 0;
        position: absolute;
        width: 100%;
        z-index: 9;
      }
      &:after {
        top: 68px;
      }
      &:before {
        bottom: 68px;
      }
    }

    // Home button
    .device-header {
      border: 2px solid #c8c9cb;
      border-radius: 50%;
      bottom: 25px;
      height: 58px;
      left: 50%;
      margin-left: -29px;
      position: absolute;
      width: 58px;
    }

    .device-sensors {
      background: #666;
      border-radius: 3px;
      height: 6px;
      left: 50%;
      margin-left: -38px;
      position: absolute;
      top: 52px;
      width: 76px;

      &:after,
      &:before {
        background: #666;
        border-radius: 50%;
        content: '';
        position: absolute;
      }
      &:after {
        height: 10px;
        left: 50%;
        margin-left: -5px;
        top: -25px;
        width: 10px;
      }
      &:before {
        height: 12px;
        left: -42px;
        margin-top: -6px;
        top: 50%;
        width: 12px;
      }
    }

    .device-btns {
      background: #c8c9cb;
      height: 30px;
      left: -3px;
      position: absolute;
      top: 102px;
      width: 3px;

      &:after,
      &:before {
        background: #c8c9cb;
        content: '';
        height: 56px;
        left: 0;
        position: absolute;
        width: 3px;
      }

      &:after {
        top: 62px;
      }
      &:before {
        top: 132px;
      }
    }

    .device-power {
      background: #c8c9cb;
      height: 80px;
      right: -2px;
      position: absolute;
      top: 160px;
      width: 3px;
    }

    // Gold edition
    &.device-gold {
      .device-frame {
        box-shadow: inset 0 0 0 2px #e4b08a, inset 0 0 0 7px #f7e8dd;
      }

      .device-header {
        border-color: #e4b08a;
      }

      .device-btns {
        &,
        &:after,
        &:before {
          background: #e4b08a;
        }
      }

      .device-power {
        background: #e4b08a;
      }
    }

    // Space Gray edition
    &.device-spacegray {
      .device-frame {
        background: #222;
        box-shadow: inset 0 0 0 2px #222, inset 0 0 0 7px #74747a;
      }

      .device-stripe {
        &:after,
        &:before {
          border-color: rgba(#ccc, 0.35);
        }
      }

      .device-btns {
        &,
        &:after,
        &:before {
          background: #222;
        }
      }
    }
  }
`;
