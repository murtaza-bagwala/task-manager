import {
  ADD_TASK,
  TOGGLE_TASK,
  SET_FILTER,
  DELETE_TASK,
  EDIT_TASK,
  SET_SELECTED_TASK,
  LOAD_TASKS,
  ADD_COMMENT_TO_TASK,
  ADD_ATTACHMENT_TO_TASK,
} from './actionTypes';

import {
  list, create, destroy, update,
} from '../services/TaskService';

import { loadComments } from './commentActions';

import { loadAttachments } from './attachmentActions';

export const addTask = (task) => ({
  type: ADD_TASK,
  payload: {
    id: task.id,
    content: task.content,
  },
});

export const toggleTask = (id) => ({
  type: TOGGLE_TASK,
  payload: { id },
});

export const deleteTask = (id) => ({
  type: DELETE_TASK,
  payload: { id },
});

export const editTask = (payload) => ({
  type: EDIT_TASK,
  payload,
});

export const setSelectedTask = (task) => ({
  type: SET_SELECTED_TASK,
  payload: task,
});

export const addCommentToTask = (taskId, commentId) => ({
  type: ADD_COMMENT_TO_TASK,
  payload: { id: taskId, commentId },
});

export const addAttachmentToTask = (taskId, attachmentId) => ({
  type: ADD_ATTACHMENT_TO_TASK,
  payload: { id: taskId, attachmentId },
});

export const loadTasks = (tasks) => ({ type: LOAD_TASKS, tasks });

export const setFilter = (filter) => ({ type: SET_FILTER, payload: { filter } });

export function fetchTasks(userToken) {
  return async function (dispatch) {
    try {
      const tasks = await list(userToken);
      const comments = [];
      const attachments = [];

      tasks.tasks.forEach((task) => {
        comments.push(task.comments);
        attachments.push(task.attachments);
        task.comments = task.comments.map((comment) => comment.id);
        task.attachments = task.attachments.map((attachment) => attachment.id);
      });

      if (tasks) {
        dispatch(loadTasks(tasks.tasks));
        dispatch(loadComments(comments.flat()));
        dispatch(loadAttachments(attachments.flat()));
      }
    } catch (error) {
      throw error;
    }
  };
}

export function saveTask(userToken, task) {
  return async function (dispatch) {
    try {
      const createdTask = await create(userToken, task);
      if (createdTask) {
        dispatch(addTask(createdTask.task));
      }
    } catch (error) {
      throw error;
    }
  };
}

export function modifyTask(userToken, task) {
  return async function (dispatch) {
    try {
      const updatedTask = await update(userToken, task);
      if (updatedTask) {
        dispatch(editTask(updatedTask.task));
      }
    } catch (error) {
      throw error;
    }
  };
}

export function destroyTask(userToken, taskId) {
  return async function (dispatch) {
    try {
      await destroy(userToken, taskId);
      dispatch(deleteTask(taskId));
    } catch (error) {
      throw error;
    }
  };
}
