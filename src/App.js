import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainMenu from './components/MainMenu';
import MaterialSelection from './components/MaterialSelection';
import ConstructionSelection from './components/ConstructionSelection';
import Result from './components/Result';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainMenu />} />
        <Route path="/materials" element={<MaterialSelection />} />
        <Route path="/construction" element={<ConstructionSelection />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </Router>
  );
}

export default App;

