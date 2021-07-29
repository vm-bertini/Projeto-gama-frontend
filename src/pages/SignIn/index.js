import React, { useState } from 'react';
import { PageArea } from './styled';
import useApi from '../../helpers/BookAPI';
import { doLogin } from '../../helpers/AuthHandler';

import { PageContainer, PageTitle, ErrorMessage } from '../../components/MainComponents';

const Page = () => {
    const api = useApi();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberPassword, setRememberPassword] = useState(false);
    const [disabled, setDisabled] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setDisabled(true);

        const json = await api.login(email, password);

        if(json.error) {
            setError(json.error);
        } else {
            doLogin(json.token, rememberPassword);
            window.location.href = '/';
        }

        setDisabled(false);

    }

    return(
        <PageContainer>
            <PageTitle >ENTRAR COM E-MAIL E SENHA</PageTitle>
            <PageArea>
                {error &&
                    <ErrorMessage>{error}</ErrorMessage>
                }

                <form onSubmit={handleSubmit}>
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
                    </label>
                    <label className="area">
                        <div className="area--esqueci">Esqueci minha senha</div>
                        <div className="area--input"></div>
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
                    </label>
                    <label className="area">
                        <div className="area--cadastre">Ainda não sou usuário. Cadastre-se aqui</div>
                    </label>
                    <label className="area">
                        <div className="area--title">Lembrar Senha</div> 
                        <div className="area--check">
                            <input 
                            type="checkbox" 
                            disabled={disabled} 
                            value={password}
                            onChange={e=>setPassword(e.target.value)} 
                            checked={rememberPassword}
                            onChange={()=>setRememberPassword(!rememberPassword)}
                        />
                        </div>
                    </label>
                    <label className="area">
                        <div className="area--title"></div>
                        <div className="area--input">
                            <button disabled={disabled}>Entrar</button>
                        </div>
                    </label>
                </form>
            </PageArea>
        </PageContainer>
    );
}

export default Page;