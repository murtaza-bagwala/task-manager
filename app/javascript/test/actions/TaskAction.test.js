import * as taskActions from '../../redux/actions';
import * as actionTypes from '../../redux/actionTypes';

describe('addTaskSuccess', () => {
  it('should create a ADD_TASK action', () => {
    const task = {
    	content: 'cook Meal',
    	id: 1,
    };

    const expected = {
      type: actionTypes.ADD_TASK,
      payload: {
        id: 1,
        content: 'cook Meal',
      },
    };

    const action = taskActions.addTask(task);
    expect(action).toEqual(expected);
  });
});

describe('editTaskSuccess', () => {
  it('should create a EDIT_TASK action', () => {
    const payload = {
      id: 1,
      content: 'cook Meal',
    };
    const expected = {
      type: actionTypes.EDIT_TASK,
      payload,
    };

    const action = taskActions.editTask(payload);
    expect(action).toEqual(expected);
  });
});

describe('deleteTaskSuccess', () => {
  it('should create a DELETE_TASK action', () => {
    const idToBeDeleted = 1;
    const expected = {
      type: actionTypes.DELETE_TASK,
      payload: {
        id: 1,
      },
    };

    const action = taskActions.deleteTask(idToBeDeleted);
    expect(action).toEqual(expected);
  });
});

describe('setFilterSuccess', () => {
  it('should create a SET_FILTER action', () => {
    const filter = 'ALL';
    const expected = {
      type: actionTypes.SET_FILTER,
      payload: {
        filter,
      },
    };

    const action = taskActions.setFilter(filter);
    expect(action).toEqual(expected);
  });
});

describe('setSelectedTaskSuccess', () => {
  it('should create a SET_SELECTED_TASK action', () => {
    const task = {
      id: 1,
      content: 'cook Meal',
    };
    const expected = {
      type: actionTypes.SET_SELECTED_TASK,
      payload: task,
    };

    const action = taskActions.setSelectedTask(task);
    expect(action).toEqual(expected);
  });
});
