import React, { Component } from 'react';
import {Table, TableBody} from 'material-ui/Table';


import TodoListItem from './TodoListItem';
import TodoViewDialog from './TodoViewDialog';
import {ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';

class TodoPaper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewtodoOpen : false,
      viewtododata : {}
    };
    this.ViewTodo = this.ViewTodo.bind(this)
    this.CloseViewTodo = this.CloseViewTodo.bind(this)
    this.checkCom = this.checkCom.bind(this)
  }
  ViewTodo(todo){
    this.setState({
      viewtodoOpen : true,
      viewtododata : todo
    })
    let {todolist} = this.props
    console.log(todolist.filter(this.checkCom))
  }
  checkCom(){
    let {todolist} = this.props
    return todolist.completed === true
  }
  CloseViewTodo(){
    this.setState({
      viewtodoOpen : false,
      viewtododata : {}
    })
  }
  render() {
    let {todolist} = this.props
    let {EditTodo} = this.props
    let {DeleteTodo} = this.props
    return (
      <div>
      <ListItem
                  key={0}
                  style={{backgroundColor:'#4CAF50'}}
                  primaryText="Completed"
                  nestedItems={
                    todolist.filter((todo)=>{return todo.completed === true}).map((todo,i)=><ListItem key={i} primaryText={todo.title}/>)
                  }
                />
                <Divider/>
      <Table
      selectable={false}
      >
      <TableBody
      displayRowCheckbox={false}
      >
        {todolist.map( (todo,i) => <TodoListItem key={i} todolistdata={todo} EditTodo={EditTodo} ViewTodo={this.ViewTodo}/>)}
      </TableBody>
      </Table>
      <TodoViewDialog viewtodoOpen={this.state.viewtodoOpen} viewtododata={this.state.viewtododata}
      CloseViewTodo={this.CloseViewTodo}
      EditTodo={EditTodo} DeleteTodo={DeleteTodo}/>
      </div>
    );
  }
}

export default TodoPaper;
