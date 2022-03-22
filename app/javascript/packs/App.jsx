import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import store from '../redux/store';

import TaskManagerApp from './TaskManagerApp';


document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Provider store={store}>
    <TaskManagerApp/>
	</Provider>,
    document.body.appendChild(document.createElement('div')),
  )
})
