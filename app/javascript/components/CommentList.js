import React from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { getCommentsForTask } from '../redux/selectors';

const useStyles = makeStyles((theme) => ({
  text: {
    padding: theme.spacing(2, 2, 0),
  },
  textField: {},
  paper: {
    paddingBottom: 50,
    maxHeight: 200,
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

export const CommentList = ({ comments = [] }) => {
  const classes = useStyles();

  return (
    <Paper square className={classes.paper}>
      <List className={classes.list}>
        {comments.map((comment, index) => (
          <ListItem>
            <ListItemText primary={comment.comment} />
          </ListItem>
        ))}
      </List>
    </Paper>
  );
};

const mapStateToProps = (state) => {
  const { selectedTask } = state.tasks;
  debugger;
  const comments = getCommentsForTask(state, selectedTask.comments);
  debugger;
  return { comments };
};

export default connect(mapStateToProps, null)(CommentList);
