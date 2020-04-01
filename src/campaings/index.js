import React, { useState, useEffect } from 'react';

import api from '../api';

import './styles.css';

import bg from '../assets/img/background.jpg'

function Campaings() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const findAll = async () => {
      const { data } = await api.get('/campaign/find/all');
      setItems(data);
    }
    findAll();
  });

  return (
    <div className="container">
      <div className="py-5">
        <div className="row">
        {items.map(item => (
          <div className="col" key={item._id}>
            <div className="card my-4" style={ {width: '18rem'} }>
              <img src={bg} className="card-img-top" alt="..." />
              <div className="card-body">
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
          </div>
        ))}
        </div>
      </div>
    </div>
  );
}

export default Campaings;
