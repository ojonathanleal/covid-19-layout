import React from 'react';

import Navbar from './navbar';
import Jumbotron from './jumbotron';
import Campaings from './campaings';
import Footer from './footer';

function App() {
  return (
    <React.Fragment>
      <Navbar />    
      <Jumbotron />
      <Campaings />
      <Footer />
    </React.Fragment>
  );
}

export default App;
