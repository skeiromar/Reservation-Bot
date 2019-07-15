import React from 'react';
import logo from './logo.svg';
import './App.css';
import './App.sass';
import ReservationList from './components/reservations/ReservationList';
import ResturantList from './components/reservations/ResturantList';
import { HashRouter, Route, Switch } from 'react-router-dom';


function App() {
  return (
    <HashRouter>
      <div className="App">
           <section className="section">
        <div className="container">
          <Switch>
            <Route exact path="/" component={ResturantList} />
            <Route exact path="/reservations/:name" component={ReservationList} />
          </Switch>
        </div>
      </section>
      </div>
   
    </HashRouter>
  );
}

export default App;
