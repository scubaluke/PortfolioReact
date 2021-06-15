import './App.css';
import { Router } from 'react-router-dom'
import Info from "./components/Info";
import MyServices from './components/MyServices'
import AboutMe from './components/AboutMe'
import MyWork from './components/MyWork';


function App() {
  return (
    // <Router >
      <div className="App">
        <Info/>
        <MyServices />
        <AboutMe />
        <MyWork />
      </div>
    // </Router>
  );
}

export default App;
