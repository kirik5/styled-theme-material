import React from 'react'
import styled from 'styled-components'

const ButtonStyled = styled.button`
  padding: 10px 20px;
  color: green;
  background-color: white;
  border: 1px solid green;
  border-radius: 30px;

  &:hover {
    box-shadow: 0 0 12px 0 rgba(0, 0, 0, 0.5);
  }
`

const MyButton = ({children, ...rest}) => {
    return <ButtonStyled {...rest}>{children}</ButtonStyled>
}

export default MyButton