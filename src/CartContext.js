import { createContext, useState, useContext } from 'react'
import React from 'react';
export const CartContext = createContext()

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState({})
    const addToCart = (product) => {
        setCart((old) => {
            let quantity=0
            if (old[product.produto.produto.id]){
                quantity = old[product.produto.produto.id].quantity
            }
            
            return{
                ...old,
                [product.produto.produto.id]:{
                quantity:quantity+1,
                product,
                
                }
            }
        })
    }

    return(
        <CartContext.Provider value={{cart, addToCart}}>
            {children}
        </CartContext.Provider>
    )
}