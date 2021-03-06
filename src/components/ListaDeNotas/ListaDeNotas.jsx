import React, { Component } from "react";
import CardNota from "../CardNota/CardNota";
import "./estilo.css";

export default class ListaDeNotas extends Component {

  render() {
    return (
      <ul className="lista-notas">
        {this.props.notas.map((nota, index) => {
          return(
            <li key={index} className="lista-notas_item">
              <CardNota 
              indice = {index}
              titulo={nota.titulo} 
              texto={nota.texto} 
              apagarNota={this.props.apagarNota}
              categoria={nota.categoria}/>
            </li>
          );
        })}
      </ul>
    );
  }
}
