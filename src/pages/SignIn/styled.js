import styled from 'styled-components';

export const PageArea = styled.div`

form {
    background-color:#FFFFFF;
    border-radius:3px;
    padding:10px;
    box-shadow:0px 0px 3px #999;
}

.area {
    display:flex;
    align-items:center;
    padding:8px;
    max-width:800px;
}

.area--title {
    width:200px;
    text-align:right;
    padding-right:20px;
    font-weight:bold;
    font-size:14px;

}

.area--cadastre {
width:5px;
height:20px;
color:#009DAC;
padding-left:545px;
white-space: nowrap;
word-spacing: 1px; 
font-weight:bold;
font-size:11px;
}

.area--cadastre:hover {
    text-decoration:underline;
}


.area--esqueci {
width:5px;
height:20px;
color:#009DAC;
padding-left:650px;
white-space: nowrap;
word-spacing: 1px; 
font-weight:bold;
font-size:11px;
}

.area--esqueci:hover {
    text-decoration:underline;
}

.area--input {
    flex:1px;

    input {
        width:100%;
        font-size:14px;
        padding:8px;
        border: 1px solid #DDD;
        border-radius 3px;
        outline:0;
        transition:all ease .4s;
        align-items:left;

        &:focus {
            border:1px solid #333;
            color:#333;
        }
    }

    button {
        background-color:#009DAC;
        border:0;
        outline:0;
        padding:5px 10px;
        border-radius:4px;
        color:#FFF;
        font-size:15px;
        cursor:pointer;
        position:absolute;
		left:72%;
		top:55%;
		margin-left:-110px;

        

        &:hover {
            background-color:#006FCE;
    }
    }
        }

        }
    }

}
`;