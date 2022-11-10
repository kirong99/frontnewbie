import React from 'react';
import styled from 'styled-components';

function Button({title, click}){
    return(
        <S.Button onClick={click}>
            <span>{title}</span>
        </S.Button>
    )
}

export default Button;

const S = {};

S.Button = styled.button`
margin: 2rem;
width: 90px;
height: 30px;
border: none;
background-color: #ffaeae;
border-radius: 8px;
cursor: pointer;
position: absolute;
right: 0;
font-size: 12px;
  
  span{
    font-size: 16px;
    font-weight: bold;
  }
`;

