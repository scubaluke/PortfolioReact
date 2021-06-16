import './App.css';
import { BrowserRouter,  Route } from 'react-router-dom'
import Info from "./components/Info";
import MyServices from './components/MyServices'
import AboutMe from './components/AboutMe'
import MyWork from './components/MyWork';
import Footer from './components/Footer'
import PortfolioPage from './components/PortfolioPage';

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
    <Route path="/meditation">
        <PortfolioPage/>
      </Route>
    </BrowserRouter>
  );
}

export default App;
