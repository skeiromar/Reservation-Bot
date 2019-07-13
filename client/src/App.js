import React from 'react';
import logo from './logo.svg';
import './App.css';
import ReservationList from './components/reservations/ReservationList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ReservationList />
      </header>
    </div>
  );
}

export default App;
