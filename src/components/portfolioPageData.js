 import meditationImg from '../img/meditationFear.png'
 import puppetImg from '../img/puppet.png'
import ticTacToe from '../img/ticTacToe.png'

 const data = {
    meditation: {
        projectTitle: `Meditation`,
        projectLink: `NamaGoMeditate.com`,
        projectSubtitle: `bringing Mindfulness to others`,
        headerParagraph: `I built and designed this meditation website to help bring mindfulness to others.  The webpage has 4 different Mantras for users to repeat to themselves. Each Page contains 23 different mantras that appear in random order along with a photo.  The idea is users can scroll through the page, repeating the mantras to themselves, to bring them back into the present moment, help them move beyond their fear, or put a new positive twist on their day and lives. `,
        bottomParagraph: ` NamaGoMeditate uses a dropdown hamburger navigation menu that has a position of fixed, allowing it to always be with the user.  The hamburger menu has the NamaGo logo, allows users to go back to the top of the page and navigate to other pages.`,
        src: 'https://www.youtube.com/embed/cgx6tuvOQYU?autoplay=1',
        img: meditationImg
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
        src: 'https://www.youtube.com/embed/4rlLXXwATXg',
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
        src: 'https://www.youtube.com/embed/oPuTt1pUinM',
        img: ticTacToe
    }
}
export default data