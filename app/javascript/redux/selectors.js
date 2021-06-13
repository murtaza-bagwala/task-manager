import { VISIBILITY_FILTERS } from '../constants';

export const getTasksState = (store) => store.tasks;

export const getCommentsState = (store) => store.comments;

export const getTaskList = (store) => (getTasksState(store) ? getTasksState(store).allIds : []);

export const getTaskById = (store, id) => (getTasksState(store) ? { ...getTasksState(store).byIds[id], id } : {});

export const getComments = (store) => (getCommentsState(store) ? { ...getCommentsState(store).byIds } : {});

export const getTasks = (store) => getTaskList(store).map((id) => getTaskById(store, id));

export const getTasksByVisibilityFilter = (store, visibilityFilter) => {
  const allTasks = getTasks(store);
  switch (visibilityFilter) {
    case VISIBILITY_FILTERS.COMPLETED:
      return allTasks.filter((task) => task.completed);
    case VISIBILITY_FILTERS.INCOMPLETE:
      return allTasks.filter((task) => !task.completed);
    case VISIBILITY_FILTERS.ALL:
    default:
      return allTasks;
  }
};

export const getCommentsForTask = (store, commentIds) => {
  const commentsByIds = getComments(store);
  return commentIds.map((commentId) => commentsByIds[commentId]);
};
