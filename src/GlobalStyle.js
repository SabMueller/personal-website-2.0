import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`


:root {

  --primary: #04c2c9;
  --primary-dark:#0c7297;
  --primary-darker:  #0B688A;
  --red: #ff3e41;
  --white: ivory;
  --gray-light: #666370;
  --gray-dark: #2e3d4f;
  --black: #1b242f;
  --green: #23d5ab;
  --orange-light: #edaf97;
  --orange: #ee7752;
  --orange-dark: #e37682;
  --purple: #a58fe9;
  --pink: #e73c7e;
  --blue-alt: #23a6d5;


  --ff-cursive: 'Dancing Script', cursive;
  --ff-cursive-alt: 'Kaushan Script', cursive;
  --ff-serif: 'Marcellus SC', serif;
  --ff-sans: 'Montserrat', sans-serif;

}

*,
*::before,
*::after {
  box-sizing: border-box;
}


h1, h2, h3 {
  line-height: 1.2;
  font-family: var(--ff-cursive)
}

body, h1, h2, h3, p {
  margin: 0;
}

body {

  height: auto;

  font-family: var(--ff-sans);
  font-size: 1.25rem; 
  line-height: 1.5;
}

ul[class],
ol[class] {
  list-style: none;
  padding: 0;
  margin: 0;
}

ul[class] li,
ol[class] li {
  list-style: none;
  padding: 0;
}

img {
  max-width: 100%;
  height: auto;
  display: block;
}


 `;
