import styled from 'styled-components';

export const HeaderArea = styled.div`
background-color:#3B2F93;
height:98px;
border-bottom:1px solid #CCC;

.container {
    max-width:1000px;
    margin:auto;
    display:flex;
}

a {
    text-decoration:none;
}

.logo {
    flex:1;
    display:flex;
    align-items:center;
    height:98px;
}

.logo-1,
.logo-2,
.logo-3,
.logo-4,
.logo-5,
.logo-6,
.logo-7,
.logo-8,
.logo-9 {
    font-size:27px;
    font-weight:bold;
    font-family:Roboto,-apple-system,BlinkMacSystemFont,"Segoe UI","Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"; 

}

.logo-1 { color:#FFFFFF; }
.logo-2 { color:#FFFFFF; }
.logo-3 { color:#FFFFFF; }
.logo-4 { color:#FFFFFF; }
.logo-5 { color:#FFFFFF; }
.logo-6 { color:#FFFFFF; }
.logo-7 { color:#FFFFFF; }
.logo-8 { color:#FFFFFF; }
.logo-9 { color:#FFFFFF; }

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

    .login:hover {
        text-decoration:underline;
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
`;
