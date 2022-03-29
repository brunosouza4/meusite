import React, { Component } from 'react';
import '../style.css'
import Header from '../Header';
import { useContext, useState, useEffect } from 'react';
import { CartContext } from '../CartContext';

function Carrinho ({product}){
    



    const precototal = (valor,quantidade) =>() => {
        const valortotal = valor*quantidade;
        return(
            valortotal
        );
    }



    const cart = useContext(CartContext)
    const add = (produto) => () => {
        cart.addToCart ({
            produto
        })
    }
    const remove = id => () => {
        cart.removeFromCart(id)
    }

    const changeQuantity = id => evt =>{
        cart.changeQuantity(id,Number(evt.target.value))
    }
    


    return(
        <div className="App">
            <main>
                <Header/>
                <div>
                    <h1>Esse é seu carrinho de compras</h1>
                    <div>
                        <div className="produtoslinhaCarrinho">
                            <div className="produtosCarrinho">
                                {Object.keys (cart.cart).map((key)=> 
                                <tr key={key}>
                                    <div>
                                        <div className="caixaProdutoCarrinho">
                                            <div className="itemNome">
                                                {cart.cart[key].product.produto.produto.nome}
                                            </div>
                                            <div className="itemProduto">
                                                <div className="imgProduto">
                                                    <img src={cart.cart[key].product.produto.produto.imagem} alt="new"/>
                                                </div>
                                            </div>
                                            <div className="itemCaracteristicas">
                                                <strong>Preço unidade: </strong> &nbsp; R${cart.cart[key].product.produto.produto.preco}
                                            </div>

                                            <div className="itemCaracteristicas">
                                                <strong>Quantidade </strong> &nbsp; 
                                                <input
                                                    type='number'
                                                    defaultValue={cart.cart[key].quantity}
                                                    onChange={changeQuantity(key)}
                                                />
                                            </div>
                                            <div className="itemCaracteristicas">
                                            
                                                <strong>Preço total: </strong> &nbsp; R$ {parseFloat(cart.cart[key].product.produto.produto.preco)*parseInt(cart.cart[key].quantity)}

                                            </div>
                                            <div className="botaoColocarCarrinho">
                                                <button onClick = {remove(key)}>
                                                    <strong>Remover Produto</strong>
                                                </button>
                                            </div>
                                        </div>
                                        
                                    </div>
                                </tr>
                                )}
                            </div>                    
                        </div>
                    </div>

                </div>
            </main>

        </div>
    );
}


export default Carrinho;