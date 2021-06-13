import { ADD_COMMENT, LOAD_COMMENTS } from '../actionTypes';

const initialState = {
  byIds: {},
};

export default function (state = initialState, action) {
  debugger;
  switch (action.type) {
    case LOAD_COMMENTS: {
      const { comments } = action.payload;
      const byIds = {};
      comments.forEach((comment) => {
        const { id, ...newComment } = comment;
        byIds[id] = { comment: newComment.comment };
      });
      return {
        ...state,
        byIds,
      };
    }
    case ADD_COMMENT: {
      const { id, comment } = action.payload;
      return {
        ...state,
        byIds: {
          ...state.byIds,
          [id]: {
            comment,
          },
        },
      };
    }
    default:
      return state;
  }
}
