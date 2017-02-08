import React, { Component } from 'react';

import Dialog from 'material-ui/Dialog';

import TodoViewForm from './TodoViewForm';

class TodoViewDialog extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
    this.CloseViewTodo = this.CloseViewTodo.bind(this)
  }
  CloseViewTodo = () => {
    this.props.CloseViewTodo()
  }
  render() {
    return (
      <Dialog
          title={"TODO_"+this.props.viewtododata.id}
          modal={false}
          open={this.props.viewtodoOpen}
          onRequestClose={this.props.CloseViewTodo}
        >
          <TodoViewForm todo={this.props.viewtododata} CloseViewTodo={this.CloseViewTodo}
          EditTodo={this.props.EditTodo} DeleteTodo={this.props.DeleteTodo}/>
        </Dialog>
    );
  }
}

export default TodoViewDialog;
