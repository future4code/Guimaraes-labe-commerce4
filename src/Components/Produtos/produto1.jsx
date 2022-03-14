import React from "react";
import styled from "styled-components";
import SwiftSlider from 'react-swift-slider'
import produtos from "./data/produtos.json";

const data =  [
  {'id':'1','src':'https://legobrasil.vteximg.com.br/arquivos/ids/173567-2000-1200/lego_75308_star_wars_r2_d2_01.jpg?v=637558332870070000','title':'Lego Star Wars','price':'R$ 1.000,00'},
  {'id':'2','src':'https://legobrasil.vteximg.com.br/arquivos/ids/173568-2000-1200/lego_75308_star_wars_r2_d2_02.jpg?v=637558332946400000','title':'Lego Star Wars','price':'R$ 1.000,00'},
  {'id':'3','src':'https://legobrasil.vteximg.com.br/arquivos/ids/173570-2000-1200/lego_75308_star_wars_r2_d2_04.jpg?v=637558333134470000'},
  {'id':'4','src':'https://legobrasil.vteximg.com.br/arquivos/ids/173572-2000-1200/lego_75308_star_wars_r2_d2_06.jpg?v=637558333352370000'},
  {'id':'5','src':'https://legobrasil.vteximg.com.br/arquivos/ids/173578-2000-1200/lego_75308_star_wars_r2_d2_12.jpg?v=637558334016170000'}
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
    background-color: none;
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
class Produto1 extends React.Component {

    state = {
        produto: produtos[0],
    };

    render() {
        return (
        <Container>
            <ContSlider>
            <SwiftSlider data={data} height={200} interval={10000} />
            </ContSlider>
                <ContVenda>
                    <h1>{this.state.produto.title}</h1>
                    <Preco>
                        <p>R$</p>
                        {this.state.produto.price}
                        <p>,00</p>
                    </Preco>
                    <button> Adicionar ao carrinho </button>
                </ContVenda> 
        </Container>
        );
    }
}

export default Produto1;
