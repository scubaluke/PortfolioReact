import './App.css';
// import { Router } from 'react-router-dom'
import Info from "./components/Info";
import MyServices from './components/MyServices'
import AboutMe from './components/AboutMe'
import MyWork from './components/MyWork';
import Footer from './components/Footer'

function App() {
  return (
    // <Router >
      <div className="App">
        <Info/>
        <MyServices />
        <AboutMe />
        <MyWork />
        <Footer />
      </div>
    // </Router>
  );
}

export default App;
