import styled from 'styled-components/macro';
import FadeInWhenVisible from '../animations/FadeInWhenVisible';
import TechStack from '../components/TechStack';
import TechValues from '../components/TechValues';
import profilePic from '../images/profilePic.jpeg';

export default function About() {
  return (
    <Section>
      <h1>About</h1>
      <Paragraph>
        {' '}
        Here you'll find infos about myself, about my Values when it comes to my
        projects and my current Tech Stack. So... let's start with the most
        obvious question:{' '}
      </Paragraph>
      <AboutMeSection>
        <h2>Who am I?</h2>
        <FadeInWhenVisible>
          <ProfilePic src={profilePic} alt='profile pic of Sabrina' />
        </FadeInWhenVisible>
        <Paragraph>
          {' '}
          Hi! I'm Sabrina and I am a striving Frontend Developer who recently
          finished her Web Development Bootcamp at neuefische. I love to work on
          new projects and broaden my horizon. So, if you have any questions,
          have an app idea or want to work together feel free to get in touch
          with me!
        </Paragraph>
      </AboutMeSection>
      <TechSection>
        <h2>My Tech Values</h2>
        <h5>Or: Stuff I care about deeply in my projects...</h5>
        <TechValues />
        <h2>My Tech Stack</h2>
        <TechStack />
      </TechSection>
    </Section>
  );
}

const Section = styled.section`
  background-color: #2e3d4f;
  padding: 1.5rem 0 4rem 0;
  border-bottom: 7px solid var(--red);

  h1 {
    font-family: var(--ff-cursive-alt);
    font-size: 3.5rem;
    text-align: center;
    padding: 2rem;
    color: var(--red);
  }
  h2 {
    font-family: var(--ff-cursive-alt);
    font-size: 2.5rem;
    text-align: center;
    padding: 2rem;
    color: var(--red);
    margin-top: 2rem;
  }
`;

const AboutMeSection = styled.section``;

const Paragraph = styled.p`
  color: var(--white);
  text-align: center;
  width: 50rem;
  margin: 0 auto;
  line-height: 2;
  text-align: justify;
  text-justify: inter-word;
`;

const ProfilePic = styled.img`
  width: 20rem;
  border-radius: 50%;
  margin: 0 auto 2rem auto;
`;

const TechSection = styled.section`
  h5 {
    text-align: center;
    font-weight: normal;
    color: var(--white);
    margin-top: -1.5rem;
  }
`;
