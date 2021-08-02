import React, { useState } from 'react';
import { PageArea } from './styled';
import useApi from '../../helpers/BookAPI';
import Foto from './img/Home.jpg'
import { Link } from 'react-router-dom';

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
            <Link to="/Livros">Livros</Link>
        </div>
            </PageArea>
        </PageContainer1>
    );
}

export default Page;