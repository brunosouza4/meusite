import React, { Component} from 'react';
import '../style.css'
import Header from '../Header';
import { CartContext } from '../CartContext';
import Axios from 'axios';
import { useContext, useState, useEffect } from 'react';



function Telainicial ({product}){
    const cart = useContext(CartContext)
    const add = (produto) => () => {
        cart.addToCart ({
            produto
        })
    }


    const [products, setProducts] = useState([]);

    const fetchProducts = async () => {
      const { data } = await Axios.get(
        "http://616d6bdb6dacbb001794ca17.mockapi.io/devnology/brazilian_provider",
        "http://616d6bdb6dacbb001794ca17.mockapi.io/devnology/european_provider"
        
      );
      const products = (data);
      setProducts(products);
      console.log(products);
    };
  
    useEffect(() => {
      fetchProducts();
    }, []);

    return(
        <div className="App">
            <main>
                <Header/>
                <div>
                    <div className="produtoslinha">
                        <div className="produtos">
                        {products.map(produto => (
                            <li key={produto.id}>
                                <div className="caixaProduto">
                                    <div className="itemNome">
                                        {produto.nome}
                                    </div>
                                    <div className="itemProduto">
                                        <div className="imgProduto">
                                            <img src={produto.imagem} alt="new"/>
                                        </div>
                                    </div>
                                    <div className="itemDescricao">
                                        <center>{produto.descricao}</center>
                                    </div>
                                    <div className="itemCaracteristicas">
                                        <strong>Categoria: </strong> &nbsp; {produto.categoria}
                                    </div>
                                    <div className="itemCaracteristicas">
                                        <strong>Preço: </strong> &nbsp; R${produto.preco}
                                    </div>
                                    <div className="itemCaracteristicas">
                                        <strong>Material: </strong> &nbsp; {produto.material}
                                    </div>
                                    <div className="itemCaracteristicas">
                                        <strong>Departamento: </strong> &nbsp; {produto.departamento}
                                    </div>
                                    <div className="botaoColocarCarrinho">
                                        <button onClick={add({produto})}>
                                            <strong>Comprar</strong>
                                        </button>
                                    </div>

                                </div>
                            </li>

                        ))}
                        </div>                    
                    </div>
                </div>
        
            </main>

        </div>
    );
}

export default Telainicial;