import "./login.scss"

import React from 'react';

const Login = () => {
  return (
    <div className="login-wrapper">
      <div className="login-container">

        <div className="login-header"><img src="./cycleus-marine.png"/></div>

        <h1>Faça seu login</h1>

        <form>
          <input className="login-input"type="text" placeholder="aluno@matricula.unb.br"></input>
          <input className="login-input" type="password" placeholder="Digite sua senha"></input>
        </form>

        <button className="submit-btn"><strong>Login</strong></button>

      </div>
    
    </div>

  );
};

export default Login;