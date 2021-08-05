import styled from 'styled-components';

export const PageArea = styled.div`

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


.botão1 {
    display:block;
    position:absolute;
    float: right;
    margin-right:auto;
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
    margin-left:negativa;

    &:hover {
        background-color:#483D8B;
}
        
}

`;
//