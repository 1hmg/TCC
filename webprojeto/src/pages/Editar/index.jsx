import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../../services/api";
import './editar.css';

const EditUser = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await api.get(`/alunos/${id}`);
        const { nome, email, senha } = response.data;
        setNome(nome);
        setEmail(email);
        setSenha(senha);
      } catch (err) {
        setError(err);
      }
    };

    fetchUserData();
  }, [id]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await api.put(`/alunos/${id}`, { nome, email, senha });
      navigate("/edit-confirm"); // Redireciona para a página de confirmação
    } catch (err) {
      console.error("Erro ao atualizar:", err);
      setError(err);
    }
  };

  if (error) return <p>Erro: {error.message}</p>;

  return (
    <div className="app-container">
      <h1>Editar Usuário</h1>
      <form onSubmit={handleUpdate}>
        <div className="form-group">
          <label>Nome</label>
          <input
            type="text"
            placeholder="Seu Nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>E-mail</label>
          <input
            type="email"
            placeholder="Seu Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Senha</label>
          <input
            type="password"
            placeholder="Sua Senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <button type="submit">Atualizar Conta</button>
        </div>
      </form>
    </div>
  );
};

export default EditUser;