import styled from 'styled-components/macro';
import FadeInWhenVisible from '../animations/FadeInWhenVisible';

export default function Experience() {
  return (
    <section>
      <h1>Experience</h1>
      <Timeline>
        <Line>
          <FirstDot />
          <FadeInWhenVisible>
            <ExperienceWrapper>
              <FirstExperienceBox>
                <TriangleRight />
                <DateLocationWrapper>
                  <h4>Sept. 21 - Now</h4>
                  <h4>Ismaning / Remote, Germany</h4>
                </DateLocationWrapper>
                <Position>
                  Associate IT Consultant Artificial Intelligence & Data
                  Analytics
                </Position>
                <Organization>.msg systems ag</Organization>
              </FirstExperienceBox>
            </ExperienceWrapper>
          </FadeInWhenVisible>
          <SecondDot />
          <FadeInWhenVisible>
            <ExperienceWrapper>
              <SecondExperienceBox>
                <TriangleLeft />
                <DateLocationWrapper>
                  <h4>Apr. 21 - Jul. 21</h4>
                  <h4>Munich / Remote, Germany</h4>
                </DateLocationWrapper>
                <Position>Trainee Web Development</Position>
                <Organization>neuefische</Organization>
              </SecondExperienceBox>
            </ExperienceWrapper>
          </FadeInWhenVisible>
          <ThirdDot />
          <FadeInWhenVisible>
            <ExperienceWrapper>
              <ThirdExperienceBox>
                <TriangleRight />
                <DateLocationWrapper>
                  <h4>Jan. 17 - Sept. 20</h4>
                  <h4>Goerisried, Germany</h4>
                </DateLocationWrapper>
                <Position>Business Owner</Position>
                <Organization>M&P Facility Management</Organization>
              </ThirdExperienceBox>
            </ExperienceWrapper>
          </FadeInWhenVisible>
        </Line>
      </Timeline>
    </section>
  );
}

const Timeline = styled.div`
  width: 60vw;
  margin: 0 auto;
`;
const Line = styled.div`
  background-color: var(--black);
  width: 1rem;
  height: 35rem;
  margin: 2rem auto 1rem auto;
  border-radius: 1rem;
  position: relative;
`;

const FirstDot = styled.div`
  position: absolute;
  top: 8.5%;
  background-color: var(--red);
  border: 3px solid #0f1a2c;
  border-radius: 50%;
  width: 2rem;
  height: 2rem;
  transform: translate(-50%, -50%);
  left: 50%;
`;

const SecondDot = styled(FirstDot)`
  top: 36%;
`;

const ThirdDot = styled(FirstDot)`
  top: 67%;
`;

const ExperienceWrapper = styled.section`
  display: flex;
  position: absolute;
`;

const DateLocationWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-flow: row wrap;
  padding: 0.2rem;

  h4 {
    font-size: 0.8rem;
    margin: 0;
    font-weight: normal;
    padding: 0.5rem 0.5rem 1rem 0.5rem;
    text-transform: uppercase;
    color: var(--gray-light);
  }
`;

const Position = styled.h3`
  color: var(--red);
  margin: 0;
  font-size: 1rem;
  padding: 0 0.5rem 0 0.5rem;
  font-family: var(--ff-sans);
  font-weight: bold;
  text-transform: uppercase;
`;

const Organization = styled(Position)`
  color: var(--primary-dark);
  margin-top: 0.3rem;
`;

const TriangleRight = styled.div`
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 1rem 0 1rem 1rem;
  border-color: transparent transparent transparent #0f1a2c;
  position: absolute;
  top: calc(18% - 1rem);
  left: calc(103% - 1rem);
`;
const TriangleLeft = styled.div`
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 1rem 1rem 1rem 0;
  border-color: transparent #0f1a2c transparent transparent;
  position: absolute;
  top: calc(18% - 1rem);
  right: calc(103% - 1rem);
`;

const FirstExperienceBox = styled.div`
  width: 30rem;
  height: 8rem;
  background-color: #0f1a2c;
  transform: translate(-120%, 20%);
  border-radius: 1rem;
  position: relative;
  filter: drop-shadow(0 0 1rem var(--black));
`;

const SecondExperienceBox = styled(FirstExperienceBox)`
  transform: translate(25%, 140%);
`;

const ThirdExperienceBox = styled(FirstExperienceBox)`
  transform: translate(-120%, 275%);
`;
