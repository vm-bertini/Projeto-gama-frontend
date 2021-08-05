import React, { useState } from 'react';
import { PageArea } from './styled';
import useApi from '../../helpers/BookAPI';
import Foto from './img/Home.jpg'
import { Link } from 'react-router-dom';
import Imagem from './img/Imagem.jpg';
import Biblioteca from './img/Biblioteca.jpg';
import Lendo from './img/Lendo.jpg';
import Livros from './img/Livros.jpg';



import { PageContainer1} from '../../components/MainComponents';

const Page = () => {
    const api = useApi();

    return(
        <PageContainer1>
            <PageArea>
                <div className="Foto">
               <div className="Foto--Inicial">
                   <img src={Foto}/>
                <Link className="login"to="/signin"><button1>Começar</button1></Link>
               </div>
               </div>

                <section className="corpo">

                    <div className="conteudo">

                    <div className="imagem">
                        <img src={Lendo}/>
                    </div>

                    <div className="texto">
                        <h2>1. Escolha seu nível de leitor(a)</h2>
                        <br/>
                        <p>.Iniciante: Vamos devagar!</p>
                        
                        <p>.Intermediário: Gosto muito de ler!</p>
                        
                        <p>.Avançado: Devorador(a) de livros!</p>
                    </div>

                    </div>

<br/>

                    <hr/>

                </section>

                <section className="corpo2">

                    <div className="conteudo2">

                    <div className="imagem2">
                        <img src={Livros}/>
                    </div>

                    <div className="texto2">
                        <h2>2. Encontre livros com seu perfil</h2>

                        <p>Escolha por:</p>
                        <p>.Gênero</p>
                        <p>.Autor</p>
                        <p>.Tempo de leitura</p>
                        <p>.Número de páginas</p>
                    </div>

                    </div>

                    <br/>

                    <hr/>

                </section>

                <section className="corpo">

                    <div className="conteudo">

                    <div className="imagem">
                        <img src={Biblioteca}/>
                    </div>

                    <div className="texto3">
                        <h2>3. Divirta-se</h2>

                        <p>Indicamos onde adquirir seu livro!</p>
                    </div>

                    </div>



                </section>

               <div>
               <div className="leitura">
            <div className="area--leitura">Quero encontra minha próxima leitura!</div>
            <Link className="login"to="/signin"><button2>Começar</button2></Link>
            </div>
            </div>
            <div className="Imagem">
            <div className="Foto--Imagem">
            <img src={Imagem}/>
            </div>
            </div>    
       
        
            </PageArea>
        </PageContainer1>
    );
}

export default Page;