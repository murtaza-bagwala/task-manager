import * as attachmentActions from '../../redux/attachmentActions';
import attachmentReducer from '../../redux/reducers/attachments';

const initialState = {
  byIds: {
    1: {
      name: 'file.jpg',
      url: '',
    },
    2: {
      name: 'file.pdf',
      url: '',
    },
  },
};

describe('addAttachmentReducer', () => {
  it('should create a new attachment when passed ADD_ATTACHMENT action is passed', () => {
    const attachment = {
    	id: 3,
    	name: 'file.png',
      url: '',
    };

    const action = attachmentActions.addAttachment(attachment);
    const newState = attachmentReducer(initialState, action);

    expect(newState.byIds[3].name).toEqual(attachment.name);
  });
});

describe('loadAttachmentsReducer', () => {
  it('should load all the attachments when passed LOAD_ATTACHMENTS action is passed', () => {
    const attachments = [
      {
        id: 1,
        name: 'file.png',
        url: '',
      },
      {
        id: 2,
        name: 'file.jpg',
        url: '',
      },
      {
        id: 3,
        name: 'file.pdf',
        url: '',
      },
    ];

    const action = attachmentActions.loadAttachments(attachments);
    const newState = attachmentReducer(initialState, action);

    expect(Object.keys(newState.byIds).length).toEqual(attachments.length);
  });
});
