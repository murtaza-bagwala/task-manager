import {
  ADD_TASK,
  TOGGLE_TASK,
  DELETE_TASK,
  EDIT_TASK,
  SET_SELECTED_TASK,
  LOAD_TASKS,
} from '../actionTypes';

const initialState = {
  allIds: [],
  byIds: {},
  selectedTask: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_TASK: {
      const { id, content } = action.payload;
      return {
        ...state,
        allIds: [...state.allIds, id],
        byIds: {
          ...state.byIds,
          [id]: {
            content,
            completed: false,
          },
        },
      };
    }
    case TOGGLE_TASK: {
      const { id } = action.payload;
      return {
        ...state,
        byIds: {
          ...state.byIds,
          [id]: {
            ...state.byIds[id],
            completed: !state.byIds[id].completed,
          },
        },
      };
    }
    case DELETE_TASK: {
      const { id } = action.payload;
      const index = state.allIds.indexOf(id);
      const { [id]: value, ...byIds } = state.byIds;

      return {
        ...state,
        byIds,
        allIds: [
          ...state.allIds.slice(0, index),
          ...state.allIds.slice(index + 1),
        ],
      };
    }
    case EDIT_TASK: {
      const { id, content } = action.payload;
      return {
        ...state,
        byIds: {
          ...state.byIds,
          [id]: {
            ...state.byIds[id],
            content,
          },
        },
      };
    }
    case SET_SELECTED_TASK: {
      const selectedTask = action.payload;
      return {
        ...state,
        selectedTask,
      };
    }
    case LOAD_TASKS: {
      const byIds = {};
      action.tasks.forEach((task) => {
        const { id, ...newTask } = task;
        byIds[task.id] = newTask;
      });
      return {
        ...state,
        byIds,
        allIds: action.tasks.map((task) => task.id),
      };
    }
    default:
      return state;
  }
}
