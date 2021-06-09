export async function loginUser(credentials) {
  return fetch('http://localhost:3001/api/users/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ user: credentials }),
  }).then((data) => data.json());
}

export async function registerUser(credentials) {
  return fetch('http://localhost:3001/api/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ user: credentials }),
  }).then((data) => data.json());
}
