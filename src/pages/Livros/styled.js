import styled from 'styled-components';

export const PageArea = styled.div`

* {
    text-align: center;
    margin:auto;
    text-decoration:none;
}

h1 {
    text-align:center;
    color:#3B2F93;
    margin-top:60px;
    font-size:22px;
    margin-bottom:30px;
}

img {
    border-radius:30px;
    max-width:100%;
    display:block;
}

.flex {
    display:flex;
    flex-wrap:wrap;

}

.flex > div {
    flex: 1 1 200px;
    margin:15px;
}


.botao1 {
    display:block;
    position:absolute;
    margin-right:auto;
    margin:auto;
    margin-top:-50px;
    background-color:#3B2F93;
    border:0;
    outline:0;
    width:70px;
    padding:10px 10px;
    border-radius:20px;
    color:#FFF;
    font-size:15px;
    cursor:pointer;
    font-family:Inter;
    text-align:center;

    &:hover {
        background-color:#483D8B;
}
}

.botao2 {
    display:block;
    position:absolute;
    text-align:center;
    text-align:left;
    left:70px;
    margin-right:auto;
    background-color:#F2994A;
    border:0;
    outline:0;
    width:120px;
    padding:10px 10px;
    border-radius:20px;
    color:#FFF;
    font-size:15px;
    cursor:pointer;
    font-family:Inter;
    text-align:center;
    margin-left:negativa;

    &:hover {
        background-color:#FF7F50;
}
        
}

p {
    font-size:15px; 
    color:#3B2F93;
}

.box {
    display: block; width: 260px; text-align: center;
    position: relative; padding-top:20px; padding-bottom: 50px; float: left; margin: 0 5px;
    bottom:20px;
    background-color:#E7E4E4;
    border-radius:15px;
 }
 
 .box p {
    display: inline-block; padding: 0 10px;
 }

 .box h3 {
     color:#3B2F93;
 } 

 .box h5 {
    color:#3B2F93;
    font-size:bold;
} 
 
 .box img{
    width: 70%;
 }


`;
//