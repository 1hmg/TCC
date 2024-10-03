import React from 'react';
import { useNavigate } from 'react-router-dom';


const CadastroConfirm = () => {
  const navigate = useNavigate();

  return (
    <div className="confirmation-container">
      <h1>Cadastro Realizado com Sucesso!</h1>
      <p>Seu usuário foi cadastrado com sucesso.</p>
      <div className="button-group">
        <button onClick={() => navigate('/usuarios')}>Ver Lista de Usuários</button>
        <button onClick={() => navigate('/')}>Voltar para Home</button>
      </div>
    </div>
  );
};

export default CadastroConfirm;