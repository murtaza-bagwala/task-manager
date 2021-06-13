import React, { useState } from 'react';

import { connect } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import { saveComment } from '../redux/commentActions';

export const AddComment = ({ saveComment, taskId }) => {
  const [state, setState] = useState({});

  const updateInput = (input) => {
    setState({ input });
  };

  const handleAddComment = (e) => {
    if (e.keyCode === 13 && state.input && state.input.length) {
      const token = sessionStorage.getItem('token');
      saveComment(token, taskId, state.input);
      setState({ input: '' });
    }
  };

  return (
    <TextField
      id="standard-full-width"
      style={{ margin: 8 }}
      fullWidth
      margin="normal"
      onChange={(e) => updateInput(e.target.value)}
      value={state.input}
      helperText={!state.input ? 'Comment cannot be empty!' : ''}
      error={!state.input ? 'Comment cannot be empty!' : ''}
      onKeyDown={handleAddComment}
    />
  );
};

export default connect(null, { saveComment })(AddComment);
