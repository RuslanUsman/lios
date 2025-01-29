import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import MainMenu from './components/MainMenu';
import ConstructionSelection from './components/ConstructionSelection';
import MaterialSelection from './components/MaterialSelection';
import Result from './components/Result';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<MainMenu />} />
          <Route path="/construction" element={<ConstructionSelection />} />
          <Route path="/materials" element={<MaterialSelection />} />
          <Route path="/result" element={<Result />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;


