import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router';
import useApi from '../../helpers/BookAPI';
import comprar from './img/comprar.jpg'
import import_contacts from './img/import_contacts.png'
import event_note from './img/event_note.png'
import { PageContainer } from '../../components/MainComponents';
import { PageArea } from './styled';



const Page = () => {

const {id} = useParams()
const api = useApi()
const [json, setJson] = useState(null)

const handleredirect = (e) => {
    window.location.assign(json.buy_link)
}

useEffect(() =>{
    async function handlejson(){
        const data = await api.get_id(id).catch((error) => {
            console.log(error)
        })
        setJson(data)
    }
    handlejson()
}, [api, id])
    return (
        <PageContainer>
            <PageArea>
            {json == null &&
            <>
            <h1 className ='h1'>Desculpe, nenhum livro com essas especificações foi encontrado </h1>
            </>}
            { json !== null &&
                <>
                <div className = 'content'>
                <div className='book'>
                    <div className = 'cover' ><img src={json.image} alt={'Capa do livro: ' + json.title} /></div>
                    <div className='book_back'>
                        <div className='book_info'>
                            <div className='title'>
                                    {json.title}
                            </div>
                            <div className='info'>
                                <h3>{json['Author.name']}</h3>
                                <h2>{json['Genres.name']}</h2>
                            </div>
                            <div className='leituras'>
                                <div className='leitura'>
                                    <img className ='img_template' src ={event_note} alt="Calendário" />
                                    <h4>{json.time_to_read} dias</h4>
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
                                    <p> {json.synopsis} </p>
                                </div>
                            </div>
                            <div className='text'>
                                <div className='Autor-title'>
                                    <h3 >Sobre o autor</h3>
                                </div>
                                <div className ='Autor'>
                                    <p> {json['Author.description']} </p>
                                </div>
                            </div>
                            <div className='button'>
                                <button onClick={handleredirect}><img src= {comprar} className='comprar'></img></button>
                            </div>
                            
                        </div>
                    </div>
                </div>

                </div>
            </>}
            </PageArea>
        </PageContainer>
    );
}

export default Page;