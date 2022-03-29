import React from 'react';
import { Routes, Route } from 'react-router-dom';

export default () => {


    return(
        <Routes>
            <Route exact path="/">
                Pagina Inicial
            </Route>

            <Route exact path="/config">
                Pagina Configurações
            </Route>


        </Routes>

    )

}