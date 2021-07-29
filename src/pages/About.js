import styled from 'styled-components';
import profilePic from '../images/profilePic.jpeg';

export default function About() {
  return (
    <Section>
      <h1>About</h1>
      <ProfilePic src={profilePic} alt='profile pic of Sabrina' />
      <h2>Who am I?</h2>
      <p>
        Hi! I'm Sabrina and I am a striving Frontend Developer who recently
        finished her Web Development Bootcamp at neuefische. I love to work on
        new projects and broaden my horizon. So, if you have any questions, have
        an app idea or want to work together feel free to get in touch with me!
      </p>
    </Section>
  );
}

const Section = styled.section`
  background-color: #2e3d4f;
  padding: 1.5rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  place-items: center;

  h1 {
    font-family: var(--ff-cursive-alt);
    font-size: 3.5rem;
    text-align: center;
    padding: 2rem;
    color: #ff3e41;
    grid-column: 1/-1;
  }

  h2 {
    font-family: var(--ff-cursive-alt);
    font-size: 2rem;
    text-align: center;
    padding: 2rem;
    color: #ff3e41;
    grid-column: 1;
  }

  p {
    grid-column: 1;
    color: ivory;
    padding: 0 5rem;
  }
`;

const ProfilePic = styled.img`
  width: 20rem;
  border-radius: 50%;
  grid-column: 1;
  justify-content: center;
  margin-bottom: 1rem;
`;
