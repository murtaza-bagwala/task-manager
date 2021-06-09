export async function list(token) {
  return fetch('http://localhost:3001/api/tasks', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Token ${token}`,
    },
  }).then((response) => {
    if (response.ok) return response.json();
    throw new Error('Network response was not ok.');
  });
}

export async function create(token, task) {
  return fetch('http://localhost:3001/api/tasks', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Token ${token}`,
    },
    body: JSON.stringify({ task }),
  }).then((response) => {
    if (response.ok) return response.json();
    throw new Error('Network response was not ok.');
  });
}

export async function update(token, task) {
  debugger;
  return fetch(`http://localhost:3001/api/tasks/${task.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Token ${token}`,
    },
    body: JSON.stringify({ task }),
  }).then((response) => {
    if (response.ok) return response.json();
    throw new Error('Network response was not ok.');
  });
}

export async function destroy(token, taskId) {
  debugger;
  return fetch(`http://localhost:3001/api/tasks/${taskId}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Token ${token}`,
    },
  }).then((response) => {
    if (response.ok) return response.json();
    throw new Error('Network response was not ok.');
  });
}
