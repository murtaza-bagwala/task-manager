import { ADD_COMMENT, LOAD_COMMENTS } from './actionTypes';

import { create } from '../services/CommentService';

import { addCommentToTask } from './actions';

const nextCommentId = 0;

export const addComment = (comment) => ({
  type: ADD_COMMENT,
  payload: {
    id: comment.id,
    comment: comment.comment,
  },
});

export const loadComments = (comments) => ({
  type: LOAD_COMMENTS,
  payload: {
    comments,
  },
});

export function saveComment(userToken, taskId, comment) {
  return async function (dispatch) {
    try {
      const createdComment = await create(userToken, taskId, { comment });
      
      if (createdComment) {
        dispatch(addComment(createdComment.comment));
        dispatch(addCommentToTask(taskId, createdComment.comment.id));
      }
    } catch (error) {
      throw error;
    }
  };
}
