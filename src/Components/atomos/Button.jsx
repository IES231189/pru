import React from 'react';
import { styled } from 'styled-components';


const StyledButton = styled.button`
background-color:black;
font-size:16px;
padding:10px;
border:none;

&:hover {
    background-color: #2980b9;
  }

`;

const Button = ({item}) =>{
    return(
        <StyledButton>{item}</StyledButton>
    );
}

export default Button;



