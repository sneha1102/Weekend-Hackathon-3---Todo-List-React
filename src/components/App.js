import React from "react";
import "./../styles/App.css";
import ToDo from "./toDo";
import { Button } from "@material-ui/core";

import SubmitForm from "./submitForm";
function App() {
  const tasks = [];
  const [task, setTask] = React.useState(tasks);
  const [currTask, setCurrTask] = React.useState("");

  const handleDelete = (index) => {
    const arrCopy = [...task];
    arrCopy.splice(index, 1);
    //console.log(arrCopy);
    setTask(arrCopy);
  };
  const handleSubmit = (currTask) => {
    if (currTask !== "") {
      const arrCopy = [...task];
      arrCopy.push(currTask);

      setTask(arrCopy);
    }
  };
  const handleSave = (currTask, index) => {
    let arrCopy = [...task];
    arrCopy.splice(index, 1, currTask);
    setTask(arrCopy);
  };
  return (
    <div id="main">
      <textarea
        id="task"
        // variant="outlined"
        placeholder="add task...."
        value={currTask}
        onChange={(event) => setCurrTask(event.target.value)}
      />
      <Button
        id="btn"
        variant="contained"
        color="secondary"
        onClick={(event) => {
          event.preventDefault();
          if (currTask !== "") {
            handleSubmit(currTask);
            setCurrTask("");
          }
        }}
      >
        Add
      </Button>
      <ToDo tasks={task} onDelete={handleDelete} onSave={handleSave} />
    </div>
  );
}

export default App;
