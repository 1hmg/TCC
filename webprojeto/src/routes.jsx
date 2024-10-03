import {BrowserRouter, Routes, Route } from 'react-router-dom'

import Header from './pages/Header';
import Home from './pages/Home';
import Usuario from './pages/Usuario';
import ListaUsuario from './pages/ListaUsuario';
import EditUser from './pages/Editar';
import EditConfirm from './pages/EditConfirm'
import CadastroConfirm from './pages/CadastroConfirm';

function RoutesApp(){
 return(
    <BrowserRouter>
        <Header />
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/usuario" element={<Usuario/>}/>
                <Route path="/listausuario" element={<ListaUsuario/>}/>
                <Route path="/edit/:id" element={<EditUser />} />
                <Route path="/edit-confirm" element={<EditConfirm />} /> 
                <Route path='/confirmacaocadastro' element={<CadastroConfirm />} />
            </Routes>
    </BrowserRouter>
 )
}
export default RoutesApp;
