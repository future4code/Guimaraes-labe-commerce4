import React from "react";
import styled from "styled-components";

const ItemCarrinho = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const BotaoRemover = styled.button`
  height: 30px;
`;

const Carrinho = styled.div`
  background-color: #001020;
  color: #ddeeff;
  display: flex;
  flex-flow: column wrap;
  width: 180px;
  border: 1px solid black;
  flex-direction: column;
  height: 100%;
  grid-area: sidebar;
  
`;

function SideBarCarrinho() {
  return (
  <Carrinho>
    <h4>Carrinho:</h4>
    <ItemCarrinho>
        <p>1x </p>
        <p>Produto 1</p>
        <BotaoRemover>Remover</BotaoRemover>
      </ItemCarrinho>
      <ItemCarrinho>
        <p>1x </p>
        <p>Produto 2</p>
        <BotaoRemover>Remover</BotaoRemover>
      </ItemCarrinho>
      <p>Valor Total: R$ 200,00</p>

  </Carrinho>
  )
}
export default SideBarCarrinho;