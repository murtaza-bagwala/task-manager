import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import React, { useState } from 'react';

import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import CancelIcon from '@material-ui/icons/Cancel';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import { connect } from 'react-redux';
import { modifyTask, setSelectedTask } from '../redux/actions';

const isEmpty = (object) => !object || Object.keys(object).length === 0;

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export const UpdateTaskModal = ({
  selectedTask,
  modifyTask,
  setSelectedTask,
}) => {
  const classes = useStyles();

  const [content, setContent] = useState({});

  const updateContent = (taskContent) => {
    setContent({ taskContent });
  };

  const toggleCheckbox = (completed) => {
    const token = sessionStorage.getItem('token');
    debugger;
    modifyTask(token, {
      ...selectedTask,
      completed,
    });
  };

  const updateDeadline = (deadline) => {
    const token = sessionStorage.getItem('token');
    modifyTask(token, {
      ...selectedTask,
      deadline,
    });
  };

  const handleEditContent = (keyCode) => {
    if (keyCode === 13 && (content.taskContent && content.taskContent.length)) {
      const { taskContent } = content;
      const token = sessionStorage.getItem('token');
      modifyTask(token, {
        ...selectedTask,
        content: taskContent,
      });
    }
  };

  const handleClose = () => {
    setSelectedTask({});
    setContent({});
  };

  if (isEmpty(selectedTask)) {
    return null;
  }

  return (
    <div>
      <Modal
        open
        onClose={handleClose}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div className={classes.paper}>
          <div style={{ 'padding-left': '330px' }}>
            <CancelIcon
              variant="contained"
              color="primary"
              onClick={handleClose}
            />
          </div>
          <TextField
            id="standard-full-width"
            style={{ margin: 8 }}
            placeholder="What needs to be done?"
            fullWidth
            margin="normal"
            value={
              !isEmpty(content) ? content.taskContent : selectedTask.content
            }
            onChange={(e) => updateContent(e.target.value)}
            onClose={handleClose}
            onKeyDown={(e) => handleEditContent(e.keyCode)}
          />
          <div style={{ 'padding-bottom': '10px', 'padding-up': '10px' }}>
            <FormControlLabel
              control={(
                <Checkbox
                  checked={selectedTask.completed}
                  onChange={(e) => toggleCheckbox(e.target.checked)}
                  name="checkedB"
                  color="primary"
                />
              )}
              label="Completed"
            />
          </div>
          <div style={{ 'padding-bottom': '10px', 'padding-up': '10px' }}>
            <TextField
              id="datetime-local"
              label="Set Deadline"
              type="datetime-local"
              defaultValue={
                selectedTask.deadline
                  ? selectedTask.deadline.replace(/.\d+Z$/g, '')
                  : '2021-06-01T10:30'
              }
              className={classes.textField}
              onChange={(e) => updateDeadline(e.target.value)}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </div>
        </div>
      </Modal>
    </div>
  );
};

const mapStateToProps = (state) => {
  const { selectedTask } = state.tasks;
  return { selectedTask };
};

export default connect(mapStateToProps, { modifyTask, setSelectedTask })(
  UpdateTaskModal,
);
