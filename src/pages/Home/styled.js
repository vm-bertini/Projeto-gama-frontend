import styled from 'styled-components';

export const PageArea = styled.div`

* {
    margin:0;
    padding:0;
}
.leitura {
    height:220px;
    width:1584px;
    background-color:#3B2F93;
    color:#FFFFFF;
}

.button2 {
    background-color:#F2994A;
    padding:10px 10px;
    border-radius:20px;
    width: 300px;
    color:#FFF;
    font-size:15px;
    cursor:pointer;
    font-family:inter;
    margin-top:20px;
}

.area--leitura {
    text-align:center;
    font-weight:bold;
    font-size:14px;
    font-family:inter;
    font-size:20px;
    align-items:center;
}

.button1 {
    text-align:center;
    position:absolute;
    top:50%;
    left:50%;
    transform:translate(-50%, 50%);
    margin-top:150px;
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
    align-items:center;

}

.logo {
    flex:1;
    display:flex;
    align-items:center;
    height:98px;
}


.corpo {
    margin:auto;
    width:400px;
    height:300px;
    padding-top:50px;



}

.conteudo {
    display:table;

}

.imagem {
    display:table-cell;
    float:left;

    
}



.texto {
    display:table-cell;
    position:absolute;
    float:left;
    width:200px;
    margin-top:40px;
    margin-left:500px;
    word-break: normal;
    text-align:left;
    
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
    align-itemns:right;

    
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
    width:800px; 
    
}
`;