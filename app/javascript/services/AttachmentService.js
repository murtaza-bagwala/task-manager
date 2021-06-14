import { API_HOST } from '../constants';

export async function create(token, taskId, attachment) {
  const formData = new FormData();
  formData.append('name', attachment);
  return fetch(`${API_HOST}/tasks/${taskId}/attachments`, {
    method: 'POST',
    headers: {
      Authorization: `Token ${token}`,
    },
    body: formData,
  }).then((response) => {
    if (response.ok) return response.json();
    throw response;
  });
}
