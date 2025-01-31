export const BASE_URL = 'http://localhost:3001'

export const register = (name, avatar, email, password) => {
  return fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name, avatar, email, password }),
  }).then(res => {
    return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`)
  })
}

export const authorize = (email, password) => {
  return fetch(`${BASE_URL}/signin`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  }).then(res => {
    return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`)
  })
}
