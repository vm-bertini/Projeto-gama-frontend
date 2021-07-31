import React, {useContext, useState} from 'react';
import { Link } from 'react-router-dom';
import { HeaderArea } from './styled';
import { context } from '../../../pages/Context/context';
import useApi from '../../../helpers/BookAPI'
import { ErrorMessage } from '../../MainComponents'

const Header = () => {
    const [error, setError] = useState('');

    let cx = useContext(context);

    const api = useApi()

    const handleDelete = async ()=>{
        const json = await api.logout();

        if(json.error) {
            setError(json.error);
        } else {
            window.location.href = '/'
        }
    }


    return (
        <HeaderArea>
            {error &&
                    <ErrorMessage>{error}</ErrorMessage>
                }
            <div className="container">
                <div className="logo">
                    <Link to="/">
                        <span className="logo-1">B</span>
                        <span className="logo-2">O</span>
                        <span className="logo-3">O</span>
                        <span className="logo-4">K</span>
                        <span className="logo-5">F</span>
                        <span className="logo-6">O</span>
                        <span className="logo-7">L</span>
                        <span className="logo-8">I</span>
                        <span className="logo-9">O</span>
                    </Link>
                </div>
                <nav>
                    <ul>
                        {cx &&
                            <>
                            <nav>
                            <li className="frase">
                                Olá, bem vindo(a) {cx.name}! 
                            </li>
                            <li>
                                <Link className="conta"to="/my-account"> Minha Conta </Link>
                            </li>
                            <li>
                                <Link className="button" to="/favorite">Favorito</Link>
                            </li>
                            <li onClick={handleDelete}>
                                <Link className="sair"to="/">Sair</Link>
                            </li>
                            </nav>
                            </>
                        }
                        {!cx &&
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