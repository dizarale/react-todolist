import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import cookie from 'react-cookie';
import './App.css';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();


import NoteBar from './NoteBar';
import TodoPaper from './TodoPaper';


class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      todolist : cookie.load('togolist') ? cookie.load('togolist') : []
    }

    this.AddTodo = this.AddTodo.bind(this)
    this.EditTodo = this.EditTodo.bind(this)
    this.DeleteTodo = this.DeleteTodo.bind(this)
    this.GetCookie = this.GetCookie.bind(this)
    this.SaveCookie = this.SaveCookie.bind(this)

  }

  GetCookie(){
    let cookieStr =  cookie.load('togolist')
    if(cookieStr != null){
      this.setState({
        todolist : cookieStr
      })
    }
  }
  SaveCookie(){
    let cookieJson = this.state.todolist
    let cookieStr = JSON.stringify(cookieJson, null, 2)
    cookie.save('togolist', cookieStr, { path: '/' });
  }
  AddTodo(todo){
    let id = 1;
    if(this.state.todolist.length > 0){
      id = this.state.todolist[this.state.todolist.length - 1].id + 1
    }
    todo.id = id
    todo.completed = false
    this.setState({
      todolist : this.state.todolist.concat([todo])
    },this.SaveCookie)
  }
  EditTodo(todo){
    let find = false
    let i = 0
    for( i ; i < this.state.todolist.length && find === false ; i++){
      if(this.state.todolist[i].id === todo.id){
        find = true
      }
    }
    let newtodolist = this.state.todolist
    newtodolist[i-1] = todo
    this.setState({
      todolist : newtodolist
    },this.SaveCookie)
  }
  DeleteTodo(todo){
    let find = false
    let i = 0
    for( i ; i < this.state.todolist.length && find === false ; i++){
      if(this.state.todolist[i].id === todo.id){
        find = true
      }
    }
    this.state.todolist.splice(i-1,1)
    this.setState({
      todolist : this.state.todolist
    },this.SaveCookie)
  }

  render() {
    return (
      <div>
      <MuiThemeProvider>
      <NoteBar AddTodo={this.AddTodo}/>
      </MuiThemeProvider>
      <MuiThemeProvider>
      <TodoPaper todolist={this.state.todolist} EditTodo={this.EditTodo} DeleteTodo={this.DeleteTodo} />
      </MuiThemeProvider>

      </div>
    );
  }
}

export default App;
