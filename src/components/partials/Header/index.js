import React from 'react';
import { Link } from 'react-router-dom';
import { HeaderArea } from './styled';

import { isLogged } from '../../../helpers/AuthHandler';

const Header = () => {
    let logged = isLogged();

    return (
        <HeaderArea>
            <div className="container">
                <div className="logo">
                    <Link to="/">
                        <span Class="logo-1">B</span>
                        <span Class="logo-2">O</span>
                        <span Class="logo-3">O</span>
                        <span Class="logo-4">K</span>
                        <span Class="logo-5">F</span>
                        <span Class="logo-6">O</span>
                        <span Class="logo-7">L</span>
                        <span Class="logo-8">I</span>
                        <span Class="logo-9">O</span>
                    </Link>
                </div>
                <nav>
                    <ul>
                        {logged &&
                            <>
                            <nav>
                            <li>
                                <Link className="conta"to="/my-account"> Minha Conta </Link>
                            </li>
                            <li>
                                <Link className="button" to="/favorite">Favorito</Link>
                            </li>
                            <li>
                                <Link className="sair"to="/logout">Sair</Link>
                            </li>
                            </nav>
                            </>
                        }
                        {!logged &&
                            <>
                            <li>
                                <Link className="frase"to="/signin">Olá, bem vindo(a)! </Link>
                            </li>
                            <li>
                                <Link className="login"to="/signin">Entre ou cadastre-se</Link>
                            </li>
                            </>
                        }
                    </ul>
                    </nav>
            </div>
        </HeaderArea>
    );
}

export default Header;