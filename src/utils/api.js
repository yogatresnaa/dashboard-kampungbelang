import CONFIG from '../globals/config';
import { jwtDecode } from 'jwt-decode';

// Token Management
function getAccessToken() {
  return localStorage.getItem('accessToken');
}
function setAccessToken(accessToken) {
  return localStorage.setItem('accessToken', accessToken);
}
function removeAccessToken() {
  return localStorage.removeItem('accessToken');
}

// Fetch with Token
async function fetchWithToken(url, options = {}) {
  return fetch(url, {
    ...options,
    headers: {
      ...options.headers,
      Authorization: `Bearer ${getAccessToken()}`,
    },
  });
}

// User Registration
async function register({ username, password, fullname }) {
  try {
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
  } catch (error) {
    return { error: true, message: error.message };
  }
}

// User Login
async function login({ username, password }) {
  try {
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
  } catch (error) {
    return { error: true, message: error.message, data: null };
  }
}

// Get Logged User
async function getUserLogged() {
  const token = getAccessToken();
  if (!token) {
    return { error: true, message: 'Access token not found in local storage.' };
  }
  const decodedToken = decodeAccessToken(token);
  if (!decodedToken) {
    return { error: true, message: 'Invalid access token.' };
  }
  const userId = decodedToken.id;
  if (!userId) {
    return { error: true, message: 'User ID not found in token.' };
  }
  // =====================

  try {
    const response = await fetchWithToken(`${CONFIG.BASE_URL}users/${userId}`);
    const responseJson = await response.json();
    if (responseJson.status !== 'success') {
      return { error: true, message: responseJson.message || 'Error fetching user data.' };
    }
    return { error: false, data: responseJson.data };
  } catch (error) {
    return { error: true, message: error.message || 'Network error occurred.' };
  }
}

// User Logout
async function logout() {
  try {
    const response = await fetch(`${CONFIG.BASE_URL}authentications`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${getAccessToken()}`,
      },
    });

    const responseJson = await response.json();

    if (responseJson.status !== 'success') {
      alert(responseJson.message);
      return { error: true };
    }
    // Hapus token dari local storage
    removeAccessToken();

    return { error: false };
  } catch (error) {
    return { error: true, message: error.message };
  }
}

// Decode Access Token
function decodeAccessToken(token) {
  try {
    return jwtDecode(token);
  } catch (error) {
    console.error('Invalid token:', error);
    return null;
  }
}

export { register, login, getAccessToken, setAccessToken, getUserLogged, fetchWithToken, logout };
