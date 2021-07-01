import './App.css';
import { BrowserRouter,  Route } from 'react-router-dom'
import PortfolioPage from './components/PortfolioPage';
import Resume from './components/Resume'
import HomePage from './components/HomePage';


function App() {
  return (
    <BrowserRouter >
    <Route path="/" component={HomePage}  exact />
      <Route path="/resume" component={Resume} />
      <Route path="/proshop" component={PortfolioPage}/>
      <Route path="/outstandingly" component={PortfolioPage}/>
      <Route path="/meditation" component={PortfolioPage} />
      <Route path="/mjPuppet" component={PortfolioPage} />
      <Route path="/SEL" component={PortfolioPage}/>
      <Route path="/video" component={PortfolioPage}/>

    </BrowserRouter>
  );
}

export default App;
