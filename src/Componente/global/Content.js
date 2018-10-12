import React, { Component } from 'react';
import './css/Content.css';

class Content extends Component {
  render() {
    return (
      <div className="Content">
      
      <h1>  ¿Qué es React.js?
        Como muchos ya sabréis, ReactJS es una librería Javascript
        desarrollada por Facebook y diseñada para ayudarnos a crear 
        SPA’s (Single Page Application), su objetivo concretamente
        es tratar de facilitar la tarea de desarrollar interfaces de usuario.
        Podríamos decir que React es la V en un contexto en el que se use el 
        patrón MVC o MVVM.
        
          <a
            className="App-link"
            href="http://186.64.118.50/~mpcgarcia/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vive Quilicura

          </a>
          </h1>
      
      </div>
    );
  }
}

export default Content;
