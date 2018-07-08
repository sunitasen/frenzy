import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'tachyons';
import {
    BrowserRouter,
    Route
} from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import About from './components/About/About';
import Poems from './components/Poems/Poems';
import Microtales from './components/Microtales/Microtales';
import Article from './components/Article/Article';

ReactDOM.render(
    <BrowserRouter>
        <div>
        <Route exact path={"/"}  component={App}/>
        <Route exact path={"/about"} component={About}/> 
        <Route exact path={"/poem"} component={Poems}/> 
        <Route exact path={"/microtale"} component={Microtales}/> 
        <Route exact path={"/article"} component={Article}/> 
        </div>
    </BrowserRouter>   
    ,
     document.getElementById('root'));
registerServiceWorker();
