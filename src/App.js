
import {Component} from 'react';
import './App.css';


import Todo from './component/todo';
class App extends Component {
  render(){
  return (
    <div className="App">
      <h1>WELCOME</h1>
      <Todo />
    </div>
  );
}
}

export default App;
