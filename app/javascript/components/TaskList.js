import React, { useEffect } from 'react';

import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import { getTasksByVisibilityFilter } from '../redux/selectors';
import Task from './Task';
import UpdateTaskModal from './UpdateTaskModal';
import { fetchTasks } from '../redux/actions';

const useStyles = makeStyles((theme) => ({
  text: {
    padding: theme.spacing(2, 2, 0),
  },
  textField: {},
  paper: {
    paddingBottom: 50,
    maxHeight: 400,
    overflow: 'auto',
  },
  list: {
    marginBottom: theme.spacing(2),
  },
  subheader: {
    backgroundColor: theme.palette.background.paper,
  },
  fabButton: {
    position: 'absolute',
    zIndex: 1,
    top: -30,
    left: 0,
    right: 0,
    margin: '0 auto',
  },
}));

export const TaskList = ({ tasks, fetchTasks }) => {
  const classes = useStyles();

  useEffect(() => {
    const token = sessionStorage.getItem('token');
    fetchTasks(token);
  }, []);

  return (
    <Paper square className={classes.paper}>
      <UpdateTaskModal />
      <List className={classes.list}>
        {tasks.map((task, index) => (
          <Task task={task} />
        ))}
      </List>
    </Paper>
  );
};

const mapStateToProps = (state) => {
  const { visibilityFilter } = state;
  const tasks = getTasksByVisibilityFilter(state, visibilityFilter);
  return { tasks };
};

export default connect(mapStateToProps, { fetchTasks })(TaskList);
