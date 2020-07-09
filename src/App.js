import React from 'react';
import './App.css';
import Navbar from './components/navBar'
import Counters from "./components/counters"

function App() {
  return (
    <React.Fragment>
    <Navbar/>
    <main className="container">
      <Counters/>
    </main>
    </React.Fragment>
  );
}

export default App;
