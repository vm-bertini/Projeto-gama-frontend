import React, { useState } from 'react';
import { PageArea } from './styled';
import useApi from '../../helpers/BookAPI';
import Cookie from 'js-cookie'



import { PageContainer, PageTitle, ErrorMessage } from '../../components/MainComponents';

const Page = () => {
    const api = useApi();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [disabled, setDisabled] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setDisabled(true);
        setError('');

        const json = await api.login(email, password)
        .then(res => {
            if(res.error) {
                setError(res.error);
            } else {
                Cookie.set('status', "Logado")
                window.location.href = '/navigation'
            }
        })
        .catch((error) => {
            window.location.href = '/signin'
        })

        

        setDisabled(false);

    }

    return(
        <PageContainer>
            <PageTitle>Faça seu login</PageTitle>
            <br/>
            <PageArea>
                {error &&
                    <ErrorMessage>{error}</ErrorMessage>
                }
                <form onSubmit={handleSubmit}>
                    <label className="area">
                        <div className="area--title">E-mail ou Usuário</div>
                        <div className="area--input">
                            <input  
                            disabled={disabled} 
                            value={email}
                            onChange={e=>setEmail(e.target.value)}
                            required
                        />
                        </div>
                        <br/>
                    </label>
                    <label className="area">
                        <div className="area--tittle">Senha</div>
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
                        <div className="area--title"></div>
                        <div className="area--input">
                            <button className="button1" disabled={disabled}>Entrar</button>      
                        <label className="area">
                        <div className="area--cadastre">Não possui conta ?</div>
                        </label>
                        <label className="area">
                        <div className="area--button"></div>
                        <div className="area--input">
                        <a href="../signup" target="_parent"><button className="button2" type="button" disabled={disabled} >Cadastre-se</button></a>
                    </div>
                    <label className="area">
                        <div className="area--tit"></div>
                    </label>
                    </label>
                    </div>
                    </label>
                </form>
            </PageArea>
        </PageContainer>
    );
}

export default Page;