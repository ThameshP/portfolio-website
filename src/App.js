
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

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavbarTop/>
      </header>
    
  
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AboutMe/>}/>
          <Route path="/projects" element={<ProjectPage/>}/>
          <Route path="/contact" element={<ContactPage/>}/> 
          <Route path="*" element={<ErrorPage/>}/>    
        </Routes>
      </BrowserRouter>

  

    </div>
  );
}

export default App;
