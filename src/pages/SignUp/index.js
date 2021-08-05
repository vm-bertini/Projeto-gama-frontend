import React, { useState } from 'react';
import { PageArea } from './styled';
import useApi from '../../helpers/BookAPI';
import { useLocation } from 'react-router';
import queryString from "query-string"



import { PageContainer, PageTitle, ErrorMessage } from '../../components/MainComponents';

const Page = () => {
    const api = useApi();
    const {search} = useLocation()
    const { api_error } = queryString.parse(search)

    const [name, setName] = useState('');
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [postalCode, setPostalCode] = useState('');
    const [readerClassification, setreaderClassification] = useState('');
    const [disabled, setDisabled] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setDisabled(true);
        setError('');

        if(password!== confirmPassword) {
            setError('A senha inserida está incorreta');
            setDisabled(false);
            return;
        }

        const json = await api.register(name, userName, email, password, postalCode, readerClassification);

        if(json.error) {
            setError(json.error);
        } else {
            window.location.href = '/'
        }

        setDisabled(false);

    }

    return(
        <PageContainer>
            <PageTitle>Cadastro</PageTitle>
            <PageArea>
                {error &&
                    <ErrorMessage>{error}</ErrorMessage>
                }
                {api_error &&
                    <ErrorMessage>{api_error}</ErrorMessage>
                }
                <form onSubmit={handleSubmit}>
                <label className="area">
                        <div className="area--titt">Nome Completo</div>
                        <div className="area--input">
                            <input 
                            type="text" 
                            disabled={disabled} 
                            value={name}
                            onChange={e=>setName(e.target.value)}
                            required
                        />
                        </div>
                        <br/>
                    </label>
                    <label className="area">
                        <div className="area--titt">Nome de Usuário</div>
                        <div className="area--input">
                            <input 
                            type="text" 
                            disabled={disabled} 
                            value={userName}
                            onChange={e=>setUserName(e.target.value)}
                            required
                        />
                        </div>
                        <br/>
                    </label>
                    <label className="area">
                        <div className="area--tittt">Código postal</div>
                        <div className="area--input">
                            <input 
                            type="number" 
                            disabled={disabled} 
                            value={postalCode}
                            onChange={e=>setPostalCode(e.target.value)}
                            required
                        />
                        </div>
                        <br/>
                    </label>
                    <label className="area">
                        <div className="area--title">E-mail</div>
                        <div className="area--input">
                            <input 
                            type="email" 
                            disabled={disabled} 
                            value={email}
                            onChange={e=>setEmail(e.target.value)}
                            required
                        />
                        </div>
                        <br/>
                    </label>
                    <label className="area">
                        <div className="area--title">Senha</div>
                        <div className="area--input">
                            <input 
                            type="password" 
                            disabled={disabled}
                            value={password}
                            onChange={e=>setPassword(e.target.value)} 
                            required
                        />
                        </div>
                        <br/>
                    </label>
                    <label className="area">
                        <div className="area--titt">Confirmar senha</div>
                        <div className="area--input">
                            <input 
                            type="password" 
                            disabled={disabled}
                            value={confirmPassword}
                            onChange={e=>setConfirmPassword(e.target.value)} 
                            required
                        />
                        </div>
                        <br/>
                    </label>
                    <label className="area">
                        <div className="area--title"></div>
                        <div className="area--input">
                        <a href="../livros" target="_parent" className="button"><button className="button">Criar Cadastro</button></a>    
                    <label className="area">
                        <div className="area--tit"></div>
                    </label>
                    
                    </div>
                    </label>
                </form>
            </PageArea>
        </PageContainer>
    );
}

export default Page;