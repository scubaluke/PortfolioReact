import React from 'react'
import Info from "./Info";
import MyServices from './MyServices'
import AboutMe from './AboutMe'
import MyWork from './MyWork';
import Footer from './Footer'
import Header from "./Header";

export default function HomePage() {
    return (
        <div className="App">
            <Header />
            <Info />
            <MyServices />
            <AboutMe />
            <MyWork />
            <Footer />
      </div>
    )
}
