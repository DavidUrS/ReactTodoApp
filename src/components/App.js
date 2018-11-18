import React, { Component } from 'react';
import Todos from './todos/Todos';
import AddTodo from './todos/AddTodo';
import './App.css';

class App extends Component {
  state={
    todos:[
      {id:1, content:'Ir a correr'},
      {id:2, content:'Jugar futbol'}
    ]
  }

  deleteTodo = (id)=>{
    this.setState({
      todos: this.state.todos.filter(todo=>{
        return todo.id !== id;
      })
    })
  }
  addTodo = (newTodo)=>{
    newTodo.id = 1;
    this.state.todos.forEach((todo, index)=>{
      if(todo.id>newTodo.id){
        newTodo.id = todo.id+1
      }
    })
    this.setState({
      todos: [...this.state.todos,newTodo]
    })
  }
  componentDidUpdate(){
    console.log(this.state.todos)
  }
  render() {
    return (
      <div className='App container-fluid'>
        <h3 className={'center blue-text'}>Todo APP with React</h3>
        <AddTodo add={this.addTodo}/>
        <Todos todos={this.state.todos} delTodo={this.deleteTodo}/>
      </div>
    );
  }
}

export default App;
