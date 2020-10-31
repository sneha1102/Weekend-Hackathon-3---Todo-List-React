import React from "react";
import "./styles.css";
import { Button, List, ListItem, ListItemText } from "@material-ui/core";
export default function ToDoList(props) {
  return (
    <div className="App container">
      <ListItemText primary={props.content} />

      <Button
        variant="contained"
        color="primary"
        onClick={() => props.onDelete(props.id)}
      >
        Delete
      </Button>
    </div>
  );
}
