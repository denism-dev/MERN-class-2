import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import NumberPage from './components/NumberPage';
import WordPage from './components/WordPage';
import StyledWordPage from './components/StyledWordPage';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/home' element={<HomePage />} exact />
        <Route path='/:word/:color1/:color2' element={<StyledWordPage />} />
        <Route path='/:word' element={<WordPage />} />
        <Route path='/:number' element={<NumberPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
