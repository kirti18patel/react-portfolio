import React, { useState } from 'react';
import Nav from './components/Nav';
import './App.css';

function App() {
  const [currentCategory, setCurrentCategory] = useState('Home');

  return (
    <>
    <Nav currentCategory={currentCategory} setCurrentCategory={setCurrentCategory}/>
    </>
  );
}

export default App;