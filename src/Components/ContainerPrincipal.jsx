import React from "react";
import styled from "styled-components";
import SideBarFiltro from "./SideBarFiltro";
import ContainerCards from "./ContainerCards";
import SideBarCarrinho from "./SideBarCarrinho";
/* const Quantidade = styled.div`
  background-color: none;
  display: flex;
  width: 0%;
  border: 1px solid black;
  height: 0%;
  flex-direction: row;
  justify-content: top;
  color: white;
`;
 */
const Main = styled.div`
  /* background-color: black;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr; */
  /* grid-template-areas:
    "sidebar sidebar"
    "content content"; */
  /* height: 100%; */
  /* position: relative; */
`;

function ContainerPrincipal() {
  return <Main>
    <ContainerCards/>
    {/* <SideBarCarrinho />
    <SideBarFiltro /> */}
  </Main>;
}
export default ContainerPrincipal;
