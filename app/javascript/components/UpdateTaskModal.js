import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import React, { useState } from 'react';

import TextField from '@material-ui/core/TextField';
import { connect } from 'react-redux';
import { modifyTask, setSelectedTask } from '../redux/actions';

const isEmpty = (object) => Object.keys(object).length === 0;

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

  const updateInput = (input) => {
    setContent({ input });
  };

  const handleEditTask = (e) => {
    if (e.keyCode === 13) {
      const token = sessionStorage.getItem('token');
      modifyTask(token, {
        id: selectedTask.id,
        content: e.target.value,
      });
      setSelectedTask({});
      setContent({});
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
          <TextField
            id="standard-full-width"
            style={{ margin: 8 }}
            placeholder="What needs to be done?"
            fullWidth
            margin="normal"
            value={
            !isEmpty(content)
              ? content.input
              : !isEmpty(selectedTask)
                ? selectedTask.content
                : ''
						}
            onChange={(e) => updateInput(e.target.value)}
            onClose={handleClose}
            onKeyDown={handleEditTask}
          />
        </div>
      </Modal>
    </div>
  );
};

const mapStateToProps = (state) => {
  debugger;
  const { selectedTask } = state.tasks;
  return { selectedTask };
};

export default connect(mapStateToProps, { modifyTask, setSelectedTask })(
  UpdateTaskModal,
);
