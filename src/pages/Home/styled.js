import styled from 'styled-components';
import Foto from './img/Home.jpg'
import Image from './img/Imagem.jpg';

export const PageArea = styled.div`

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


.description {
    margin-bottom: 7rem;
}

.description h1 {
    font-size: 7rem;
    color: #F2994A;
    text-align: center;
}

.description p {
    color: #FFF;
    text-align: center;
    font-size: 1.3rem;
    text-align: center;
}

.leitura {
    height:250px;
    background-color:#3B2F93;
    color:#FFFFFF;
}

button2 {
    text-align:center;
    margin:auto;
    margin-left:auto;
    background-color:#F2994A;
    border:0;
    outline:0;
    padding:9px 10px;
    border-radius:20px;
    width: 220px;
    color:#FFF;
    font-size:15px;
    cursor:pointer;
    font-family:inter;
    /* align-items:center; */

    display: block;
}
}

.area--leitura {
    display:block;
    padding:60px;
    text-align:center;
    font-weight:bold;
    font-size:23px;
    font-family:inter;
   
}

button1 {
    text-align:center;
    /* position:absolute; */
    /* top:50%; */
    /* left:50%; */
    /* transform:translate(-50%, 50%); */
    /* margin-top:150px; */
    background-color:#F2994A;
    border:0;
    outline:0;
    padding:9px 10px;
    border-radius:20px;
    width: 220px;
    color:#FFF;
    font-size:15px;
    cursor:pointer;
    font-family:inter;
    /* align-items:center; */

    display: block;
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
    width:240px;
}




`;

export const Section = styled.section`
	display: flex;
	align-items: center;
	margin-top: 1rem;
    padding: 1rem 0;
	justify-content: center;
    flex-direction: ${props => props.revert ? 'row-reverse' : 'row'};
    flex-wrap: wrap;

    .texto {
        width:200px;
        margin-left: ${props => props.revert ? 0 : '6rem'};
        margin-right: ${props => props.revert ? '6rem' : 0};
        word-break: normal;    
    };     

    img {
        border-radius: 10px;
    }

    @media (max-width: 630px) {
    .texto {
        width:200px;
        margin-left: 0;
        margin-right: 0;
        word-break: normal;    
    }; 
  }
`;