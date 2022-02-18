import React from "react";
import styled from "styled-components";
import SwiftSlider from 'react-swift-slider'
import produtos from "./data/produtos.json";

const data =  [
  {'id':'1','src':'https://images-americanas.b2w.io/produtos/3283876811/imagens/lego-10266-creator-nasa-apollo-11-conjunto-de-land-lunar/3283876811_1_xlarge.jpg','title':'Aterrisador Lunar','price':'R$ 1.000,00'},
  {'id':'2','src':'https://images-americanas.b2w.io/produtos/3283876811/imagens/lego-10266-creator-nasa-apollo-11-conjunto-de-land-lunar/3283876811_2_xlarge.jpg','title':'Aterrisador Lunar','price':'R$ 1.000,00'},
  {'id':'3','src':'https://images-americanas.b2w.io/produtos/3283876811/imagens/lego-10266-creator-nasa-apollo-11-conjunto-de-land-lunar/3283876811_3_xlarge.jpg'},
  {'id':'4','src':'https://images-americanas.b2w.io/produtos/3283876811/imagens/lego-10266-creator-nasa-apollo-11-conjunto-de-land-lunar/3283876811_4_xlarge.jpg'},
  {'id':'5','src':'https://images-americanas.b2w.io/produtos/3283876811/imagens/lego-10266-creator-nasa-apollo-11-conjunto-de-land-lunar/3283876811_5_xlarge.jpg'}
];
const ContSlider = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    padding-top: 10px;
    padding-bottom: 10px;
`;
const Preco = styled.p`
    font-size: 20px;
    font-weight: bold;
    color: #000;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
`;
const Container = styled.div`
    background-color: darkblue;
    display: flex;
    width: 100%;
    border: 1px solid black;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
const ContVenda = styled.div`
    width: 50%;
    height: 150%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-top: 10px;
    padding-bottom: 10px;
`;

class Produto3 extends React.Component {

    state = {
        produto: produtos[2],
    };

    render() {

        return (
    <Container>
        <ContSlider>
        <SwiftSlider data={data} height={200} />
        </ContSlider>
            <ContVenda>
                <h1>{this.state.produto.title}</h1>
                <Preco>
                    <p>R$</p>
                    <p>{this.state.produto.price}</p>
                    <p>,00</p>
                </Preco>
                <button>Adicionar ao Carrinho</button>
            </ContVenda>
    </Container>
        );
    }
}
export default Produto3;