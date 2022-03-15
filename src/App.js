/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable jsx-a11y/anchor-is-valid */
import logo from './logo.svg';
import './App.css';
import Navigation  from './components/navigation';
import { Component } from 'react';



import todos  from "./todos.json";
  class App extends Component {
   
  

render() {
  return (
    <div className="App">

      <Navigation></Navigation>

        <img src={logo} className="App-logo" alt="logo" />
    </div>
  );
}
}
export default App;
