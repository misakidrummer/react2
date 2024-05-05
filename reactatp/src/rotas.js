import {BrowserRouter, Routes, Route } from 'react-router-dom';

import Login from './paginas/Login';
import Cadastro from './paginas/Cadastro';
import Principal from './paginas/Principal';

const Rotas = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact={true} path="/" element={<Cadastro/>} />
                <Route exact={true} path="/login" element={<Login/>} />
                <Route exact={true} path="/principal" element={<Principal/>} />
                
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas;
