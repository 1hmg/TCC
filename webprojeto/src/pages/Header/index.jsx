import './header.css';
import { Link } from 'react-router-dom'

function Header(){

    return(
            <header>
                <a href="/" className="logo">Onfit</a>
                <a href="/usuario" className="usuario">Cadastrar Usuário</a>
                <a href="/listausuario" className="usuario">Listar Usuário</a>
            </header>

    )

}

export default Header;

