import React from "react";
import styled from "styled-components";
import SwiftSlider from 'react-swift-slider'

const data =  [
  {'id':'1','src':'https://m.media-amazon.com/images/I/81kVxznTd0L._AC_SX425_.jpg','title':'Lego Star Wars','price':'R$ 1.000,00'},
  {'id':'2','src':'https://m.media-amazon.com/images/I/91fLOX8iupL._AC_SX425_.jpg','title':'Lego Star Wars','price':'R$ 1.000,00'},
  {'id':'3','src':'https://media.mfbproject.co.za/repos/2018-alfa-romeo-stelvio-quadrifoglio-specs-photos-speed-2.jpg'},
  {'id':'4','src':'https://media.mfbproject.co.za/repos/alfa-romeo-giulia-quadrifoglio-2017-us-wallpapers-and-hd-images-13.jpg'},
  {'id':'5','src':'https://media.mfbproject.co.za/repos/ARWP_Infra_Desk_1920_1080_Quad.png'}
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
    background-color: gray;
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
function Produto2() {
    return (
    <Container>
        <ContSlider>
        <SwiftSlider data={data} height={200} />
        </ContSlider>
            <ContVenda>
                <h1>Lego Star Wars</h1>
                <Preco>
                    <p>R$</p>
                    <p>1000</p>
                    <p>,00</p>
                </Preco>
                <button>Adicionar ao Carrinho</button>
            </ContVenda>
    </Container>
    )
}
export default Produto2;