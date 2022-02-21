import React from "react";
import styled from "styled-components";

const Filtro = styled.div`
  background-color: #001020;
  display: flex;
  flex-flow: column wrap;
  /* width: 173px; */
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
      <input type='number'placeholder = 'Valor minimo'></input>
      <p>Valor Máximo</p>
      <input type='number'placeholder = "Valor maximo"></input>
      <p>Busca por nome</p>
      <input placeholder= "Nome do produto"></input>
      <br />
      <br />
      <p>Ordenação:</p>
      <input></input>
    </Filtro>
  );
}
export default SideBarFiltro;

/*import React from "react";
import styled from "styled-components";
import Produtos from "./Produtos/data/produtos.json"

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
export default class SideBarFiltro extends React.Component {
  state = {
    product: Produtos,
    query: ""
  }

  updateQuery(event){
    this.setState({
      query: event.target.value
    })
  }
  render() {
    return <Filtro>
    <h4>Filtro</h4>
      <p>Pesquise</p>
      <div>
      <input 
      type='text'
      placeholder= "Pesquisa"
      value={this.state.query}
      onChange={this.updateQuery}
      />
      {this.state.query}
      </div>  

    <p>Valor Máximo</p>
    <input type='text'placeholder></input>
    <p>Busca por nome</p>
    <input placeholder></input>
    <br />
    <br />
    <p>Ordenação:</p>
    <input></input>
  </Filtro>
  }
};*/