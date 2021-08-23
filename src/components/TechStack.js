import styled from 'styled-components/macro';
import FadeInWhenVisible from '../animations/FadeInWhenVisible';

import illustratorIcon from '../images/adobeIllustrator.png';
import indesignIcon from '../images/adobeIndesign.png';
import photoshopIcon from '../images/adobePhotoshop.png';
import xdIcon from '../images/adobeXD.png';
import bashIcon from '../images/bashShell.png';
import cssIcon from '../images/css3.png';
import cypressIcon from '../images/cypress.png';
import expressIcon from '../images/expressjs.png';
import gitIcon from '../images/git.png';
import githubIcon from '../images/github.png';
import gitkrakenIcon from '../images/gitkraken.png';
import htmlIcon from '../images/html5.png';
import javascriptIcon from '../images/javascript.png';
import jestIcon from '../images/jest.png';
import mongodbIcon from '../images/mongodb.png';
import mongooseIcon from '../images/mongoose.png';
import nodejsIcon from '../images/nodeJS.png';
import npmIcon from '../images/npm.png';
import postmanIcon from '../images/postman.png';
import reactIcon from '../images/reactJS.png';
import styleguidist from '../images/styleguidist.png';
import vscodeIcon from '../images/vsCode.png';

export default function TechStack() {
  return (
    <TechStackWrapper>
      <FlexWrapper>
        <h3>Frontend</h3>
        <FadeInWhenVisible>
          <RoundTechStackIcon src={htmlIcon} alt='Icon of HTML5' />
        </FadeInWhenVisible>
        <FadeInWhenVisible>
          <RoundTechStackIcon src={cssIcon} alt='Icon of CSS3' />
        </FadeInWhenVisible>
        <FadeInWhenVisible>
          <RoundTechStackIcon src={javascriptIcon} alt='Icon of Javascript' />
        </FadeInWhenVisible>
        <FadeInWhenVisible>
          <RoundTechStackIcon src={reactIcon} alt='Icon of React.js' />
        </FadeInWhenVisible>
        <FadeInWhenVisible>
          <StyleGuidistIcon src={styleguidist} alt='Icon of Style Guidist' />
        </FadeInWhenVisible>
        <FadeInWhenVisible>
          <SmallerIcon src={jestIcon} alt='Icon of Jest' />
        </FadeInWhenVisible>
        <FadeInWhenVisible>
          <SmallerIcon src={cypressIcon} alt='Icon of Cypress' />
        </FadeInWhenVisible>
        <h3>Backend</h3>
        <FadeInWhenVisible>
          <RoundTechStackIcon src={nodejsIcon} alt='Icon of node.js' />
        </FadeInWhenVisible>
        <FadeInWhenVisible>
          <MongoDBIcon src={mongodbIcon} alt='Icon of MongoDB' />
        </FadeInWhenVisible>
        <FadeInWhenVisible>
          <SmallerIcon src={postmanIcon} alt='Icon of Postman' />
        </FadeInWhenVisible>
        <FadeInWhenVisible>
          <RectangleTechStackIcon src={expressIcon} alt='Icon of Express' />
        </FadeInWhenVisible>
        <FadeInWhenVisible>
          <RectangleTechStackIcon src={mongooseIcon} alt='Icon of Mongoose' />
        </FadeInWhenVisible>
        <h3>UI / UX</h3>
        <FadeInWhenVisible>
          <XDIcon src={xdIcon} alt='Icon of Adobe XD' />
        </FadeInWhenVisible>
        <FadeInWhenVisible>
          <RoundTechStackIcon
            src={illustratorIcon}
            alt='Icon of Adobe Illustrator'
          />
        </FadeInWhenVisible>
        <FadeInWhenVisible>
          <RoundTechStackIcon src={indesignIcon} alt='Icon of Adobe Indesign' />
        </FadeInWhenVisible>
        <FadeInWhenVisible>
          <RoundTechStackIcon
            src={photoshopIcon}
            alt='Icon of Adobe Photoshop'
          />
        </FadeInWhenVisible>
        <h3>Utility</h3>
        <FadeInWhenVisible>
          <RoundTechStackIcon src={githubIcon} alt='Icon of GitHub' />
        </FadeInWhenVisible>
        <FadeInWhenVisible>
          <NpmIcon src={npmIcon} alt='Icon of npm' />
        </FadeInWhenVisible>
        <FadeInWhenVisible>
          <SmallerIcon src={gitIcon} alt='Icon of git' />
        </FadeInWhenVisible>
        <FadeInWhenVisible>
          <RoundTechStackIcon src={vscodeIcon} alt='Icon of VS Code' />
        </FadeInWhenVisible>
        <FadeInWhenVisible>
          <GitkrakenIcon src={gitkrakenIcon} alt='Icon of Git Kraken' />
        </FadeInWhenVisible>
        <FadeInWhenVisible>
          <BashIcon src={bashIcon} alt='Icon of bash Shell' />
        </FadeInWhenVisible>
      </FlexWrapper>
    </TechStackWrapper>
  );
}

const TechStackWrapper = styled.section`
  display: flex;
  justify-content: center;
  flex-flow: row wrap;
  width: 70vw;
  margin: 0 auto;
`;

const FlexWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  flex-flow: row wrap;
  margin: 0 auto;
  width: 70vw;
  background-color: rgba(102, 99, 112, 15%);
  padding: 2rem;
  filter: drop-shadow(0 0 0.75rem black);
  border-radius: 3rem;

  h3 {
    width: 100vw;
    color: #edaf97;
    font-size: 2rem;
    font-family: var(--ff-serif);
    text-align: center;
    margin: 1rem 0;
  }
`;

const RoundTechStackIcon = styled.img`
  width: 5rem;
`;

const XDIcon = styled.img`
  width: 4rem;
  border: 3px solid #ff61f6;
  border-radius: 50%;
`;

const NpmIcon = styled.img`
  width: 3.8rem;
  border-radius: 50%;
`;

const RectangleTechStackIcon = styled.img`
  width: 6.5rem;
`;

const GitkrakenIcon = styled.img`
  width: 4.3rem;
`;

const MongoDBIcon = styled.img`
  width: 4rem;
`;

const SmallerIcon = styled.img`
  width: 4rem;
`;

const StyleGuidistIcon = styled.img`
  width: 6rem;
`;

const BashIcon = styled.img`
  width: 9rem;
`;
