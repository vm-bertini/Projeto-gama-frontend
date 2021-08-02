import React, { useState } from 'react';
import { PageArea } from './styled';
import useApi from '../../helpers/BookAPI';


import { PageContainer} from '../../components/MainComponents';

const Page = () => {
    const api = useApi();

    return(
        <PageContainer>
            <PageArea>
               <div ClassName="Foto--Inicial">
                   <img src="./img/Home.jpg"></img>
               </div>
            </PageArea>
        </PageContainer>
    );
}

export default Page;