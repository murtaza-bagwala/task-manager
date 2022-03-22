import React from 'react';
import { connect } from 'react-redux';
import cx from 'classnames';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import EditRoundedIcon from '@material-ui/icons/EditRounded';
import DeleteIcon from '@material-ui/icons/Delete';
import { destroyTask, setSelectedTask } from '../redux/actions';

export const Task = ({
  task, toggleTask, destroyTask, setSelectedTask,
}) => {
  const handleDelete = () => {
    const token = sessionStorage.getItem('token');
    destroyTask(token, task.id);
  };

  return (
    <React.Fragment key={task.id}>
      <ListItem
        button
      >
        <ListItemText primary={task.content} />
        <EditRoundedIcon onClick={() => setSelectedTask(task)} />
        <DeleteIcon onClick={handleDelete} />
      </ListItem>
    </React.Fragment>
  );
};

export default connect(null, { destroyTask, setSelectedTask })(Task);
