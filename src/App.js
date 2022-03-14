import React from "react";
import ContainerPrincipal from "./Components/ContainerPrincipal";
import ContainerCards from "./Components/ContainerCards";
import SideBarCarrinho from "./Components/SideBarCarrinho";
import SideBarFiltro from "./Components/SideBarFiltro";
import styled from "styled-components";

const MainApp = styled.div`
background-color: none;
display: flex;
justify-content: center;

`;
// const OrdenarProdutos = styled.select`
// background-color: #001020;
// color: #ddeeff;
// padding: 0.5vw;
// font-size:1vw;
// `
export default function App() {
  return (
    <MainApp>
      {/* <header>
        <h4></h4>
      </header> */}

      <SideBarFiltro />
      <ContainerPrincipal />
      <SideBarCarrinho /> 
    </MainApp>
  );
}


