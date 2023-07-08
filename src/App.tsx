import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer.components';
import Header from './components/Header.components';
import Formation from './pages/Formation.pages';
import Home from './pages/Home.page';
import Projet from './pages/Projet.pages';
import Service from './pages/Service.pages';
import Site from './pages/site.pages';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Site />}>
            <Route path='services' element={<Service />} />
            <Route path='formations' element={<Formation />} />
            <Route path='projets' element={<Projet />} />
            <Route path='' element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
