import React, { Component } from 'react';

import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';

import NavigationClose from 'material-ui/svg-icons/navigation/close';
import IconButton from 'material-ui/IconButton';

import TodoAddForm from './TodoAddForm';


class TodoAddDialog extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    let handleClose = this.props.handleClose
    return (
      <Drawer docked={false}
          width={500}
          openSecondary={true}
          open={this.props.openDialog}>
        <AppBar iconElementLeft={<IconButton><NavigationClose onClick={handleClose}/></IconButton>}/>
        <TodoAddForm handleClose={handleClose} AddTodo={this.props.AddTodo}/>
      </Drawer>
    );
  }
}

export default TodoAddDialog;
