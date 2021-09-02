import React, { useState, useEffect } from 'react';
import About from './components/About';
import Home from './components/Home';
import Contact from './components/Contact';
import Nav from './components/Nav';
import Skills from './components/Skills';
import Work from './components/Work';
import './App.css';

function App() {
  const [currentCategory, setCurrentCategory] = useState('Home');

  useEffect(() => {
    document.title = `Kirti | ${currentCategory}`;
  }, [currentCategory])

  const renderCategory = () => {
    switch (currentCategory) {
      case 'About':
        return <About />;
      case 'Skills':
        return <Skills />;
      case 'Contact':
        return <Contact />;
        case 'Work':
          return <Work />;
      default:
        return <Home />;
    }
  };

  return (
    <>
      <div class="social-icons">
        <a href="https://linkedin.com/in/kirtipatel18 " class="icons linkedin">
            <i class="fa fa-linkedin"></i>
        </a>
        <a href="https://github.com/kirti18patel" class="icons github">
            <i class="fa fa-github"></i>
        </a>
    </div>
    <Nav currentCategory={currentCategory} setCurrentCategory={setCurrentCategory}/>
    {renderCategory(currentCategory)}
    </>
  );
}

export default App;