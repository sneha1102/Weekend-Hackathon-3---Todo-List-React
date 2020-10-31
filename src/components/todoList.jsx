import React from "react";
import "./styles.css";

import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { Button, List, ListItem, ListItemText } from "@material-ui/core";
export default function ToDoList(props) {
  const [open, setOpen] = React.useState(false);
  const [currTask, setCurrTask] = React.useState(props.content);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleSave = (event) => {
    event.preventDefault();
    if (currTask !== "") {
      props.onSave(currTask, props.id);
      setCurrTask("");
    }
  };
  const handleClose = () => {
    setOpen(false);
  };
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

      <Button variant="contained" color="primary" onClick={handleClickOpen}>
        Edit
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Edit Task </DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id={props.id}
            value={currTask}
            onChange={(event) => setCurrTask(event.target.value)}
            type="email"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} variant="outlined " color="primary">
            Cancel
          </Button>
          <Button
            onClick={(event) => {
              handleSave(event);
              handleClose();
            }}
            variant="outlined "
            color="primary"
          >
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
