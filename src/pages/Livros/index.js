import React, {useState} from 'react';
import { PageArea } from './styled';
import useApi from '../../helpers/BookAPI';
import Iniciante from './img/Iniciante.jpg';
import Intermediario from './img/Intermediario.jpg';
import Avançado from './img/Avançado.jpg';
import { useLocation, useHistory } from 'react-router';
import seta from './img/Seta.png'


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
           <img onClick={() =>{window.history.back()}} className='botao1' src ={seta} alt="imagem" />
           <h1 >Selecione o nível que você se identifica</h1>
          </section>
<br/>
            <form onSubmit ={handlesubmit}>
                <section className="flex">
                <div className="iniciante">
                <div className="box">
                <img src={Iniciante} alt="imagem" />
                <p></p>
                <h3>Iniciante</h3>
                <p></p>
                <p>É para aquelas que pessoas que amam ler, mas ainda são novas com essa prática
                e preferem ter mais tempo entre cada leitura.
                </p>
                <h5>Média de páginas por dia: até 10.</h5>
                <br/>
                <button onClick={() => setreaderClassification(1)} className="botao2">Quero este!</button>
                </div>
                </div>

                <div className="intermediario">
                <div className="box">
                <img src={Intermediario} alt="imagem" />
                <p></p>
                <h3>Intermediário</h3>
                <p></p>
                <p>É para você que gosta de ler, e tem um ritmo de leitura mais
                rápido que outras pessoas, mas não tem tanto tempo para ler!
                </p>
                <h5>Média de páginas por dia: entre 11 e 30.</h5>
                <br/>
                <button onClick={() => setreaderClassification(2)} className="botao2">Quero este!</button>
                </div>
                </div>
    
                <div className="avançado">
                <div className="box">
                <img src={Avançado}  alt="imagem"/>
                <p></p>
                <h3>Avançado</h3>
                <p></p>
                <p>Para devoradores de livros, que conseguem ler um livro inteiro em um dia se precisar!
                Amantes da literatura e dominam essa área.
                </p>
                <h5>Média de páginas por dia: mais que 31.</h5>
                <br/>
                <button onClick={() => setreaderClassification(3)} className="botao2">Quero este!</button>
                </div>
                </div>
                   
                </section>
            </form>


        </PageArea>
        </PageContainer>
    );
}

    
export default Page;