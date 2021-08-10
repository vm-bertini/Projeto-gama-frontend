import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router';
import {Teste} from './img/teste'
import comprar from './img/comprar.jpg'
import import_contacts from './img/import_contacts.png'
import event_note from './img/event_note.png'
import { PageContainer } from '../../components/MainComponents';
import { PageArea } from './styled';



const Page = () => {

const {id} = useParams()
const response = () => {
    for (let i in Teste){
        if(Teste[i].id == id){
            return Teste[i]
        }
    }
}
    const [json] = useState(response)
    return (
        <PageContainer>
            <PageArea>
                <div className='book'>
                    <div className = 'cover' ><img src={'https://i.ibb.co/wKdJtgw/sombra-e-ossos.jpg'} alt={'Capa do livro: ' + json.title} /></div>
                    <div className='book_back'>
                        <div className='book_info'>
                            <div className='title'>
                                    {json.title}
                            </div>
                            <div className='info'>
                                <h3>{json.author}</h3>
                                <h2>{json.author}</h2>
                            </div>
                            <div className='leituras'>
                                <div className='leitura'>
                                    <img className ='img_template' src ={event_note} alt="Calendário" />
                                    <h4>{json.time} dias</h4>
                                </div>
                                <div className='leitura'>
                                    <img className ='img_template' src ={import_contacts} alt="Calendário" />
                                    <h4>{json.pageNumber} páginas</h4>
                                </div>
                            </div>
                            <div className='text'>
                                <div className='sinopse-title'>
                                    <h3 >Sinopse</h3>
                                </div>
                                <div className ='sinopse'>
                                    <p> Uma fábula sobre aceitação, amor, amadurecimento e o poder da memória. Da autora\
        de O filho da feiticeira, considerado o Livro do Ano pelo Washington Post Todo ano o\
        povo do Protetorado deixa um bebê como oferenda para a Bruxa que vive na floresta, na\
        esperança de que o sacrifício a impeça de aterrorizar sua pequena cidade protegida\
        pelos muros e pela Torre das Irmãs da Guarda. Mas, Xan, a Bruxa na floresta, ao\
        contrário do que eles acreditam, é bondosa. Ela vive em paz com um Monstro do\
        Pântano muito inteligente e um Dragão Perfeitamente Minúsculo.Todo ano ela resgata o\
        bebê deixado pelos Anciãos e o leva em segurança para uma família adotiva em uma\
        das Cidades Livres do outro lado da floresta. Durante a longa viagem, quando a comida\
        acaba, Xan alimenta os bebês com luz estelar. Em uma dessas ocasiões ela\
        acidentalmente oferece a um deles a luz do luar, dotando a menininha de uma magia\
        extraordinária.A bruxa então decide criar a menina “embruxada”, a quem chama de\
        Luna. Conforme o aniversário de treze anos da menina se aproxima, sua magia começa\
        a aflorar – e pode colocar em perigo a própria Luna e todos à sua volta.“A garota que\
        bebeu a lua é empolgante e denso como os clássicos Peter Pan e O Mágico de Oz.” –\
        The New York Times Book Review</p>
                                </div>
                            </div>
                            <div className='text'>
                                <div className='Autor-title'>
                                    <h3 >Sobre o autor</h3>
                                </div>
                                <div className ='Autor'>
                                    <p> ddddddddddddddddddddddddd</p>
                                </div>
                            </div>
                            <div className='button'>
                                <Link to={json.link}><img src= {comprar} className='comprar'></img></Link>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </PageArea>
        </PageContainer>
    );
}

export default Page;