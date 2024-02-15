import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import GameBoard from './components/GameBoard';

function App() {
  console.log('App rendering...'); // Console log for rendering

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/gameboard" element={<GameBoard />} />
          <Route path="/" element={
            <>
              <header className="App-header">
                <h1>Welcome to Minesweeper</h1> {/* Changed <p> to <h1> for the title */}
                <p>Click on the board to start playing!</p>
              </header>
            </>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
