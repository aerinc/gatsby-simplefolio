import uuidv1 from 'uuid/v1';

// HEAD DATA
export const headData = {
  title: 'Aylin Bezci | Developer',
  lang: 'en', 
  description: 'Welcome to my portfolio website' 
};

// HERO DATA
export const heroData = {
  title: 'Hello, my name is',
  name: 'Aylin.',
  subtitle: "Let's create something awesome.",
  cta: 'Know more'
};

// ABOUT DATA
export const aboutData = {
  img: 'profileimage.jpg',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: '' // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: uuidv1(),
    img: 'project1.png',
    title: 'Personal Blog',
    info: 'This blog website was a side project of mine, created using GatsbyJS, Routing and deployed via Netlify. This blog is a reflection of my interests, such as world travel and cooking.',
    info2: '',
    url: 'https://naughty-tesla-2680b1.netlify.com',
    repo: 'https://github.com/aerinc/gatsby-blog' // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'project2.png',
    title: 'Robofriends App',
    info: 'This app was created using ReactJS and features a responsive searchbar that filters out Monster cards based on what the user types. Deployed via GitHub Pages.',
    info2: '',
    url: 'https://aerinc.github.io/robofriends',
    repo: 'https://github.com/aerinc/robofriends' // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'project3.png',
    title: 'Crown Clothing',
    info: 'This e-commerce app was built using React, Redux, Hooks, and Sagas. It features a test mode version of the Stripe API to handle payments and uses Firebase as the database. Deployed via Heroku.',
    info2: '',
    url: 'https://crwn-merch.herokuapp.com',
    repo: 'https://github.com/aerinc/crwn-clothing' // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'aylin.erinc@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: uuidv1(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/aylin-bezci-814ba431',
    },
    {
      id: uuidv1(),
      name: 'github',
      url: 'https://github.com/aerinc',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
