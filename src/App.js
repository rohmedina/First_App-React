import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";

import tasks from "./sample/tasks.json";

// Components
import Tasks from "./components/Tasks";
import TaskForm from "./components/TaskForm";
import Posts from "./components/Posts";

/* function Helloworld(props) {
  return (
    <div id="hello">
      <h3>{props.subtitle}</h3>
      {props.mytext}
    </div>
  );
} 

class Helloworld extends React.Component {
  state = {
    show: true,
  };

  toggleShow = () => {
    this.setState({ show: !this.state.show });
  };

  render() {
    if (this.state.show) {
      return (
        <div id="hello">
          <h3>{this.props.subtitle}</h3>
          {this.props.mytext}
          <button onClick={this.toggleShow}>Toggle Show</button>
        </div>
      );
    } else {
      return (
        <h1>
          No hay elementos
          <button onClick={this.toggleShow}>Toggle Show</button>
        </h1>
      );
    }
  }
}

class App extends React.Component {
  render() {
    return (
      <div>
        This is my component: <Helloworld />
      </div>
    );
  }
}

const App = () => (
  <div>
    This is my component: <Helloworld />
  </div>
);

function App() {
  return (
    <div>
      This is my component:
      <Helloworld mytext="Hello RoDev" subtitle="loremp ispum" />
      <Helloworld mytext="estudia mucho" subtitle="Component two" />
      <Helloworld mytext="vo dale" subtitle="Component tree" />
    </div>
  );
}
*/

class App extends Component {
  state = {
    tasks: tasks,
  };

  addTask = (title, description) => {
    const newTask = {
      title: title,
      description: description,
      id: this.state.tasks.length,
    };
    this.setState({
      tasks: [...this.state.tasks, newTask],
    });
  };

  deleteTask = (id) => {
    const newTasks = this.state.tasks.filter((task) => task.id !== id);
    this.setState({ tasks: newTasks });
    console.log(newTasks);
  };

  checkDone = (id) => {
    const newTasks = this.state.tasks.map((task) => {
      if (task.id === id) {
        task.done = !task.done;
      }
      return task;
    });
    this.setState({ tasks: newTasks });
  };

  render() {
    return (
      <div>
        <Router>
          <Link to="/">Home</Link>
          <br />
          <Link to="/posts">Posts</Link>
          <Route
            exact
            path="/"
            render={() => {
              return (
                <div>
                  <TaskForm addTask={this.addTask} />
                  <Tasks tasks={this.state.tasks} deleteTask={this.deleteTask} checkDone={this.checkDone} />
                </div>
              );
            }}
          ></Route>
          <Route path="/posts" component={Posts}></Route>
        </Router>
      </div>
    );
  }
}

export default App;
