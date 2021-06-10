import React, { useState } from 'react';

import { connect } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import { saveTask } from '../redux/actions';

export const AddTask = ({ saveTask }) => {
  const [state, setState] = useState({});

  const updateInput = (input) => {
    setState({ input });
  };

  const handleAddTask = (e) => {
    if (e.keyCode === 13 && (state.input && state.input.length)) {
      const token = sessionStorage.getItem('token');
      saveTask(token, {
        content: state.input,
        deadline: '',
      });
      setState({ input: '' });
    }
  };

  return (
    <TextField
      id="standard-full-width"
      style={{ margin: 8 }}
      placeholder="What needs to be done?"
      fullWidth
      margin="normal"
      onChange={(e) => updateInput(e.target.value)}
      value={state.input}
      onKeyDown={handleAddTask}
      helperText={!state.input ? 'Task description cannot be empty!' : ''}
      error={!state.input ? 'Task description cannot be empty!' : ''}
    />
  );
};

export default connect(null, { saveTask })(AddTask);
