import React from 'react';

function EC(props) {
  if (props.show) {  
    return (    
      <React.Fragment>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Primeiro Nome</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
          <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Último Nome</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
          <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </React.Fragment>
    );
  }
}

export default EC;
