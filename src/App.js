import React from 'react'
import './App.css';
import MyButton from "./MyButton";
import {ThemeProvider} from "styled-components";
import {primaryTheme} from "./primaryTheme";
import MyMaterialButton from "./MyMaterialButton";

function App() {
    return (
        <ThemeProvider theme={primaryTheme}>
            <div className="App">
                <MyButton>Buy NOW!</MyButton>
                <MyButton variant={'contained'}>Contained</MyButton>
                <MyButton variant={'outlined'}>Outlined</MyButton>
                <MyMaterialButton>Text</MyMaterialButton>
            </div>
        </ThemeProvider>

    );
}

export default App;
