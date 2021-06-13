import * as commentActions from '../../redux/commentActions';
import * as actionTypes from '../../redux/actionTypes';

describe('addCommentSuccess', () => {
  it('should create a ADD_COMMENT action', () => {
    const comment = {
    	comment: 'cook Meal',
    	id: 1,
    };

    const expected = {
      type: actionTypes.ADD_COMMENT,
      payload: {
        id: 1,
        comment: 'cook Meal',
      },
    };

    const action = commentActions.addComment(comment);
    expect(action).toEqual(expected);
  });
});
