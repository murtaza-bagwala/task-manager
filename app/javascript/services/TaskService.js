const API_HOST = 'http://localhost:3000/api';

export async function list(token) {
  return fetch(`${API_HOST}/tasks`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Token ${token}`,
    },
  }).then((response) => {
    if (response.ok) return response.json();
    throw response;
  });
}

export async function create(token, task) {
  return fetch(`${API_HOST}/tasks`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Token ${token}`,
    },
    body: JSON.stringify({ task }),
  }).then((response) => {
    if (response.ok) return response.json();
    throw response;
  });
}

export async function update(token, task) {
  debugger;
  return fetch(`${API_HOST}/tasks/${task.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Token ${token}`,
    },
    body: JSON.stringify({ task }),
  }).then((response) => {
    if (response.ok) return response.json();
    throw response;
  });
}

export async function destroy(token, taskId) {
  debugger;
  return fetch(`${API_HOST}/tasks/${taskId}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Token ${token}`,
    },
  }).then((response) => {
    if (response.ok) return response.json();
    throw response;
  });
}
