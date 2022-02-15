import React from "react";
import styled from "styled-components";

const Filtro = styled.div`
  background-color: mediumblue;
  display: flex;
  width: 160px;
  border: 1px solid black;
  flex-direction: column;
  height: 100%;
  grid-area: sidebar;
`;
function SideBarFiltro() {
  return (
    <Filtro>
      <h4>Filtro</h4>
      <p>Valor Mínimo</p>
      <p>Valor Máximo</p>
      <p>Nome do Produto</p>
    </Filtro>
  );
}
export default SideBarFiltro;