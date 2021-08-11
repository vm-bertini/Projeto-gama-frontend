import React, { useState } from 'react';
import { PageArea, Section } from './styled';
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
                <div className="foto">
               <div className="description">
                   <h1>Bookfolio</h1>

                   <p>Encontre seu livro perfeito. Leia no seu tempo</p>
               </div>
                <Link className="login"to="/signin"><button className='button1'>Começar</button></Link>
               </div>

                <Section>
                    <div>
                        <img className="mm" src={Lendo} alt="Lendo"/>
                    </div>
                    <div className="texto">
                        <h2>
                        <span className="corRoxa">1</span>
                        <span className="corLaranja">. </span>
                        Escolha seu nível de leitor(a)
                        </h2>
                        <br/>
                        <p>.Iniciante: Vamos devagar!</p>
                        
                        <p>.Intermediário: Gosto muito de ler!</p>
                        
                        <p>.Avançado: Devorador(a) de livros!</p>
                    </div>
                </Section>


                <hr />
                <Section revert>

                    <div>
                        <img  className="mm" src={Livros} alt="Books"/>
                    </div>

                    <div className="texto">
                        <h2>
                        <span className="corRoxa">2</span>
                        <span className="corLaranja">. </span>
                        Encontre livros com seu perfil
                        </h2>
                        <br/>
                        <p>Escolha por:</p>
                        <p>.Gênero</p>
                        <p>.Autor</p>
                        <p>.Tempo de leitura</p>
                        <p>.Número de páginas</p>

                    </div>

                </Section>


                <hr />
                <Section>
                    <div>
                        <img  className= "mm" src={Biblioteca} alt="biblioteca" />
                    </div>
                    <div className="texto">
                        <h2>
                        <span className="corRoxa">3</span>
                        <span className="corLaranja">. </span>
                            Divirta-se
                        </h2>
                        <br/>
                        <p>Indicamos onde adquirir seu livro!</p>
                    </div>
                </Section>

<br/>

               <div>
               <div className="leitura">
            <div className="area--leitura">Quero encontra minha próxima leitura!</div>
            <Link className="login"to="/signin"><button className='button2'>Começar</button></Link>
            </div>
            </div>
            <div className="Imagem">
            {/* <img src={Imagem}/> */}
            </div>    
       
        
            </PageArea>
        </PageContainer1>
    );
}

export default Page;