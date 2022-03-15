/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";


class Navigation extends Component {

    constructor() {
        super();
        this.state = {
          title: "Aplicacion de Tareas",
          ntareas: 10
        }
      }
      //Como quería utilizar un componente disinto para la navegaciona diferencia del ejemplo
      //ha habido que poner el constructor con el objeto aquí para que dentro del nav
      //se pudiera encontrar this.state.title
        
   

   
    render(){
        return (
            <nav className="navbar navbar-dark bg-dark">
      
            <a href="" className="text-white">
             {this.state.title}
            </a>
    
          </nav>
        )
    }
}

export default Navigation;