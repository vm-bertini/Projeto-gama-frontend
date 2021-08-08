import styled from 'styled-components';

export const HeaderArea = styled.div`
background-color:#3B2F93;
height:98px;
border-bottom:1px solid #CCC;
width:100%;

.container {
    max-width:1000px;
    margin:auto;
    display:flex;
}

.container img {
    max-width:113px;
    max-height:113px;
    width: auto;
    height: auto;
    
}

.logo-2 img {
    max-width:45px;
    max-height:45px;
    margin-top:-14px;

}

.navegar {
    color:#F2994A;
}


a {
    text-decoration:none;
}

.logo {
    flex:1;
    display:flex;
    align-items:center;
    height:108px;
}

nav {
    padding-top:15px;
    padding-bottom:10px;
    display:flex;

    ul, li {
        margin:5px;
        padding:5px;
        list-style:none;
    }

    ul {
        align-items:center
        height:5px;
        line-height:5px;

    }
    .frase {
        color:#FFFFFF;
        font-size:14px;
        text-decoration:none;
        line-leight:1px;
        }

    .login {
        color:#FFFFFF;
        font-size:11px;
        text-decoration:none;
}


logged {
    display:flex;
}

    .button {
        color:#FFFFFF;
        font-size:14px;
        text-decoration:none;
        padding:0px;
}

    .conta {
        color:#FFFFFF;
        font-size:14px;
        text-decoration:none;
        line-leight:1px;
        }
    
    .sair {
        color:#FFFFFF;
        font-size:14px;
        text-decoration:none;
}

button {
    text-align:center;
    display:block;
    margin-left:auto;
    margin-right:auto;
    background-color:#F2994A;
    border:0;
    outline:0;
    padding:8px 10px;
    border-radius:20px;
    width: 120px;
    color:#FFF;
    font-size:15px;
    cursor:pointer;
    font-family:inter;
    align-items:center;
    text-decoration:none;

    &:hover {
        background-color:#FF7F50;
}

@media (max-width:600px) {
    & {
        height:auto;
    }

.container {
    flex-direction: column;
}

.logo {
    justificy-content:center;
}

nav ul {
    flex-direction: column;
    height:auto;
}

nav li {
    margin:10px 20px;
}


`;
