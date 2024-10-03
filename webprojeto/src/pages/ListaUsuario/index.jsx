import React from "react";
import { Link } from 'react-router-dom';
import { useState } from "react";
import { useEffect } from "react";
import './listausuario.css';
import api from "../../services/api";


const DataList = () => {

 const[data, setData] = useState([]);
 const[loading, setLoading] = useState(true);
 const[error, setError] = useState(null);

 async function getCryptoData() {
  try {
    const response = await api.get('/alunos'); // Usando axios
    setData(response.data); // Atualiza o estado com os dados recebidos
  } catch (err) {
    setError(err); // Captura e define o erro, se houver
  } finally {
    setLoading(false); // Atualiza o loading para false
  }
}

async function handleDelete(id) {

  console.log("Tipo de ID:", typeof id); // Verifica o tipo do ID
  const numericId = typeof id === 'string' ? parseInt(id, 10) : id; // Converte apenas se for string

  console.log(`Tentando excluir o usuário com ID: ${numericId}`);
  try {
    const response = await api.delete(`/alunos/${numericId}`); // Requisição DELETE para a API
    setData(data.filter(item => item.id !== numericId)); // Atualiza o estado para remover o item excluído
  } catch (err) {
    console.error("Erro ao excluir:", err); // Log do erro
    setError(err); // Captura e define o erro, se houver
  }
}



useEffect(() => {
  getCryptoData();
}, []);

if (loading) return <p>Loading...</p>;
if (error) return <p>Erro: {error.message}</p>;
 return(



<table id="customers">
<h1>Lista de Usuários</h1>

<tr>
    <th>ID</th>
    <th>Nome</th>
    <th>E-mail</th>
    <th>Senha</th>
    <th>Editar</th>
    <th>Excluir</th>
  </tr>

{data.map(item =>(
      <tr key={item.id}>
        <td>
          {item.id}
        </td>
        <td>
          {item.nome}
        </td>
        <td>
        {item.email}
        </td>
        <td>
        {item.senha}
        </td>
        <Link to={`/edit/${item.id}`}>
                  <button className="center-button1">Editar</button>
        </Link>
        <td>
          <button className="center-button" onClick={() => handleDelete(item.id)}>Excluir</button>
        </td>
      </tr>
    ))}
  

</table>
);
};  


export default DataList;