import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import React, { useState } from 'react';

import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import CancelIcon from '@material-ui/icons/Cancel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { connect } from 'react-redux';
import CommentList from './CommentList';
import AddComment from './AddComment';
import AddAttachment from './AddAttachment';

import { getAttachmentsForTask } from '../redux/selectors';

import { modifyTask, setSelectedTask } from '../redux/actions';

import { ATTACHMENT_HOST } from '../constants';

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
  attachments,
  selectedTask,
  modifyTask,
  setSelectedTask,
}) => {
  const classes = useStyles();

  const [content, setContent] = useState({});
  const [error, setError] = useState(false);

  const updateContent = (taskContent) => {
    setContent({ taskContent });
  };

  const toggleCheckbox = (completed) => {
    const token = sessionStorage.getItem('token');
    modifyTask(token, {
      ...selectedTask,
      completed,
    });
  };

  const updateDeadline = (deadline) => {
    const currentDate = new Date();
    const taskDeadline = new Date(deadline);
    if (taskDeadline > currentDate) {
      const token = sessionStorage.getItem('token');
      modifyTask(token, {
        ...selectedTask,
        deadline,
      });
      setError(false);
    } else {
      setError(true);
    }
  };

  const handleEditContent = (keyCode) => {
    if (keyCode === 13 && content.taskContent && content.taskContent.length) {
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
              helperText={error ? 'Deadline should be greater than the currentDate' : ''}
              error={error ? 'Deadline should be greater than the currentDate' : ''}
            />
          </div>
          <div style={{ 'padding-bottom': '10px', 'padding-up': '10px' }}>
            <AddComment taskId={selectedTask.id} />
            <CommentList />
          </div>
          <div style={{ 'padding-bottom': '10px', 'padding-up': '10px' }}>
            <AddAttachment taskId={selectedTask.id} />
          </div>
          <div style={{ 'padding-bottom': '10px', 'padding-up': '10px' }}>
            {attachments.map((attachment) => (
              <a href={`${ATTACHMENT_HOST}/${attachment.url}`} target="_blank" rel="noreferrer">{attachment.name}</a>
            ))}
          </div>
        </div>
      </Modal>
    </div>
  );
};

const mapStateToProps = (state) => {
  const { selectedTask } = state.tasks;
  let attachments = [];
  if (selectedTask.attachments) {
    attachments = getAttachmentsForTask(state, selectedTask.attachments);
  }
  return { selectedTask, attachments };
};

export default connect(mapStateToProps, { modifyTask, setSelectedTask })(
  UpdateTaskModal,
);
