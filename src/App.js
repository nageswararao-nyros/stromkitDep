import React from 'react';
import Login from './components/login'
import Home from './components/home'
import logo from './logo.svg';
import './App.css';
import { Route, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <div className="App">
       <Route exact path="/" component={Home} />
       <Route exact path="/login" component={Login} />
      </div>
    </BrowserRouter>
    </div>
  );
}

export default App;
