import { ADD_ATTACHMENT, LOAD_ATTACHMENTS } from './actionTypes';

import { create } from '../services/AttachmentService';

import { addAttachmentToTask } from './actions';

export const addAttachment = (file) => ({
  type: ADD_ATTACHMENT,
  payload: {
    id: file.id,
    name: file.name,
    url: file.url,
  },
});

export const loadAttachments = (attachments) => ({
  type: LOAD_ATTACHMENTS,
  payload: {
    attachments,
  },
});

export function saveFile(userToken, taskId, file) {
  return async function (dispatch) {
    try {
      const createdfile = await create(userToken, taskId, file);
      if (createdfile) {
        dispatch(addAttachment(createdfile.attachment));
        dispatch(addAttachmentToTask(taskId, createdfile.attachment.id));
      }
    } catch (error) {
      throw error;
    }
  };
}
