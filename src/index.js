import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import {  HashRouter as  BrowserRouter , Route , Routes } from 'react-router-dom'
import Header from './components/Header';
import DS from './components/DS/DS';
import NM from './components/NM/NM';
import Home from './components/Home/home';
import CA from './components/CA/CA';
import STATS from './components/STATS/STATS';
import CG from './components/CG/CG';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <BrowserRouter>
    <Header/>
  <Routes>  
<Route path="/" element={<Home/>} />
<Route path="/ds" element={<DS/>}/>
<Route path="/nm" element={<NM/>} />
<Route path="/ca" element={<CA/>} />
<Route path="/stats" element={<STATS/>} />
<Route path="/cg" element={<CG/>} />
</Routes>
    <App />
    </BrowserRouter>


);


