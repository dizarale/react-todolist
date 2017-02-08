import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';


import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

class TodoViewForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title : "",
      description : "",
      date: new Date(),
    };
    this.ClickAdd = this.ClickAdd.bind(this)
  }
  ClickAdd(){
    if(this.state.title !== ""){
      let date = this.state.date ? this.state.date:new Date()
      let todo = {
        title:this.state.title,
        description:this.state.description,
        date:date
      }
      this.props.AddTodo(todo)
      this.setState({
        title:"",
        description:"",
        date:new Date()
      })
      this.props.handleClose()
    }else{

    }
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
      value={this.state.date}
      onChange={(e,date)=>this.setState({date: date})}
      fullWidth={true}
      />
      <div style={{textAlign:'center'}}>
      <FloatingActionButton secondary={true} onClick={this.ClickAdd}>
      <ContentAdd />
      </FloatingActionButton>
      </div>
      </div>
    );
  }
}

export default TodoViewForm;
