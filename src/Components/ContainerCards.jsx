import React from "react";
import styled from "styled-components";
import Produto1 from "./Produtos/produto1";
import Produto2 from "./Produtos/produto2";
import Produto3 from "./Produtos/produto3";
import Produto4 from "./Produtos/produto4";
import Produto5 from "./Produtos/produto5";
import Produto6 from "./Produtos/produto6";

const Container = styled.div`
  background-color: white;
  display: grid;
  /* width: 100%; */
  border: 1px solid black;
  height: 100vh;
  grid-template-columns: 1fr 1fr 1fr;
  /* grid-template-rows: 1fr 1fr; */
`;


function ContainerCards() {
  return <Container>
    <Produto1/>
    <Produto2/>
    <Produto3/>
    <Produto4/>
    <Produto5/>
    <Produto6/>
  </Container>;
}
export default ContainerCards;
