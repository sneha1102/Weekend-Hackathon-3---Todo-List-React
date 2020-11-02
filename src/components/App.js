import React from "react";
import "./../styles/App.css";
import ToDo from "./toDo";

import SubmitForm from "./submitForm";
function App() {
  const tasks = [];
  const [task, setTask] = React.useState(tasks);

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
      <SubmitForm onSave={handleSubmit} />
      <hr />
      <ToDo tasks={task} onDelete={handleDelete} onSave={handleSave} />
    </div>
  );
}

export default App;
