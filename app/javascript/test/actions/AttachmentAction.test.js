import * as attachmentActions from '../../redux/attachmentActions';
import * as actionTypes from '../../redux/actionTypes';

describe('addAttachmentSuccess', () => {
  it('should create a ADD_ATTACHMENT action', () => {
    const attachment = {
    	id: 1,
      name: 'file.jpg',
      url: '',
    };

    const expected = {
      type: actionTypes.ADD_ATTACHMENT,
      payload: {
        id: 1,
        name: 'file.jpg',
        url: '',
      },
    };

    const action = attachmentActions.addAttachment(attachment);
    expect(action).toEqual(expected);
  });
});
