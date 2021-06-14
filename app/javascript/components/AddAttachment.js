import React, { useState } from 'react';

import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import { saveFile } from '../redux/attachmentActions';

import { ALLOWED_EXTENSIONS } from '../constants';

export const AddAttachment = ({ taskId, saveFile }) => {
  const [error, setError] = useState('');

  const onChange = async (file) => {
    if (file && ALLOWED_EXTENSIONS.includes(file.name.split('.').pop())) {
      const token = sessionStorage.getItem('token');
      saveFile(token, taskId, file);
      setError('');
    } else {
      setError('Extension not allowed');
    }
  };

  return (
    <label htmlFor="upload-photo">
      <input
        style={{ display: 'none' }}
        id="upload-photo"
        name="upload-photo"
        type="file"
        onChange={(e) => onChange(e.target.files[0])}
      />

      <Button color="primary" variant="contained" component="span">
        Upload File
      </Button>
      <span style={{ color: 'red' }}>{error}</span>
    </label>
  );
};

export default connect(null, { saveFile })(AddAttachment);
