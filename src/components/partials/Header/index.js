import React, {useContext, useState} from 'react';
import { Link } from 'react-router-dom';
import { HeaderArea } from './styled';
import { context } from '../../../pages/Context/context';
import useApi from '../../../helpers/BookAPI'
import { ErrorMessage } from '../../MainComponents'
import Logo from './img/Logo.png'
import Bonequinho from './img/Bonequinho.png'

const Header = () => {
    const [error, setError] = useState('');

    let cx = useContext(context);

    const api = useApi()

    const handleDelete = async ()=>{
        const json = await api.logout()

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
                        <span className="logo-1"><img src={Logo}/></span>
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
                                <Link className="conta"to="/"> Sobre </Link>
                            </li>
                            <li>
                                <Link className="navegar" to="/navigation">Navegar</Link>
                            </li>
                            <li onClick={handleDelete}>
                            <Link className="navegar" to="/">sair</Link>
                            </li>
                            <li>
                            <Link to="/">
                            <span className="logo-2" ><img src={Bonequinho}/></span>
                            </Link>
                            </li>
                            </nav>
                            </>
                        }
                        {!cx &&
                            <>
                            <li>
                                <Link className="login"to="/signin"><button>Fazer login</button></Link>
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