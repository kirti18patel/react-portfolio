import React, { useState } from 'react';
import About from './components/About';
import Home from './components/Home';
import Contact from './components/Contact';
import Nav from './components/Nav';
import Skills from './components/Skills';
import Work from './components/Work';
import './App.css';

function App() {
  const [currentCategory, setCurrentCategory] = useState('Home');

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
    <Nav currentCategory={currentCategory} setCurrentCategory={setCurrentCategory}/>
    {renderCategory(currentCategory)}
    </>
  );
}

export default App;