import styled from 'styled-components';
import Foto from './img/Home.jpg'
import Image from './img/Imagem.jpg';

export const PageArea = styled.div`

.mm{
    width: 100%;
}

.foto {
    background-image: url(${Foto});
    background-size: cover;
    background-position: center center;
    width: 100%;

    height: 617px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.login{
    text-decoration: none;
}


.description {
    width:100%;
    margin-bottom: 5rem;
    overflow-wrap:normal ;
}

.description h1 {
    font-size: 100px;
    color: #F2994A;
    text-align: center;
}
@media(max-width: 764px){
    .description h1 {
        font-size: 14vw;
        color: #F2994A;
        text-align: center;
    }
}

.description p {
    color: #FFF;
    text-align: center;
    font-size: 1.3rem;
    text-align: center;
}

.leitura {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height:35vh;
    background-color:#3B2F93;
    color:#FFFFFF;
    width: 100%;
}


.button2 {
    text-align:center;
    margin:auto;
    margin-left:auto;
    background-color:#F2994A;
    border:0;
    outline:0;
    padding:9px 10px;
    border-radius:20px;    
    width: 40vw;
    max-width:220px;
    margin-top: 5vh;
    color:#FFF;
    font-size:15px;
    cursor:pointer;
    font-family:inter;
    /* align-items:center; */
    display: block;

    &:hover {
        background-color:#FF7F50;
}
}
}

.area--leitura {
    display:flex;
    flex-direction: column;
    text-align:center;
    font-weight:bold;
    font-size: 4vh;
    font-family:inter;
    width: 100%;
    height: auto;
   
}

.button1 {
    text-align:center;
    /* position:absolute; */
    /* top:50%; */
    /* left:50%; */
    /* transform:translate(-50%, 50%); */
    /* margin-top:150px; */
    background-color:#F2994A;
    border:0;
    text-decoration: none;
    outline:0;
    padding:9px 10px;
    border-radius:20px;
    width: 40vw;
    max-width:220px;
    color:#FFF;
    font-size:15px;
    cursor:pointer;
    font-family:inter;
    /* align-items:center; */
    display: block;

    &:hover {
        background-color:#FF7F50;
}
}

.logo {
    flex:1;
    display:flex;
    align-items:center;
    height:98px;
}


/* .corpo {
    margin:auto;
    width:400px;
    height:300px;
    padding-top:50px;
} */

.corpo {
	display: flex;
	align-items: center;
	margin-top: 5rem;
	justify-content: center;
}

.corpo img {
    border-radius: 10px;
}

.revert {
    /* flex-direction: row-reverse; */
    border-radius: 1px solid red;
}

.revert .texto {
    margin-left: 0;
    margin-right: 6rem;
}

.texto {
    width:200px;
    margin-left: 6rem;

    word-break: normal;    
}

.texto3 {
    display:table-cell;
    position:absolute;
    float:left;
    width:200px;
    margin-top:80px;
    margin-left:500px;
    word-break: normal;
    text-align:left;
    
}

.corpo2 {
    margin:auto;
    width:400px;
    height:300px;
    padding-top:-50px;



}

.conteudo2 {
    display:table;

}

.imagem2 {
    display:table-cell;
    float:right;
    /* align-itemns:right; */
}


.Imagem {
    background-image: url(${Image});
    background-size: cover;
    background-position: center center;
    width: 100%;

    height: 600px;
}


.texto2 {
    display:table-cell;
    float:right;
    width:200px;
    margin-top:-210px;
    margin-right:600px;
    text-align:left;
    
}

hr {
    max-width: 1000px; 
    margin: auto;
    margin-top: 1rem;
}

.corRoxa {
    color:#3B2F93;
    font-size:30px;
}

.corLaranja {
    color:#F2994A;
    font-size:30px;
}



h2 {
    width:100%;
}

section p {
    width:265px;
}



`;

export const Section = styled.section`
	display: flex;
	align-items: center;
	margin-top: 1rem;
    padding: 1rem 0;
    max-width:50%;
    margin:auto;
	justify-content: center;
    flex-direction: ${props => props.revert ? 'row-reverse' : 'row'};
    flex-wrap: wrap;

    .texto {
        margin:auto;
        display:flex;
        flex-direction:column;
        word-break: normal;  
        align-self: center;
        p{
            text-align:left;
        }  
    };     

    img {
        border-radius: 10px;
    }

    @media (max-width: 630px) {
    .texto {
        width:100%;
        margin-left: 0;
        margin-right: 0;
        word-break: normal;    
    }; 
  }
`;