import React from "react";
import "./../styles/App.css";

import { TextField, Button } from "@material-ui/core";
function SubmitForm(props) {
  const [currTask, setCurrTask] = React.useState("");
  return (
    <div className="main ">
      <form>
        <TextField
          id="task"
          variant="outlined"
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
            props.onSave(currTask);
            setCurrTask("");
          }}
        >
          Add
        </Button>
      </form>
    </div>
  );
}
export default SubmitForm;
