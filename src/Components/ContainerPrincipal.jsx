import React from "react";
import styled from "styled-components";
import SideBarFiltro from "./SideBarFiltro";
import ContainerCards from "./ContainerCards";
import SideBarCarrinho from "./SideBarCarrinho";

const Main = styled.div`
  background-color: black;
  display: grid;
  grid-template-columns: 1fr 0fr 16fr 1fr;
  grid-template-rows: 1fr;
  grid-template-areas:
    "sidebar sidebar"
    "content content";
  height: 100vh;
  position: relative;
`;

function ContainerPrincipal() {
  return <Main>
    <ContainerCards/>
    <SideBarCarrinho />
    <SideBarFiltro />
  </Main>;
}
export default ContainerPrincipal;
