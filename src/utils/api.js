import CONFIG from '../globals/config';

function getAccessToken() {
  return localStorage.getItem('accessToken');
}

function putAccessToken(accessToken) {
  return localStorage.setItem('accessToken', accessToken);
}

async function fetchWithToken(url, options = {}) {
  return fetch(url, {
    ...options,
    headers: {
      ...options.headers,
      Authorization: `Bearer ${getAccessToken()}`,
    },
  });
}

async function register({ username, password, fullname }) {
  const response = await fetch(`${CONFIG.BASE_URL}users`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username, password, fullname }),
  });

  const responseJson = await response.json();

  if (responseJson.status !== 'success') {
    alert(responseJson.message);
    return { error: true };
  }
  return { error: false };
}
async function login({ username, password }) {
  const response = await fetch(`${CONFIG.BASE_URL}authentications`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username, password }),
  });

  const responseJson = await response.json();

  if (responseJson.status !== 'success') {
    alert(responseJson.message);
    return { error: true, data: null };
  }
  return { error: false, data: responseJson.data };
}

async function getUserLogged() {
  const id = 'user-vXPfiey6V_cByCff';

  const response = await fetchWithToken(`${CONFIG.BASE_URL}users/${id}`);
  const responseJson = await response.json();

  if (responseJson.status !== 'success') {
    return { error: true, data: null };
  }
  return { error: false, data: responseJson.data };
}

export { register, login, getAccessToken, putAccessToken, getUserLogged, fetchWithToken };
