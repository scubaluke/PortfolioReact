 import meditationImg from '../img/meditationFear.png'
 import puppetImg from '../img/puppet.png'
import ticTacToe from '../img/ticTacToe.png'
import ProShop from '../img/ProShop.png'
import outstandingly from '../img/outstandingly.png'

 const data = {
    meditation: {
        projectTitle: `Meditation`,
        projectLink: `NamaGoMeditate.com`,
        projectSubtitle: `bringing Mindfulness to others`,
        headerParagraph: `I built and designed this meditation website to help bring mindfulness to others.  The webpage has 4 different Mantras for users to repeat to themselves. Each Page contains 23 different mantras that appear in random order along with a photo.  The idea is users can navigate through the page, repeating the mantras to themselves, to bring them back into the present moment, help them move beyond their fear, or put a new positive twist on their day and lives.`,
        bottomParagraph: `NamaGoMeditate was built in React using HashRouter and the npm package awesome-react-slider. I used HashRouter since the site is hosted using a traditional hosting provider.  NamaGoMeditate uses a dropdown hamburger navigation menu that has a position of fixed, allowing it to always be with the user.  The hamburger menu has the NamaGo logo, allows users to go back to the top of the page and navigate to other pages.`,
        src: 'https://www.youtube.com/embed/cgx6tuvOQYU?autoplay=1',
        img: meditationImg
    },
    proshop: {
        projectTitle: `Pro Shop`,
        projectLink: `lukesproshop.herokuapp.com`,
        projectSubtitle: `Fullstack e-commerce store`,
        headerParagraph: `This project was build as part of an online class with Brad Traversy. In this class we built a fully functional e-commerce platform from scratch. The MERN stack was used with Redux for state management. The site has user login, a shopping cart running PayPal at checkout, user generated product rating and reviews, as well as admin screens for creating new products and updating orders.`,
        bottomParagraph: `After I finished this class there  were a few bugs I went back and fixed. The main bug being the state of the shopping cart. I created a clear cart action and called it if the user logged out on the cart screen and when an order was placed. `,
        src: 'https://www.youtube.com/embed/cgx6tuvOQYU?autoplay=1',
        img: ProShop
    },
    outstandingly: {
        projectTitle: `Outstandinlgy`,
        projectLink: `https://outstandingly.netlify.app/`,
        projectSubtitle: `Concept to Deployment Gatsby Site`,
        headerParagraph: `The goal of this project was to create a dynamic and mobile-responsive landing page for a tech start-up based in San Diego, California. Throughout this project, I worked as lead developer among a three-person team to develop the website from concept to launch. In the early stages of the development of this project, I utilized Figma to create wireframes and mockup the site. Our team utilized Agile and Scrum methodology for our development. As the lead developer, I lead daily standup meetings via zoom with the other team members, assigned tasks, and performed weekly code reviews.`,
        bottomParagraph: `This project was coded on Visual Studio Code. I built the project with Gatsby and React and utilized Graphql for image rendering. With future use and scaling in mind, I built reusable components that accepted props to render content. I created a custom drop-down accordion-style FAQ component that accepts props to render the content allowing additional content to be easily added or removed. Additionally, I researched and utilized well-supported NPM packages when necessary including Aos for scroll animations and Formik for form management as well as several other Gatsby required packages for image rendering. Throughout the development of this site our team utilized GitHub for version control, the final product is hosted using Netlify. I enjoyed working on this project and having the opportunity to take on a leadership role. I learned a lot about GatsbyJS and how it works with React to make sites even faster and render images more efficiently.`,
        src: 'https://www.youtube.com/embed/cgx6tuvOQYU?autoplay=1',
        img: outstandingly
    },
    mjPuppet: {
        projectTitle: `Merlajean's Parading Puppets`,
        projectLink: `mjpuppet.com`,
        projectSubtitle: `A complete re-design`,
        headerParagraph: `This project was a complete redesign of an outdated website. Often times small businesses do not keep up to date with technology changes and their websites suffer.

        Re-designing Merlajean's Parading Puppet website using the same content from Merlajean but using new design features included with HTML5 and CSS3 has made a large impact on Merlajean's business.`,
        bottomParagraph: `For this project I used large hero title images. This give the user a sense of who Merlajean is and helps keep users engaged and on the page longer.

        This page has many accessibility features including:
        
        Effective use of color, large color contrast makes the page easy for people to see and read.
        Accessible with keyboard, a large bright active border makes it clear what the user is on the page.
        Good use of HTML headings, allows users with screen readers to navigate the page according to its headings and skip or move the the users desired content.`,
        src: 'https://www.youtube.com/embed/4rlLXXwATXg?autopaly=1',
        img: puppetImg
    },
    SEL: {
        projectTitle: `Emotional Learning`,
        projectLink: `Memory Game`,
        projectSubtitle: `5th Grade level`,
        headerParagraph: `I built and designed this Tic Tac Toe game for SELTrove to use in their social media advertising. Students and educators can play the game as a fun way to learn about the unique lessons SELTrove offers.`,
        bottomParagraph: `This is a single page application that includes single player or multi player options as well as 4 different Social-Emotional Learning question sets to choose from. Users are asked questions from SELTrove's Social-Emotional Learning curriculum that they must answer before each turn on the tic tac toe board.

        The questions asked are stored in an array of objects. This allowed me to easily generate the questions to the user in random order, keeping the game more dynamic. The first key-value pair is the question the second is the answer. This allowed me to use the same array for generating the question in random order, populating the dropdown menu to answer the question and check for the correct answer all with the same array.
        
        The page changes with display none to display flex with a set time out of 20ms to opacity 1 allowing for a smooth transition between displays.`,
        src: 'https://www.youtube.com/embed/oPuTt1pUinM?autoplay=1',
        img: ticTacToe
    }
}
export default data

