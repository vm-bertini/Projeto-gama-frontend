import styled from 'styled-components';

export const HeaderArea = styled.div`
background-color:#3B2F93;
height:98px;
border-bottom:1px solid #CCC;
width:100%;



.container {
    max-width:1000px;
    display:flex;
    overflow: hidden;
}

.container img {
    max-width:113px;
    max-height:113px;
    width: auto;
    height: auto;
    
}

.logo-2 img {
    max-width:30px;
    max-height:30px;
    margin-top:-14px;

}

.navegar {
    color:#F2994A;
    border: none;
    background-color: #E7E4E4 ;
}


a {
    text-decoration:none;
}

.logo {
    flex:1;
    display:flex;
    align-items:center;
    height:108px;
    position: absolute;
    left: 7vw;
}


        #icone{
            cursor: pointer;
            padding: 15px;
            position: absolute;
            align-items: center;
            text-align: center;
            right: 0px ;
            top: 20px;
            min-width: 80px;
            width: 10vw;
            z-index: 1;
            -webkit-user-select: none;
            -khtml-user-select: none;
            -moz-user-select: none;
            -o-user-select: none;
            user-select: none;
            -webkit-tap-highlight-color: transparent;
            
            img{
                height:30px;
                filter: saturate(1);
                -webkit-user-select: none;
                -khtml-user-select: none;
                -moz-user-select: none;
                -o-user-select: none;
                user-select: none;
                -webkit-tap-highlight-color: transparent;
            }
            img:hover{
                filter: saturate(5);
            }
        }

         
        #check{
            display: none;
        }

        .barra{
            
            background-color:  #E7E4E4;
            border: 1px solid #3B2F93;
            height: 225px;
            position: absolute;
            right: -500px;
            top:97px;
            transition: all .35s linear;
            z-index:6;
        }

        .avatar{
            position:relative;
            top: 50%;
            right: 0%;

        }

        nav{
            display: flex;
            flex-direction: column;
            overflow: hidden;
            width: 100%;
            height: 100%;
            position: absolute;
            right: 0px;
        }

        nav li{
            position: relative;
            list-style-type: none;
            width: 100%;
            height: 45px;
            text-align: center;
            border: 1px inset ;
            color: #3B2F93;
            overflow: hidden;
            
        }

        nav li a{
            transition: all .2s linear;
            
        }
        nav li button{
            font-size: 20px;

            &:hover{
                cursor:pointer;
            }
        }

        #check:checked ~.barra{
            min-width: 80px;
            width: 10vw;
            right: 0;
            display:block;
            top:97px;
        }

    .login {
        color:#FFFFFF;
        font-size:11px;
        text-decoration:none;
        position: absolute;
        right: 20px;
        top: 33px;


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
    position: absolute;
    right: 0;
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
