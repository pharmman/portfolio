import React from 'react'
import './App.scss';
import {Skills} from './skills/Skills';
import {Header} from './header/Header';
import {Main} from './main/Main';
import {Projects} from './projects/Projects';
import {Contacts} from './contacts/Contacts';
import {Footer} from './footer/Footer';


function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Skills/>
            <Projects/>
            <Contacts/>
            <Footer/>
        </div>
    );
}

export default App;
