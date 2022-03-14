import React from "react";
import styled from "styled-components";
import SwiftSlider from 'react-swift-slider'
import produtos from "./data/produtos.json";

const data =  [
  {'id':'1','src':'https://brincasa.vteximg.com.br/arquivos/ids/165450-1000-1000/331974.jpg?v=637487279052600000','title':'Carro Lunar','price':'R$ 1.000,00'},
  {'id':'2','src':'https://brincasa.vteximg.com.br/arquivos/ids/165449-1000-1000/331974-12.jpg?v=637487279048400000','title':'Carro Lunar','price':'R$ 1.000,00'},
  {'id':'3','src':'https://brincasa.vteximg.com.br/arquivos/ids/165451-1000-1000/331974-2.jpg?v=637487279057000000'},
  {'id':'4','src':'https://brincasa.vteximg.com.br/arquivos/ids/165452-1000-1000/331974-3.jpg?v=637487279063230000'},
  {'id':'5','src':'https://brincasa.vteximg.com.br/arquivos/ids/165453-1000-1000/331974-1.jpg?v=637487279067300000'}
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
    background-color: pink;
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

class Produto4 extends React.Component {

    state = {
        produto: produtos[3],
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
export default Produto4;