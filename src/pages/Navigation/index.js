import React, {useEffect, useState} from 'react'
import { PageArea } from './styled';
import {useHistory, useLocation, Link} from 'react-router-dom'
import { PageContainer } from '../../components/MainComponents';
import useApi from '../../helpers/BookAPI';

import Seta from './img/Seta.png'
import import_contacts from './img/import_contacts.png'
import event_note from './img/event_note.png'
import Vector from './img/Vector.jpg'
import {Teste} from './img/teste'

const Page = () => {

    const api = useApi()
    
    const [Search, setSearch] = useState(undefined)
    const [filter, setfilter] = useState(undefined)
    const [typeFilter, settypeFilter] = useState(undefined)
    const [json, setJson] = useState('')
    const [json_t, setJson_t] = useState('fdgsdfg')

    const history = useHistory()
    const {search} = useLocation()

    useEffect(() => {
        console.log('OI')
        console.log(search)
        async function getdata(){
            console.log(await api.navigation(search))
            
        }
        getdata()
        setJson(Teste)
    },[])


    const handleFilters = (e)=>{
        e.preventDefault()
        let query_send = '?'
        let filter_obj = {
            search: Search,
            typeFilter:typeFilter,
            filter: filter,
        }
        let obj_prop = Object.getOwnPropertyNames(filter_obj)

        for(let i in obj_prop){
            query_send += obj_prop[i] + '=' +filter_obj[obj_prop[i]] + '&&'
        }
        if(window.location.pathname+search == '/navigation/' + query_send){
            window.location.reload()
        }
        history.push( '/navigation/' + query_send)

    }

    return(
        <PageContainer>
            <PageArea>
            <form onSubmit={handleFilters}>
            <h1 className='title'>Encontre seu próximo livro!</h1>
            <div className='search-bar'>
                <input type='text' name="search-bar" onChange={event =>{setSearch(event.target.value)}}></input>
            </div>
            <div className='search-options'>
                <label className='label'>
                    <input  className='input' id='genero' type="radio" name="filter-type" value='1' onClick={event => {settypeFilter(event.target.value)}}/>
                    <label className='cor'>Gênero</label>
                    <span></span>
                </label>
                <label className='label'>
                    <input className='input' id='autor' type="radio" name="filter-type" value='2' onChange={event => {settypeFilter(event.target.value)}}/>
                    <label className='cor'>Autor</label>
                    <span></span>
                </label>
                
                

                {typeFilter == 2 && <>
                    <select className='dropdown' onChange={event =>{setfilter(event.target.value)}} defaultValue={'DEFAULT'}>
                        <option value='DEFAULT' disabled className='dontshow'>Autores</option>
                        <option value="" ></option>
                        <option value="tesla">Tesla</option>
                        <option value="volvo">Volvo</option>
                        <option value="mercedes">Mercedes</option>
                    </select>
                </>}
                {typeFilter == 1 && <>
                    <select className='dropdown' onChange={event =>{setfilter(event.target.value)}} defaultValue={'DEFAULT'}>
                        <option value='DEFAULT' disabled className='dontshow'>Gêneros</option>
                        <option value="" ></option>
                        <option value="fantasia">fantasia</option>
                        <option value="volvo">Volvo</option>
                        <option value="mercedes">Mercedes</option>
                    </select>
                </>}
                {typeFilter === undefined && <>
                    <select className='dropdown' onChange={event =>{setfilter(event.target.value)}} defaultValue={'DEFAULT'}>
                        <option value='DEFAULT' disabled className='dontshow'>Selecione Autor ou Gênero</option>
                    </select>
                </>} 
                <input className = 'vector'type="image" src={Vector} name="submit" alt="submit"/>
            </div>
            </form>
            <div className='books'>
               {json === 'error' &&
               <>
               <h1>Desculpe, nenhum livro com essas especificações foi encontrado </h1>
               </>}
               {json !== '' && json !== 'error' &&
               <>
               {json.map((json, key) => {
                   return (
                    <div className='book' key={key}>
                        <img className = 'cover' src={json.image} alt={'Capa do livro: ' + json.title} />
                        <div className='title'>
                            {json.title}
                        </div>
                        <div className='info'>
                            <h3>{json.author}</h3>
                            <h2>{json.author}</h2>
                        </div>
                        <div className='leitura'>
                            <img className ='img_template' src ={event_note} alt="Calendário" />
                            <h4>{json.time} dias</h4>
                            
                        </div>
                        <div className='leitura'>
                            <img className ='img_template' src ={import_contacts} alt="Calendário" />
                            <h4>{json.pageNumber} páginas</h4>
                        </div>
                        <div className='button'>
                            <Link className='arrow'to={'/Detalhes/'+json.id} ><img className='arrow' src ={Seta} alt="Calendário" /></Link>
                        </div>
                        
                    </div>
                   )
               })}
               
               </>}
            </div>

        </PageArea>
        </PageContainer>
        
        
    )
}

export default Page