import React, {useState} from 'react';
import { PageArea } from './styled';
import useApi from '../../helpers/BookAPI';
import Iniciante from './img/Iniciante.jpg';
import Intermediario from './img/Intermediario.jpg';
import Avançado from './img/Avançado.jpg';
import { useLocation, useHistory } from 'react-router';


import { PageContainer } from '../../components/MainComponents';

const Page = () => {

    const api = useApi()
    const history = useHistory()
    const location = useLocation()

    const [info, setInfo] = useState('')
    const [readerClassification, setreaderClassification] = useState('')

    if (location.state === undefined && info === ''){
        window.location.href = "/signup"
    }
    else if(info === ''){
        setInfo(location.state.info)
        }
    const {name} = info
    const {userName} = info
    const {email} = info
    const {password} = info
    const {postalCode} = info
    const handlesubmit = async(e) => {
        e.preventDefault()
        const json = await api.register(name, userName, email, password, postalCode, readerClassification)

        const message = json.message

        if (message ==='Novo Usuário criado'){
            window.location.href = '../signin'
        }

        else{
            if (typeof(message) === "object"){
                let error = ''
                for(let i in message){
                    error += message[i] +' '
                }
                history.push({
                    pathname: "/signup",
                    state: {message: error}
                })
            }else{
            history.push({
                pathname: "/signup",
                state: {message: message}
            })
            }
        }
        
    }

    return (

        <PageContainer>
            <PageArea>
        <section>
            <a href="../signup" target="_parent"><button className="botao1">Voltar</button></a>  
            <h1 >Selecione o nível que você se identifica</h1>
          </section>

            <form onSubmit ={handlesubmit}>
                <section className="flex">
                <div className="iniciante">
                    <img src={Iniciante}/>
                    <p>Iniciante</p>
                    <p>É para aquela que pessoa que amam ler, mas ainda são novas com essas práticas
                        e preferem ter mais tempo entre cada leitura.
                    </p>
                    <p>Média de páginas por dia: até 10.</p>
                    <br/>
                    <button onClick={() => setreaderClassification(1)} className="botao2">SELECIONAR!</button>
                </div>
            

                <div className="intermediario">
                    <img src={Intermediario}/>
                    <p>Intermediário</p>
                    <p>É para você que gosta de ler, mas tem um ritmo de leitura
                    rápido do que as outras pessoas, mas ainda assim não tem tanto tempo para ler!
                    </p>
                    <p>Média de páginas por dia: entre 11 e 30.</p>
                    <br/>
                    <button onClick={() => setreaderClassification(2)} className="botao2">SELECIONAR!</button>
                </div>

                <div className="avançado">
                    <img src={Avançado}/>
                    <p>Avançado</p>
                    <p>Para devoradores de livros que conseguem ler um livro inteiro em um dia se precisar!
                        Amantes da literatura e dominam essa área.
                    </p>
                    <p>Média de páginas por dia: mais que 31.</p>
                    <br/>
                    <button onClick={() => setreaderClassification(3)} className="botao2">SELECIONAR</button>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                </div>
        
                </section>
            </form>


        </PageArea>
        </PageContainer>
    );
}

    
export default Page;