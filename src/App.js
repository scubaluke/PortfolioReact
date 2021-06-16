import './App.css';
import { BrowserRouter,  Route } from 'react-router-dom'
import Info from "./components/Info";
import MyServices from './components/MyServices'
import AboutMe from './components/AboutMe'
import MyWork from './components/MyWork';
import Footer from './components/Footer'
import PortfolioPage from './components/PortfolioPage';
import  data from './components/portfolioPageData'
const {meditation, mjPuppet, SEL} = data

function App() {
  return (
    <BrowserRouter >
    <Route path="/" exact>
      <div className="App">
        <Info/>
        <MyServices />
        <AboutMe />
        <MyWork />
        <Footer />
      </div>
    </Route>
    <Route path="/meditation" >
        <PortfolioPage  projectTitle={meditation.projectTitle} projectLink={meditation.projectLink} projectSubtitle={meditation.projectSubtitle} headerParagraph={meditation.headerParagraph} bottomParagraph={meditation.bottomParagraph} src={meditation.src} img={meditation.img} />
      </Route>
      <Route path="/puppet" >
        <PortfolioPage  projectTitle={mjPuppet.projectTitle} projectLink={mjPuppet.projectLink} projectSubtitle={mjPuppet.projectSubtitle} headerParagraph={mjPuppet.headerParagraph} bottomParagraph={mjPuppet.bottomParagraph} src={mjPuppet.src} img={mjPuppet.img} />
      </Route>
      <Route path="/sel" >
        <PortfolioPage  projectTitle={SEL.projectTitle} projectLink={SEL.projectLink} projectSubtitle={SEL.projectSubtitle} headerParagraph={SEL.headerParagraph} bottomParagraph={SEL.bottomParagraph} src={SEL.src} img={SEL.img} />
      </Route>
    </BrowserRouter>
    
  );
}

export default App;
