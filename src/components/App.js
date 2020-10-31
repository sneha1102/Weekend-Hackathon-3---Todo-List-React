import React from "react";
import "./../styles/App.css";
import ToDo from "./toDo";
function App() {
  const tasks = ["task1", "task2", "task3"];
  const [task, setTask] = React.useState(tasks);
  const [currTask, setCurrTask] = React.useState("");

  const handleDelete = (index) => {
    const arrCopy = [...task];
    arrCopy.splice(index, 1);
    //console.log(arrCopy);
    setTask(arrCopy);
  };
  const handleSave = (currTask) => {
    const arrCopy = [...task];
    arrCopy.push(currTask);
    //console.log(currTask);
    setTask(arrCopy);
  };
  return (
    <div id="main">
      <textarea id="task"></textarea>
      <button
        type="submit"
        id="btn"
        onClick={(event) => {
          event.preventDefault();
          handleSave(currTask);
          setCurrTask("");
        }}
      >
        Add
      </button>
      <ToDo tasks={task} onDelete={handleDelete} />
    </div>
  );
}

export default App;
