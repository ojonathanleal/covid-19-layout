import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Navbar from './navbar';
import Footer from './footer';
import Home from './home';
import Register from './register';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path="/register">
          <Register />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
