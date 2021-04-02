import logo from './logo.svg';
import './App.css';
import React from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import Home from "./Home";
import {AuthProvider} from "./Auth"
import PrivateRoute from "./PrivateRoute"
import Login from "./Login";
import Signup from "./Signup";

function App() {
  return (
    <AuthProvider>
    <Router>
      <div>
        <PrivateRoute exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
      </div>
    </Router>
    </AuthProvider>
  );
}

export default App;
