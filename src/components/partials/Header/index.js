import React, {useContext, useState} from 'react';
import { Link } from 'react-router-dom';
import { HeaderArea } from './styled';
import { context } from '../../../pages/Context/context';
import useApi from '../../../helpers/BookAPI'
import { ErrorMessage } from '../../MainComponents'
import Logo from './img/Logo.png'
import menu from './img/menu.png'
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
                        <span className="logo-1"><img src={Logo} alt='Logo'/></span>
                    </Link>
                </div>
                        {cx &&
                            <>
                            <input type='checkbox' id='check'></input>
                            <label id='icone' htmlFor='check'><img src={menu}></img></label>
                            <div className='barra'>
                                <nav>
                                    <li>
                                        Olá, bem vindo(a) {cx.name}! 
                                    </li>
                                    <li>
                                        <Link to="/">
                                            <span className="logo-2" ><img src={Bonequinho} className='avatar' alt='foto de perfil'/></span>
                                        </Link>
                                    </li>
                                    
                                    <li>
                                        <Link className="navegar" to="/navigation">Navegar</Link>
                                    </li>
                                    <li>
                                        <Link className="conta"to="/"> Sobre </Link>
                                    </li>
                                    <li onClick={handleDelete}>
                                        <Link className="navegar" to="/">sair</Link>
                                    </li>
                                </nav>
                            </div>
                            </>
                        }
                        {!cx &&
                            <>
                                <Link className="login"to="/signin"><button>Fazer login</button></Link>
                            </>
                        }
            </div>
        </HeaderArea>
    );
}

export default Header;