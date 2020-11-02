import React from "react";
import "./../styles/App.css";
import TodoList from "./todoList";
function ToDo(props) {
  return (
    <div className="App">
      {props.tasks.map((todo, index) => (
        <TodoList
          className="list"
          content={todo}
          key={index}
          id={index}
          onDelete={props.onDelete}
          onSave={props.onSave}
        />
      ))}
    </div>
  );
}
export default ToDo;
