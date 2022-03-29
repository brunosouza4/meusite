import React, { Component } from 'react';
import logoexemplo from'./assets/logoexemplo.png';
import carrinho from'./assets/carrinho.png';
import { useState } from 'react';
import {useContext} from 'react';
import {CartContext} from './CartContext'
import { Routes, Route, Link } from "react-router-dom";


function SearchBar({placeholder, data}){
    return(
        <div className="search">
            <div className="searchInputs"> 
                <input type="text" placeholder={placeholder}/>
                <div className="searchIcon"></div>
            </div>
            <div className="dataResult"> </div>
        </div>

    );
}
export default () => {
    const cart = useContext (CartContext)
    const add = (produto) => () => {
        cart.addToCart ({
            produto
        })
    }
    const itemsCount = Object.keys(cart.cart).length

    return(
        <div>
            <div className="barrasuperior">
                <div className="logodiv">
                    <Link to="/"><img src={logoexemplo} className="logo" /></Link>
                </div>
                                
                <div className="login">
                    <div className="caixaDeBusca">
                        <SearchBar placeholder="Busque pelo seu produto..."/>
                    </div>                    
                    <Link to="/carrinho"> <img src={carrinho} className="botaocarrinho"/> 
                    {itemsCount > 0 && <span>({itemsCount})</span>}
                    </Link>

                </div>

            </div>

            <div className="texto">
                <h1 className="texto1">Bem vindo a e-xemplo!</h1>
                <h2 className="texto2">Escolha seus produtos, e boas compras!</h2>
            </div>
                      

        </div>
        
    )

}