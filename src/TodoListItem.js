import React, { Component } from 'react';
import { TableRow, TableRowColumn} from 'material-ui/Table';

import Checkbox from 'material-ui/Checkbox';
import FlatButton from 'material-ui/FlatButton';

const style = {
  checkbox: {
    width: 25,
  },
}

class TodoListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this.toggleCompleted = this.toggleCompleted.bind(this)
    this.ViewTodo = this.ViewTodo.bind(this)
    this.ClickEdit = this.ClickEdit.bind(this)
  }

  toggleCompleted(ev, checked){
    this.ClickEdit(checked)
  }
  ViewTodo(){
    this.props.ViewTodo(this.props.todolistdata)
  }
  ClickEdit(checked){
    let {todolistdata} = this.props
    todolistdata.completed = checked
    this.props.EditTodo(todolistdata)
  }
  render() {
    let {todolistdata} = this.props
    return (

      <TableRow>
      <TableRowColumn style={style.checkbox}><Checkbox checked={todolistdata.completed}
      onCheck={this.toggleCompleted}/></TableRowColumn>
      <TableRowColumn><FlatButton label={todolistdata.title} onClick={this.ViewTodo}/></TableRowColumn>

      </TableRow>
    );
  }
}

export default TodoListItem;
