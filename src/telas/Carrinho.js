import React, { Component } from 'react';
import '../style.css'
import Header from '../Header';
import { useContext, useState, useEffect } from 'react';
import { CartContext } from '../CartContext';

function Carrinho ({product}){
    
    const cart = useContext(CartContext)
    const add = (produto) => () => {
        cart.addToCart ({
            produto
        })
    }

    return(
        <div className="App">
            <main>
                <Header/>
                <div>
                    <h1>Esse é seu carrinho de compras</h1>
                    <pre>{JSON.stringify(cart,null,2)}</pre>


                </div>
            </main>

        </div>
    );
}


export default Carrinho;