import React from 'react'
import styled, {css} from 'styled-components'

const ButtonStyled = styled.button`
  padding: 10px 20px;
  color: grey;
  background-color: white;
  border: 1px solid grey;
  border-radius: 30px;

  ${props => props.variant === "contained" && css`
    color: green;
    background-color: white;
    border: 1px solid green;
  `}

  ${props => props.variant === "outlined" && css`
    color: white;
    background-color: green;
    border: 1px solid green;
  `}
  
  &:hover {
    box-shadow: 0 0 12px 0 rgba(0, 0, 0, 0.5);
  }
`

const MyButton = ({children, ...rest}) => {
    return <ButtonStyled {...rest}>{children}</ButtonStyled>
}

export default MyButton