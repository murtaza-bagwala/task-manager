import { combineReducers } from 'redux';
import visibilityFilter from './visibilityFilter';
import tasks from './tasks';
import comments from './comments';
import attachments from './attachments';

export default combineReducers({
  tasks, visibilityFilter, comments, attachments,
});
