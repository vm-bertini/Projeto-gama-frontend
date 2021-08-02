import React, { useState, useEffect } from 'react';
import { PageArea } from './styled';
import useApi from '../../helpers/BookAPI';



import { PageContainer, PageTitle, ErrorMessage } from '../../components/MainComponents';

const Page = () => {
    const api = useApi();

    const [name, setName] = useState('');
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [postalCode, setPostalCode] = useState('');
    const [readerClassification, setreaderClassification] = useState('');
    const [disabled, setDisabled] = useState(false);
    const [error, setError] = useState('');

    const [stateList, setStateList] = useState('');

    useEffect(()=>{
        const getStates = async () => {
            const slist = await api.getStates();
            setStateList(slist);
        }
        getStates();
    }, []);

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
                    </label>
                    <label className="area">
                        <div className="area--titt">Nível de leitura</div>
                        <div className="area--input">
                            <select className="area--option" value={readerClassification} onChange={e=>setreaderClassification(e.target.value)} required>
                                <option>Selecione</option>
                                
                               { /* {stateList.map((i, k)=>
                                <option key={k} value={i._id}>{i.name}</option>
                                    )}  */}
                            </select>
                        </div>
                    </label>
                    <label className="area">
                        <div className="area--title"></div>
                        <div className="area--input">
                            <button1 disabled={disabled}>Criar Cadastro</button1>      
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