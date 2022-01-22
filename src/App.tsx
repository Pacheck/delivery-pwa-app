import React from 'react';
import { LandingPage } from './pages/landing-page';
import { NavBar } from './components/nav-bar';

function App() {
  return (
    <div className="App">
        <NavBar/>
        <LandingPage/>
    </div>
  );
}

export default App;
