import * as taskActions from '../../redux/actions';
import taskReducer from '../../redux/reducers/tasks';
import visibilityFilterReducer from '../../redux/reducers/visibilityFilter';

let initialState = {
  byIds: {
    2: {
      completed: false,
      content: 'cook Meal',
      comments: [],
    },
    3: {
      completed: false,
      content: 'watch Movie',
      comments: [],
    },
  },
  allIds: [2, 3],
  selectedTask: {
  	comments: [],
  },

};

describe('addTaskReducer', () => {
  it('should create a new task when passed ADD_TASK action is passed', () => {
    const task = {
    	id: 1,
    	content: 'go out',
    };

    const action = taskActions.addTask(task);
    const newState = taskReducer(initialState, action);

    initialState = newState;

    expect(newState.allIds.length).toEqual(3);
    expect(newState.byIds[1].content).toEqual(task.content);
  });
});

describe('editTaskReducer', () => {
  it('should edit an existing task when EDIT_TASK action is passed', () => {
    const payload = {
      id: 1,
      content: 'wash cloth',
      deadline: '2021-06-01T10:30',
      completed: true,
    };

    const action = taskActions.editTask(payload);
    const newState = taskReducer(initialState, action);

    initialState = newState;

    expect(newState.byIds[1].content).toEqual(payload.content);
    expect(newState.byIds[1].deadline).toEqual(payload.deadline);
    expect(newState.byIds[1].completed).toEqual(payload.completed);
  });
});

describe('deleteTaskReducer', () => {
  it('should delete an exisiting task when a DELETE_TASK action is passed', () => {
    const idToBeDeleted = 1;

    const action = taskActions.deleteTask(idToBeDeleted);
    const newState = taskReducer(initialState, action);

    initialState = newState;

    expect(newState.byIds[1]).toEqual(undefined);
    expect(newState.allIds.length).toEqual(2);
  });
});

describe('setFilterReducer', () => {
  it('should filter a list when SET_FILTER action is passed', () => {
    const filter = 'incomplete';

    const action = taskActions.setFilter(filter);

    const newState = visibilityFilterReducer(initialState, action);

    expect(newState).toEqual(filter);
  });
});

describe('setSelectedTaskReducer', () => {
  it('should select the task as current task when SET_SELECTED_TASK action is passed', () => {
    const task = {
      id: 2,
      content: 'cook Meal',
    };

    const action = taskActions.setSelectedTask(task);

    const newState = taskReducer(initialState, action);

    expect(newState.selectedTask).toEqual(task);
  });
});

describe('addCommentToTaskReducer', () => {
  it('should add the created comment id to the current task when ADD_COMMENT_TO_TASK action is passed', () => {
    const taskId = 2;
    const commentId = 1;

    const action = taskActions.addCommentToTask(taskId, commentId);

    const newState = taskReducer(initialState, action);

    expect(newState.byIds[taskId].comments.length).toEqual(1);
    expect(newState.byIds[taskId].comments[0]).toEqual(commentId);
  });
});
