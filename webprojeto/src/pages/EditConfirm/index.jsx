import React from "react";
import { Link } from "react-router-dom";
import './confirmação.css'

const ConfirmationPage = () => {
  return (
    <div className="app-container1">
      <h1>Usuário Atualizado com Sucesso!</h1>
      <p>As informações do usuário foram atualizadas.</p>
      <Link to="/listausuario">
        <button className="butao">Voltar para a Lista de Usuários</button>
      </Link>
    </div>
  );
};

export default ConfirmationPage;