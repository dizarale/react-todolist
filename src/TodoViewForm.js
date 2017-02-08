import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';


import RaisedButton from 'material-ui/RaisedButton';

class TodoAddForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id:this.props.todo.id,
      title : this.props.todo.title,
      description : this.props.todo.description,
      completed:this.props.todo.completed,
      date: this.props.todo.date,
    };
    this.ClickEdit = this.ClickEdit.bind(this)
    this.ClickDelete = this.ClickDelete.bind(this)
  }
  ClickEdit(){
    let todo = {
      id:this.state.id,
      title:this.state.title,
      completed:this.props.todo.completed,
      description:this.state.description,
      date:this.state.date
    }
    this.props.EditTodo(todo)
    this.props.CloseViewTodo()
  }
  ClickDelete(){
    let todo = {
      id:this.state.id,
      title:this.state.title,
      completed:this.props.todo.completed,
      description:this.state.description,
      date:this.state.date
    }
    this.props.DeleteTodo(todo)
    this.props.CloseViewTodo()
  }
  render() {
    return (
      <div>
      <TextField
      floatingLabelText="Title*"
      value={this.state.title}
      onChange={(e)=>this.setState({title: e.target.value})}
      fullWidth={true}
      />
      <TextField
      floatingLabelText="Description"
      value={this.state.description}
      onChange={(e)=>this.setState({description: e.target.value})}
      multiLine={true}
      rows={5}
      fullWidth={true}
      />
      <DatePicker
      floatingLabelText="Date"
      defaultDate={new Date(this.state.date)}
      onChange={(e,date)=>this.setState({date: date})}
      fullWidth={true}
      />
      <div style={{textAlign:'center'}}>
      <RaisedButton label="Edit" primary={true} onClick={this.ClickEdit}/>
      <RaisedButton label="Remove" secondary={true} onClick={this.ClickDelete}/>
      </div>
      </div>
    );
  }
}

export default TodoAddForm;
