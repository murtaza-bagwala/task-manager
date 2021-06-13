import { API_HOST } from '../constants';

export async function create(token, taskId, comment) {
  return fetch(`${API_HOST}/tasks/${taskId}/comments`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Token ${token}`,
    },
    body: JSON.stringify({ comment }),
  }).then((response) => {
    if (response.ok) return response.json();
    throw new Error('Network response was not ok.');
  });
}
