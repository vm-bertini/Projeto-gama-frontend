import styled from 'styled-components';

export const PageArea = styled.div`

display: flex;
justify-content: center;
align-items: center;
width: 90%;

.book{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
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
        max-width:;
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
                margin-bottom: 5%;
                h3{
                    color: #3B2F93;
                    width: 100%;
                    height: 45%;
                    font-size: 2.254vw;
                    font-weight: normal;
                    margin-bottom: 3%;
                }
                h2{
                    color: #3B2F93;
                    height:45%;
                    font-size: 1.54vw;
                    font-weight: bold;
                }
            }
            .title{
                float: left;
                color: #3B2F93;
                font-weight:bold;
                font-size: 3vw;
                width: 45%;
                aspect-ratio: 450/100;
                position: relative;
                margin-bottom:;                
            }
            @media(max-width:764px){
                .title{
                    font-size:6vw;
                }
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
                    width:50%;
                    height: 50%;
        
                    .img_template{
                        width: 24%;
                        height: 100%; 
        
                        
                    }
                    h4{
                        font-size: 1.832vw;;
                        color: #3B2F93;
                        text-align: center;
                        width: 76%;
                        height: 100%;
                    }
                }
            }

            .text{
                width: 45%;
                aspect-ratio: 75/100;
            }
                
            .sinopse-title{
            color: #3B2F93;
            width: 100%;
            height: 10%;
            font-size: 2.2vw;
            text-decoration: underline;
            
            }

            .sinopse{
                display:flex;
                width: 100%;
                height:90%;
                overflow:auto;
                font-size: 15px;
                word-break: break-word;
                color: #3B2F93;
            }
            .Autor-title{
                
                color: #3B2F93;
                width: 100%;
                height: 10%;
                font-size: 2.2vw;
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
            }
            .button{
                text-align: center;
                width: 50%;
                height: 10%;
                .comprar{
                    width: 100%;
                    height: 100%;
                }

            }
            
        }
    }
    @media(max-width:764px){
        .book_back{
            width:100%;
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
            width: 100%;
            aspect-ratio:1/2;
            object-fit: cover;
        }
    }
}
`;
//