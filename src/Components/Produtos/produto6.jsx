import React from "react";
import styled from "styled-components";
import SwiftSlider from 'react-swift-slider'
import produtos from "./data/produtos.json";

const data =  [
  {'id':'1','src':'https://http2.mlstatic.com/D_NQ_NP_2X_964168-MLB48734726313_012022-F.webp','title':'Lego Millennium Falcon ','price':'R$ 1.000,00'},
  {'id':'2','src':'https://http2.mlstatic.com/D_NQ_NP_2X_733824-MLB48734710461_012022-F.webp','title':'Lego Millennium Falcon ','price':'R$ 1.000,00'},
  {'id':'3','src':'https://http2.mlstatic.com/D_NQ_NP_2X_802840-MLB48734746228_012022-F.webp'},
  {'id':'4','src':'https://http2.mlstatic.com/D_NQ_NP_2X_860689-MLB48734757151_012022-F.webp'},
  {'id':'5','src':'https://http2.mlstatic.com/D_NQ_NP_2X_706075-MLB48734759138_012022-F.webp'}
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
    background-color: lightblue;
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

class Produto6 extends React.Component {

    state = {
        produto: produtos[5],
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
export default Produto6;