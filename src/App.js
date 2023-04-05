
import './App.css';
import NavbarTop from './components/Navbar';
import AboutMe from './pages/aboutme';
import ContactPage from './pages/contact';
import ProjectPage from './pages/projects';
import ErrorPage from './components/Error';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from 'react';
import { ReactDOM } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import StarSky from "react-star-sky";
import "react-star-sky/dist/index.css";
import { useStarField } from "starfield-react";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavbarTop />
      </header>
      <StarSky
        // debugFPS={true}
        backgroundColor={[18, 15, 20]}
        isPageBackground={true}
        shuffle={0}
        border
        frameRate={144}
        style={{
          margin: "-5px",

          width: "100%",
          height: "100%",
          opacity: 0.4,
        }}
      />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AboutMe />} />
          <Route path="/projects" element={<ProjectPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
