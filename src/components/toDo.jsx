import React from "react";
import "./styles.css";
import TodoList from "./todoList";
import { List, ListItem, Box } from "@material-ui/core";
export default function ToDo(props) {
  return (
    <div className="App">
      {props.tasks.map((todo, index) => (
        <TodoList
          content={todo}
          key={index}
          id={index}
          onDelete={props.onDelete}
        />
      ))}
    </div>
  );
}
