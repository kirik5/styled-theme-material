import React from 'react'
import {styled} from '@mui/material/styles';

const MyComponentStyled = styled('div')(({theme}) => {
    console.log(theme)
    return (
        {
            backgroundColor: theme.palette.secondary.main,
            color: theme.palette.primary.main,
            padding: '20px',
        }
    )
})

const MyComponent = ({children}) => {
    return <MyComponentStyled>{children}</MyComponentStyled>
}

export default MyComponent