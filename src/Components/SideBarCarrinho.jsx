import React from "react";
import styled from "styled-components";

const Carrinho = styled.div`
  background-color: #001020;
  display: flex;
  flex-flow: column wrap;
  width: 160px;
  border: 1px solid black;
  flex-direction: column;
  height: 100%;
  grid-area: sidebar;
  color: #ddeeff;
`;

function SideBarCarrinho() {
  return (
  <Carrinho>
    <h4>Carrinho:</h4>
    <p>1x</p>

  </Carrinho>
  )
}
export default SideBarCarrinho;