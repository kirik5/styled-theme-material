import React from 'react'
import './App.css';
import MyButton from "./MyButton";
import { ThemeProvider } from '@mui/material/styles';
import {primaryTheme} from "./primaryTheme";
import MyMaterialButton from "./MyMaterialButton";
import MyComponent from "./MyComponent";

function App() {
    return (
        <ThemeProvider theme={primaryTheme}>
            <div className="App">
                <MyButton>Buy NOW!</MyButton>
                <MyButton variant={'contained'}>Contained</MyButton>
                <MyButton variant={'outlined'}>Outlined</MyButton>
                <MyMaterialButton variant="text">Text</MyMaterialButton>
                <MyMaterialButton variant="contained">Contained</MyMaterialButton>
                <MyMaterialButton variant="outlined">Outlined</MyMaterialButton>
                <MyComponent>Some text</MyComponent>
            </div>
        </ThemeProvider>

    );
}

export default App;
