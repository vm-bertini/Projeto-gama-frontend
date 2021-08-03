import React, { useState } from 'react';
import { PageArea } from './styled';
import useApi from '../../helpers/BookAPI';
import Foto from './img/Home.jpg'
import { Link } from 'react-router-dom';
import Imagem from './img/Imagem.jpg'

import { PageContainer1} from '../../components/MainComponents';

const Page = () => {
    const api = useApi();

    return(
        <PageContainer1>
            <PageArea>
                <div className="Foto">
               <div className="Foto--Inicial">
                   <img src={Foto}/>
               </div>
               </div>
               <div>
               <div className="leitura">
            <div className="area--leitura">Quero encontra minha próxima leitura!</div>
            <div className="area--input">
            <button>Começar</button>
            </div>
            </div>
            <div className="Imagem">
            <div className="Foto--Imagem">
            <img src={Imagem}/>
            </div>
            </div>    
            <Link to="/Livros">Livros</Link>
        </div>
            </PageArea>
        </PageContainer1>
    );
}

export default Page;