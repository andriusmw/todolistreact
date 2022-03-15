/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable jsx-a11y/anchor-is-valid */
import logo from './logo.svg';
import './App.css';
import Navigation  from './components/navigation';
import { Component } from 'react';



import todos  from "./todos.json";
  class App extends Component {
   
    constructor() {
      super();
      this.state = {
       todos: [todos]
      }

      
    }

render() {

  //console.log("antes de renderizar el componente navigation");
    //console.log(this.state.todos)
  const todos = this.state.todos.map((todo, i) => {
      return(
        <div className="card" key={todo.title}>
          
          <div className="card-header">
              <h3> {todo.title} </h3>
          </div>
          <div className="card-body">
                <p>{todo.description} </p>
            </div>
          </div>
      )
    })

  return (
    <div className="App">

      <Navigation></Navigation>

        <img src={logo} className="App-logo" alt="logo" />

        {todos}
    </div>
  );
}
}
export default App;
