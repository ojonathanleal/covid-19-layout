import React from 'react';

import Ong from './ong';
import Ec from './ec';
import Donor from './donor';

function Register() {
  const code = 'ORGANIZATION';

  const WhoIamSelected = (event) => {
    alert(event.target.value);
  };

  return (
    <div className="container text-center">
      <h1>Faça seu cadastro</h1>
      <p>* Todos os dados são obrigatórios</p>
      <form>
        <div className="form-group">
          <label htmlFor="exampleFormControlSelect1">Quem sou eu</label>
          <select className="form-control" id="exampleFormControlSelect1" onChange={WhoIamSelected}>
            <option value="ORGANIZATION">ONG</option>
            <option value="MARKET">Estabelecimento Comercial</option>
            <option value="CONTRIBUTOR">Doador</option>
          </select>
        </div>
        <Ong show={code === 'ORGANIZATION'} />
        <Ec show={code === 'MARKET'} />
        <Donor show={code === 'CONTRIBUTOR'} />
      </form>
    </div>
  );
}

export default Register;
