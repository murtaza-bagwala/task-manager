import {
  ADD_TASK,
  TOGGLE_TASK,
  DELETE_TASK,
  EDIT_TASK,
  SET_SELECTED_TASK,
  LOAD_TASKS,
  ADD_COMMENT_TO_TASK,
  ADD_ATTACHMENT_TO_TASK,
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
            comments: [],
            attachments: [],
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
      const {
        id, content, deadline, completed,
      } = action.payload;
      const { comments, attachments } = state.selectedTask;
      const selectedTask = action.payload;
      return {
        ...state,
        byIds: {
          ...state.byIds,
          [id]: {
            ...state.byIds[id],
            content,
            deadline,
            completed,
          },
        },
        selectedTask: {
          ...selectedTask,
          comments,
          attachments,
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
    case ADD_COMMENT_TO_TASK: {
      const { id, commentId } = action.payload;
      return {
        ...state,
        byIds: {
          ...state.byIds,
          [id]: {
            ...state.byIds[id],
            comments: [...state.byIds[id].comments, commentId],
          },
        },
        selectedTask: {
          ...state.selectedTask,
          comments: [...state.selectedTask.comments, commentId],
        },
      };
    }
    case ADD_ATTACHMENT_TO_TASK: {
      const { id, attachmentId } = action.payload;
      return {
        ...state,
        byIds: {
          ...state.byIds,
          [id]: {
            ...state.byIds[id],
            attachments: [...state.byIds[id].attachments, attachmentId],
          },
        },
        selectedTask: {
          ...state.selectedTask,
          attachments: [...state.selectedTask.attachments, attachmentId],
        },
      };
    }
    default:
      return state;
  }
}
