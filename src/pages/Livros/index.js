import React, { useState } from 'react';
import { PageArea } from './styled';
import useApi from '../../helpers/BookAPI';
import Iniciante from './img/Iniciante.jpg';
import Intermediario from './img/Intermediario.jpg';
import Avançado from './img/Avançado.jpg';


import { PageContainer } from '../../components/MainComponents';

const Page = () => {
    return (

        <PageContainer>
            
            <PageArea>
        <section>
        
        
        <a href="../signup" target="_parent"></a>  <button className="botão1">Voltar</button>  
          <h1 >Selecione o nível que você se identifica</h1>

          </section>

          <section className="flex">
            <div className="iniciante">
                <img src={Iniciante}/>
                <p>Iniciante</p>
                <p>É para aquela que pessoa que amam ler, mas ainda são novas com essas práticas
                    e preferem ter mais tempo entre cada leitura.
                </p>
                <p>Média de páginas por dia: até 10.</p>
                <br/>
                <a href="./home" target="_parent"></a><button className="botão1">Voltar</button>
            </div>
         

            <div className="intermediario">
                <img src={Intermediario}/>
                <p>Intermediário</p>
                <p>É para você que gosta de ler, mas tem um ritmo de leitura
                rápido do que as outras pessoas, mas ainda assim não tem tanto tempo para ler!
                </p>
                <p>Média de páginas por dia: entre 11 e 30.</p>
                <br/>
                <a href="./home" target="_parent"></a><button className="botão1">Voltar</button>
            </div>

            <div className="avançado">
                <img src={Avançado}/>
                <p>Avançado</p>
                <p>Para devoradores de livros que conseguem ler um livro inteiro em um dia se precisar!
                    Amantes da literatura e dominam essa área.
                </p>
                <p>Média de páginas por dia: mais que 31.</p>
                <br/>
                <button className="botão1">Voltar</button>
                <br/>
                <br/>
                <br/>
                <br/>
            </div>
      
        </section>

        </PageArea>
        </PageContainer>
    );
}

    
export default Page;