import React from 'react';

import './styles.css';

function Jumbotron() {
  return (
    <div className="jumbotron mb-0 text-center">
      <form action="">
        <h4>A forma mais rápida de ajudar</h4>
        <input className="mt-3" type="text" placeholder="Digite a busca..." />
      </form>
    </div>
  );
}

export default Jumbotron;
