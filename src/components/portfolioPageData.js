import meditationImg from "../img/meditationFear.png";
import ProShop from "../img/ProShop.png";
import outstandingly from "../img/outstandingly.png";
import videoSearch from "../img/videosearch.png";
import sailCalcImg from "../img/sailCalcImg.jpg";
import Calculaitly from "../img/calculaitly.jpg";

export const data = {
  meditation: {
    projectTitle: `Meditation`,
    to: "/meditation",
    projectLink: `NamaGoMeditate.com`,
    projectSubtitle: `bringing Mindfulness to others`,
    headerParagraph: `I built and designed this meditation website to help bring mindfulness to others.  The webpage has 4 different Mantras for users to repeat to themselves. Each Page contains 23 different mantras that appear in random order along with a photo.  The idea is users can navigate through the page, repeating the mantras to themselves, to bring them back into the present moment, help them move beyond their fear, or put a new positive twist on their day and lives.`,
    bottomParagraph: `NamaGoMeditate was built in React using HashRouter and the npm package awesome-react-slider. I used HashRouter since the site is hosted using a traditional hosting provider.  NamaGoMeditate uses a dropdown hamburger navigation menu that has a position of fixed, allowing it to always be with the user.  The hamburger menu has the NamaGo logo, allows users to go back to the top of the page and navigate to other pages.`,
    src: "https://www.youtube.com/embed/cgx6tuvOQYU?autoplay=1",
    img: meditationImg,
  },
  proshop: {
    projectTitle: `Pro Shop`,
    to: "/proshop",
    projectLink: `lukesproshop.herokuapp.com`,
    projectSubtitle: `Fullstack e-commerce store`,
    headerParagraph: `This project was build as part of an online class with Brad Traversy. In this class we built a fully functional e-commerce platform from scratch. The MERN stack was used with Redux for state management. The site has user login, a shopping cart running PayPal at checkout, user generated product rating and reviews, as well as admin screens for creating new products and updating orders.`,
    bottomParagraph: `Im not going to lie, I ran into my fair share of errors during this course. I became very well aquatinted with the chrome dev tools and react / redux extensions. At the end of this class there were a few bugs I went back and fixed. The main bug being the state of the shopping cart. I created a clear cart action and called it if the user logged out on the cart screen and when an order was placed. `,
    src: "https://www.youtube.com/embed/8xFi5ZCaIZo?autoplay=1",
    img: ProShop,
  },
  outstandingly: {
    projectTitle: `Outstandinlgy`,
    to: "/outstandingly",
    projectLink: `outstandingly.netlify.app/`,
    projectSubtitle: `Gatsby Site`,
    headerParagraph: `The goal of this project was to create a fast, dynamic and mobile-responsive landing page for a cohort concept start-up based in San Diego, California. Throughout this project, I worked among a three-person team to develop the website from concept to launch. In the early stages of the development of this project, I utilized Figma to create wireframes and mockup the site. Our team utilized Agile and Scrum methodology for our development. As the lead developer, I lead daily standup meetings via zoom with the other team members, assigned tasks, and performed weekly code reviews.`,
    bottomParagraph: `This project was coded on Visual Studio Code. I built the project with Gatsby and React and utilized Graphql for image rendering. With future use and scaling in mind, I built reusable components that accepted props to render content. I created a custom drop-down accordion-style FAQ component that accepts props to render the content allowing additional content to be easily added or removed. Additionally, I researched and utilized well-supported NPM packages when necessary including Aos for scroll animations and Formik for form management as well as several other Gatsby required packages for image rendering. Throughout the development of this site our team utilized GitHub for version control, the final product is hosted using Netlify. I enjoyed working on this project and having the opportunity to take on a leadership role. I learned a lot about GatsbyJS and how it works with React to make sites even faster and render images more efficiently.`,
    src: "https://www.youtube.com/embed/5GmO6jliyC0?autoplay=1",
    img: outstandingly,
  },
  sailcalculator: {
    projectTitle: `Sail Calculator`,
    to: "/sailcalculator",
    projectLink: `sailcalculator.com`,
    projectSubtitle: `Calculate your sailing passage details!`,
    headerParagraph: `This web app was designed to help sailers calculate their passages and routes.`,
    bottomParagraph: `
    For this project I used Next.js with AWS amplify. I wanted to use amplify for future versions of the app that will include
    a large vessel database where users can come search this data and find the perfect vessels to put on their shorlist.  
    `,
    src: "https://www.youtube.com/embed/Owlv_4oAE7s?autoplay=1",
    img: sailCalcImg,
  },
  calculaitly: {
    projectTitle: `Calculaitly`,
    to: "/calculaitly",
    projectLink: `https://infallible-hamilton-afe80e.netlify.app/`,
    projectSubtitle: `Keep track of your online sales!`,
    headerParagraph: `This web app was designed to help small online retailers monitor their profits.`,
    bottomParagraph: `
I used react for this project to create an easy to use web app to calculate and track money earned from online sales. Users can add and delete new sales. Totals are calculated to help the user find profit generating products and calculate income.   
    `,
    src: "https://www.youtube.com/embed/xWESjumM54Q?autoplay=1",
    img: Calculaitly,
  },
  video: {
    projectTitle: `Video search`,
    to: "/video",
    projectLink: `lukesyoutube.netlify.app`,
    projectSubtitle: `React YouTube clone`,
    headerParagraph: `I built and designed this YouTube clone to search and play videos.  This was a fun project where I put reusable components to work. Pulling data from the YouTube api I was able to dynamically update the page content with user searched content. I utilized the use effect hook to re-render the page on search.`,
    bottomParagraph: `I enjoyed building this project putting some of my skills to use.`,
    src: "https://www.youtube.com/embed/DawmWLIs-H8?autoplay=1",
    img: videoSearch,
  },
};

export const portfolioItems = [
  {
    to: "/meditation",
    img: meditationImg,
  },
  {
    to: "/proshop",
    img: ProShop,
  },
  {
    to: "/outstandingly",
    img: outstandingly,
  },
  {
    to: "/sailCalculator",
    img: sailCalcImg,
  },
  {
    to: "/calculaitly",
    img: Calculaitly,
  },
  {
    to: "/video",
    img: videoSearch,
  },
];
