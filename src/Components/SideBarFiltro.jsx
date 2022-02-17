import React from "react";
import styled from "styled-components";

const Filtro = styled.div`
  background-color: #001020;
  display: flex;
  flex-flow: column wrap;
  width: 173px;
  border: 1px solid black;
  flex-direction: column;
  height: 100%;
  grid-area: sidebar;
  color: #ddeeff;
`;
function SideBarFiltro() {
  return (
    <Filtro>
      <h4>Filtro</h4>
      <p>Valor Mínimo</p>
      <input type='number'placeholder></input>
      <p>Valor Máximo</p>
      <input type='number'placeholder></input>
      <p>Busca por nome</p>
      <input placeholder></input>
      <br />
      <br />
      <p>Ordenação:</p>
      <input></input>
    </Filtro>
  );
}
export default SideBarFiltro;