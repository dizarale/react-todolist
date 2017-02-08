import React, { Component } from 'react';

import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import TodoAddDialog from './TodoAddDialog';
class NoteBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openDialog: false
    };
    this.handleOpen = this.handleOpen.bind(this)
    this.handleClose = this.handleClose.bind(this)
  }
handleOpen = () => this.setState({openDialog: true});
handleClose = () => this.setState({openDialog: false});

  render() {
    return (
      <div>
      <AppBar
      title="TODOLIST"
      showMenuIconButton={false}
      iconElementRight={
        <FlatButton label="ADD" onClick={this.handleOpen}/>
      }
      />
      <TodoAddDialog
      handleClose={this.handleClose}
      openDialog={this.state.openDialog}
      AddTodo={this.props.AddTodo}/>
      </div>

    );
  }
}

export default NoteBar;
