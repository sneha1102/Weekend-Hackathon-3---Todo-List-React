import React from "react";
import "./../styles/App.css";
import Textarea from "@material-ui/core";
import { TextField, Button } from "@material-ui/core";
function SubmitForm(props) {
  const [currTask, setCurrTask] = React.useState("");
  return (
    <div className="main ">
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
            props.onSave(currTask);
            setCurrTask("");
          }
        }}
      >
        Add
      </Button>
    </div>
  );
}
export default SubmitForm;
