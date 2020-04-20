import React from 'react';
import { Platform, StyleSheet, Text, View, FlatList } from 'react-native';
import Header from "./Todo/Header"
import Inputbar from './Todo/Input';
import TodoItems from "./Todo/todoitems";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todoInput: "",
      todos: [
        { id: 0, title: "Todo", done: false },
        { id: 1, title: "New todo", done: false }
      ]
    }
  }
  addnewtodo() {
    // console.log("hi1");
    // console.log(this.state.todoInput)
    let todos = this.state.todos;
    todos.unshift({
      id: todos.length + 1,
      title: this.state.todoInput,
      done: false

    });
    this.setState({
      todos,
      todoInput: ""
    });
  }

  toggleDone(item) {
    let todos = this.state.todos;
    todos = todos.map((todo) => {
      if (todo.id == item.id) {
        todo.done = !todo.done;
      }
      return todo;
    })
    this.setState({ todos });
  }

  // console.log("hi2");
  // console.log(this.state)
  removetodo(item) {
    let todos = this.state.todos;
    todos = todos.filter((todo) => todo.id !== item.id);
    this.setState({ todos });
  }



  render() {
    const Statusbar = (Platform.OS == "Android") ? <View style={styles.Statusbar}></View> : <View></View>
    return (
      <View style={styles.container}>
        {Statusbar}
        <View style={styles.Statusbar}>
        <Header title="todo" />
        <Inputbar
          textChange={todoInput => this.setState({ todoInput })}
          addnewtodo={() => this.addnewtodo()}

        />
        {/* <Text>{this.state.todoInput}</Text> */}
        <FlatList
          data={this.state.todos}
          extraData={this.state}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => {
            return (
              <TodoItems todoItems={item}
                toggleDone={() => this.toggleDone(item)}
                removetodo={() => this.removetodo(item)}
              />
            )
          }
          }
        />
      </View>
       </View>

    );
  }
}


const styles = StyleSheet.create({
  container: {

    // flex: 1,

    backgroundColor: '#fff',

  },
  statusbar: {
    padding: 0,
    margin: 0,
    backgroundColor: "#FFFFFF",
  }
});

