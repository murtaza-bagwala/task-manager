import {
  ADD_TASK,
  TOGGLE_TASK,
  SET_FILTER,
  DELETE_TASK,
  EDIT_TASK,
  SET_SELECTED_TASK,
  LOAD_TASKS,
} from './actionTypes';

import {
  list, create, destroy, update,
} from '../services/TaskService';

let nextTaskId = 0;

export const addTask = (content) => ({
  type: ADD_TASK,
  payload: {
    id: ++nextTaskId,
    content,
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

export const loadTasks = (tasks) => ({ type: LOAD_TASKS, tasks });

export const setFilter = (filter) => ({ type: SET_FILTER, payload: { filter } });

export function fetchTasks(userToken) {
  return async function (dispatch) {
    try {
      const tasks = await list(userToken);
      if (tasks) {
        dispatch(loadTasks(tasks.tasks));
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
        dispatch(addTask(createdTask.task.content));
      }
    } catch (error) {
      throw error;
    }
  };
}

export function modifyTask(userToken, task) {
  debugger;
  return async function (dispatch) {
    try {
      const updatedTask = await update(userToken, task);
      debugger;
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
    debugger;
    try {
      await destroy(userToken, taskId);
      debugger;
      dispatch(deleteTask(taskId));
    } catch (error) {
      throw error;
    }
  };
}
