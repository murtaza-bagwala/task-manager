import React from 'react';
import { useState } from 'react';
import AddTask from '../components/AddTask';
import Logout from '../components/Logout';
import TaskList from '../components/TaskList';
import VisibilityFilters from '../components/VisibilityFilter';
import './styles.css';

import Login from '../components/Login';

export default function TodoApp() {
	const [token, setToken] = useState();

	if (!token) {
		return <Login setToken={setToken}></Login>;
	}

	if (token) {
		sessionStorage.setItem('token', token);
	}

	return (
		<div className='app'>
			<Logout setToken={setToken} />
			<header>
				<h1>todos</h1>
			</header>
			<div className='app__container'>
				<React.Fragment>
					<AddTask />
					<TaskList />
					<VisibilityFilters />
				</React.Fragment>
			</div>
		</div>
	);
}
