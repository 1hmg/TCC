import React from 'react';
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom'; // Importa useNavigate
import './usuario.css';
import api from "../../services/api";

const Usuario = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate(); // Usando useNavigate
  const [errorMessage, setErrorMessage] = React.useState('');

  const onSubmit = async (data) => {
    try {
      const response = await api.post("/register", data);
      console.log(response.data);
      // Redireciona para a página de confirmação
      navigate('/confirmacaocadastro'); // Redireciona para a página de confirmação
    } catch (error) {
      console.error(error);
      setErrorMessage('Erro ao cadastrar. Tente novamente.'); // Mensagem de erro
    }
  };

  return (
    <div className="app-container">
      <h1>Cadastro Usuário</h1>
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label>Nome</label>
          <input
            type="text"
            placeholder="Seu Nome"
            {...register('nome', { required: 'Nome é obrigatório' })}
          />
          {errors.nome && <p style={{ color: 'red' }}>{errors.nome.message}</p>}
        </div>

        <div className="form-group">
          <label>E-mail</label>
          <input
            type="email"
            placeholder="Seu Email"
            {...register('email', {
              required: 'E-mail é obrigatório',
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                message: 'E-mail inválido'
              }
            })}
          />
          {errors.email && <p style={{ color: 'red' }}>{errors.email.message}</p>}
        </div>

        <div className="form-group">
          <label>Senha</label>
          <input
            type="password"
            placeholder="Sua Senha"
            {...register('senha', {
              required: 'Senha é obrigatória',
              minLength: {
                value: 6,
                message: 'Senha deve ter no mínimo 6 caracteres'
              }
            })}
          />
          {errors.senha && <p style={{ color: 'red' }}>{errors.senha.message}</p>}
        </div>

        <div className="form-group">
          <button type="submit">Criar Conta</button>
        </div>
      </form>
    </div>
  );
};

export default Usuario;