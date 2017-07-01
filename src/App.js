import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {TodoForm, TodoList, Footer} from './components/todo'
import {addTodo, generateId, findById, toggleTodo, updateTodo, removeTodo} from './lib/todoHelpers'
import {pipe, partial} from './lib/utils'

class App extends Component {

  state={
      todos:[
        {id:1, name:"Learn JSX", isComplete:true},
        {id:2, name:"Implement Pricelist module", isComplete:false},
        {id:3, name:"Ship the app.", isComplete:false},
      ],

      currentTodo: '',
      errorMessage: ''
  }

  handleRemove = (id, evt) => {
    const updatedTodos = removeTodo(this.state.todos, id)
    this.setState({todos:updatedTodos})
  }
  handleToggle = (id) => {

    const getUpdatedTodos = pipe(findById,toggleTodo, partial(updateTodo, this.state.todos))
    // const todo = findById(id, this.state.todos)
    // const toggledTodo = toggleTodo(todo)
    // const updatedTodos = updateTodo(toggledTodo, this.state.todos)
     const updatedTodos = getUpdatedTodos(id, this.state.todos)
    this.setState({
      todos:updatedTodos
    })

  }
  handleSubmit = (evt) => {
    evt.preventDefault()
    const newId = generateId()
    const newTodo={id:newId, name:this.state.currentTodo, isComplete:false}
    const updatedList = addTodo(this.state.todos, newTodo)

    this.setState({
      todos:updatedList,
      currentTodo:'',
      errorMessage:''
    })
  }
  handleEmptySubmit= (evt) => {
    evt.preventDefault()
    this.setState({
      errorMessage:'Enter a value for Todo'
    })

  }
  handleInputChange= (evt) => {
    this.setState({
      currentTodo:evt.target.value
    })
  }
  render() {
    const submitHandler=this.state.currentTodo?this.handleSubmit:this.handleEmptySubmit
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div className="Todo-App">
          <div className="error">{this.state.errorMessage}</div>
          <TodoForm handleInputChange = {this.handleInputChange} 
            currentTodo={this.state.currentTodo} 
            handleSubmit={submitHandler}/>
          <TodoList handleToggle={this.handleToggle} 
            todos={this.state.todos} handleRemove={this.handleRemove}/>
           <Footer/> 
        </div>
      </div>
    );
  }
}

export default App;
