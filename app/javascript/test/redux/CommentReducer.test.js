import * as commentActions from '../../redux/commentActions';
import commentReducer from '../../redux/reducers/comments';

const initialState = {
  byIds: {
    1: {
      comment: 'cook Meal',
    },
    2: {
      comment: 'watch Movie',
    },
  },
};

describe('addCommentReducer', () => {
  it('should create a new comment when passed ADD_COMMENT action is passed', () => {
    const comment = {
    	id: 3,
    	comment: 'will go out later',
    };

    const action = commentActions.addComment(comment);
    const newState = commentReducer(initialState, action);

    expect(newState.byIds[3].content).toEqual(comment.content);
  });
});

describe('LoadCommentsReducer', () => {
  it('should load all the comments when passed LOAD_COMMENTS action is passed', () => {
    const comments = [
      {
        id: 1,
        comment: 'will go out later',
      },
      {
        id: 2,
        comment: 'will fix it ',
      },
      {
        id: 3,
        comment: 'will try',
      },
    ];

    const action = commentActions.loadComments(comments);
    const newState = commentReducer(initialState, action);

    expect(Object.keys(newState.byIds).length).toEqual(comments.length);
  });
});
