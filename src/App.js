import React from "react";
import ContainerPrincipal from "./Components/ContainerPrincipal";
/* import ContainerCards from "./Components/ContainerCards";
import SideBarCarrinho from "./Components/SideBarCarrinho";
import SideBarFiltro from "./Components/SideBarFiltro"; */
import styled from "styled-components";

const MainApp = styled.div`
background-color: none;
display: grid;
grid: 2 3;
`;

export default function App() {
  return (
    <MainApp>
      <header>
        <h4></h4>
      </header>

      {/* <SideBarFiltro /> */}
      <ContainerPrincipal />
     {/*  <SideBarCarrinho />  */}
    </MainApp>
  );
}


