import styled from 'styled-components';

export const PageArea = styled.div`

.search-bar {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;

    input{
        width: 400px;
        border-radius: 15px;
        border: 2px #3B2F93 solid;
        padding: 5px 5px 5px 25px;
        top: 0;
        left: 0;
        bottom: 10px;
        z-index: 5;
        outline:none
    }
}

.title{
    padding-top:40px;
    text-align: center;
    font-size:35px;
    font-family:Inter;
    font-style: normal;
    font-weight: bold;
    color: #3B2F93;
    padding-bottom:25px;
}

.search-options{
    display: flex;
    justify-content: center;
    left: -13px ;
    align-items: center;
    flex-direction: row;
    flex-wrap: wrap;
    padding-top:20px;
    padding-bottom: 10px;
    position:relative;
    
    .input {
        position: absolute;
        opacity: 0;
        cursor: pointer;
      }
      

    
    span{
    position: absolute;
    top: -1px;
    left: 17px;
    height: 20px;
    width: 20px;
    background-color: white;
    border: 1px solid #000;
    border-radius: 20px;
    }

    .label:hover .input ~ span {
        background-color: #ccc;
      }

    span:after {
        height: 10px;
        width: 10px;
        background-color: white;
        top: 3px;
        left:3px;
        border: 1px solid #000;
        border-radius: 10px;
        position: absolute;
        display: block;
        content:'';
      }
    .label .input:checked ~ span:after {
        height: 10px;
        width: 10px;
        background-color: #3B2F93;
        top: 3px;
        left: 3px;
        border: 1px solid #3B2F93;
        border-radius: 10px;
        position: absolute;
        display: block;
        content:'';
    }

    .dropdown{
        text-align: center;
        position: relative;
        left: 10px;
        width: 190px;
        height: 30px;
        border: 1px solid #CCC9C5;
        box-sizing: border-box;
        border-radius: 30px;
        outline:none;

    }

    .dontshow{
        display:none;
    }

    .label .input:checked ~ label{
        color: #F2994A;
    }
}

.label{
    position: relative;
    top: 4px;
    padding-left: 40px;
    margin-bottom: 12px;
    cursor: pointer;
    font-size: 17px;
    color: #3B2F93;
    font-weight: bold;
    
}

.vector{
    position:relative;
    top: 0px;
    left: 15px;
}

.books{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    flex-wrap: wrap;
    padding-top: 50px;
    margin: auto;
    width: auto;
    max-width: 962px;
    position: relative;
    left: 0px;
    h1{

        text-align: center;
        position: relative;
        left: 0px;
        word-wrap:break-word;
        color: #3B2F93;
        width:500px;
    }
    .book{
        background-color: #E7E4E4;
        margin: 10px 10px 10px 10px ;
        position: relative;
        top: -50px; 
        text-align: center;
        height: 200px;
        width:300px;
        border-radius: 15px;

        .cover{
            float: left;
            backgrond-color: white;
            border-radius: 25px;
            border: 1px solid white;
            margin-top: 15px;
            margin-bottom: 15px;
            margin-right: 15px;
            margin-left: 15px;
            width: 100px;
            height: 170px;
        }
        .title{
            float: left;
            color: #3B2F93;
            font-size: 16px;
            width:130px;
            position: relative;
            top: -25px;
            text-align: left;
        }
        .info{
            float: left;
            color: #3B2F93;
            font-size: 18px;
            width:130px;
            height: 50px;
            position: relative;
            top: -40px;
            text-align: left;
            h3{
                color: #3B2F93;
                max-height: 20px;
                overflow: hidden;
                margin-bottom: 5px;
                font-size: 15px;
                font-weight: normal;
            }
            h2{
                color: #3B2F93;
                font-size: 12px;
                font-weight: bold;
            }
        }

        .leitura{
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            float: left;
            margin: 0px 0px 0px px;
            color: #3B2F93;
            font-size: 18px;
            width:130px;
            height: 25px;
            position: relative;
            top: -35px;
            text-align: center;

            .img_template{
                max-width: 100px;
                height: 100%; 

                
            }
            h4{
                font-size:12px;
                margin: 5px 0px 0px 10px;
                max-width: 100px;
                height: 100%;
                text-align: center;
            }
        }
        .button{
            display: flex;
            overflow: hidden;
            flex-direction: row;
            flex-wrap: wrap;
            float: left;
            margin: 0px 0px 0px px;
            color: #3B2F93;
            font-size: 18px;
            height: 25px;
            position: absolute;
            top: 150px;
            left: 260px;
            text-align: center;
            .arrow{
                height: 100%;
                width: 100%;
            }
        }
        
    }
}
`;
//