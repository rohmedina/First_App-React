import React, { Component } from "react";

export default class TaskForm extends Component {
  state = {
    title: "",
    description: "",
  };

  onSubmit = (e) => {
    this.props.addTask(this.state.title, this.state.description);
    e.preventDefault();
  };

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input onChange={this.onChange} value={this.state.title} name="title" type="text" placeholder="White a Task " />
        <br />
        <br />
        <textarea onChange={this.onChange} value={this.state.description} name="description" placeholder="White a Description" />
        <br />
        <input type="submit" value="Enviar" />
      </form>
    );
  }
}
