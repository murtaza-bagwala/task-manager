import { ADD_ATTACHMENT, LOAD_ATTACHMENTS } from '../actionTypes';

const initialState = {
  byIds: {},
};

export default function (state = initialState, action) {
  debugger;
  switch (action.type) {
    case LOAD_ATTACHMENTS: {
      const { attachments } = action.payload;
      const byIds = {};
      attachments.forEach((attachments) => {
        const { id, ...newAttachment } = attachments;
        byIds[id] = { name: newAttachment.name, url: newAttachment.url };
      });
      return {
        ...state,
        byIds,
      };
    }
    case ADD_ATTACHMENT: {
      const { id, name, url } = action.payload;
      return {
        ...state,
        byIds: {
          ...state.byIds,
          [id]: {
            name,
            url,
          },
        },
      };
    }
    default:
      return state;
  }
}
