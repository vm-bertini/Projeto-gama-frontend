import styled from 'styled-components';

export const PageArea = styled.div`
.h1{

    text-align: center;
    position: absolute;
    left: 50%;
    top: 50%;
    word-wrap:break-word;
    color: #3B2F93;
    width:500px;
}

.content{
    display: flex;
    justify-content: center;
    .book{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: row;
        flex-wrap: wrap;
        width: 60%;
    
    
        .book_back{
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: #E7E4E4;
            position: relative;
            top: 0px; 
            text-align: left;
            aspect-ratio:1;
            width:60%;
            border-radius: 15px;
            .book_info{
                display:flex;
                flex-direction: column;
                flex-wrap: wrap; 
                position: relative;
                text-align: left;
                width: 85%;
                height: 85%;
                .info{
                    color: #3B2F93;
                    width: 45%;
                    aspect-ratio: 450/100;
                    position: relative;
                    text-align: left;
                    margin-bottom: 2%;
                    h3{
                        color: #3B2F93;
                        width: 100%;
                        height: 45%;
                        font-size: 1.23vw;
                        overflow: hidden ;
                        font-weight: normal;
                        margin-bottom: 3%;
                    }
                    h2{
                        color: #3B2F93;
                        height:45%;
                        font-size: 0.94vw;
                        font-weight: bold;
                    }
                }
                .title{
                    float: left;
                    color: #3B2F93;
                    font-weight:bold;
                    font-size: 1.7vw;
                    width: 45%;
                    margin-bottom: 5%;
                    margin-right: 1%;
                    aspect-ratio: 450/100;
                    position: relative;
                    margin-bottom:; 
                    text-decoration: underline;
                    font-style: italic;              
                }
                .leituras{
                    display: flex;
                    justify-content: left;
                    align-items: left;
                    flex-direction: column;
                    flex-wrap: wrap;
                    width: 45%;
                    aspect-ratio: 450/100;
                    margin-bottom: 5%;
                    .leitura{
                        display: flex;
                        justify-content: left;
                        align-items: centre;
                        flex-direction: row;
                        width:100%;
                        height: 50%;
            
                        .img_template{
                            width: 12%;
                            height: 100%; 
            
                            
                        }
                        h4{
                            font-size: 1.1vw;;
                            color: #3B2F93;
                            text-align: left;
                            width: 76%;
                            height: 100%;
                            position: relative;
                            #text{
                                display:flex;
                                flex-direction: row
                            }
                        }
                        
                    }
                    
                    
                }
                @media(max-width:764px){
                    .leituras{
                        .leitura{
                            h4{
                                font-size: 4vw;
                            }
                        }  
                    }
                    .info{
                        h3{
                            font-size: 3.4vw; 
                        }
                        h2{
                            font-size: 2.9vw;
                        }
                    }
                }
    
                .text{
                    width: 45%;
                    aspect-ratio: 80/100;
                }
                    
                .sinopse-title{
                color: #3B2F93;
                width: 100%;
                height: 10%;
                font-size: 0.8vw;
                margin-bottom: 5%;
                text-decoration: underline;
                
                }
    
                .sinopse{
                    display:flex;
                    width: 90%;
                    height:85%;
                    overflow:auto;
                    word-break: break-word;
                    color: #3B2F93;
                    font-size: 1.2vw;
                }
                .Autor-title{
                    
                    color: #3B2F93;
                    width: 100%;
                    height: 10%;
                    font-size: 0.8vw;
                    margin-bottom: 5%;
                    text-decoration: underline;
                    
                }
        
                .Autor{
                    display:flex;
                    width: 100%;
                    height: 90%;
                    overflow-x: hidden;
                    overflow-y: scroll;
                    font-size: 15px;
                    word-break: break-word;
                    color: #3B2F93;
                    font-size: 1.2vw;
                }
    
                @media(max-width:764px){
                    .sinopse-title{
                        font-size: 3.5vw;
                    }
                    .Autor-title{
                        font-size: 3.5vw;
                    }
                    .sinopse{
                        font-size: 3vw;
                    }
                    .Autor{
                        font-size: 3vw;
                    }
                    .title{
                        font-size: 3.5vw;
                    }
                }
                .button{
                    text-align: center;
                    width: 15vw;
                    .comprar{
                        width: 100%;
                        height: 100%;
                    }
                    button{
                        padding: 0;
                        border: none;
                        margin-top: 10%;
                        background: none;
                    }
    
                }
                
            }
        }
        .cover{
            float: left;
            backgrond-color: white;
            border-radius: 25px;
            border: 1px solid white;
            width: 30%;
            margin: 3%;
            aspect-ratio:1;
            img{
                border-radius: 25px;
                width: 90%;
                aspect-ratio:9/20;
            }
        }
    }
    
}

@media(max-width:764px){
    .content{
        width: 100%;
    height: 100%;
    .book{
        margin-bottom: 5%;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        .book_back{
            width:90%;
            .book_info{
                display:flex;
                flex-direction: column;
                flex-wrap: wrap; 
                position: relative;
                text-align: left;
                margin-top: 10%;
                width: 80%;
                height: 95%;
                .info{
                    aspect-ratio: 3 ;
                }
                .title{
                    aspect-ratio: 3 ;
                }
                .leituras{
                    aspect-ratio: 3 ;
                }
                .text{
                }
                .button{
                    aspect-ratio: 3 ;
                    width: 35vw;
                }
            }
        }
        
        .cover{
            width: 40%;
            position: relative;
            top: 10vw;
            z-index:9;
            border:none;
            img{
                border-radius: 25px;
                width: 60%;
                height:100%;
                object-fit: cover;
            }
        }

    }
    }
}
.botao1 {
    display:block;
    position:absolute;
    margin-right:auto;
    margin:auto;
    top: 160px;
    margin-top:-50px;
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
    transform: scaleX(-1);

    &:hover {
        filter: saturate(3)
}
`;
//