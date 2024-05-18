import CONFIG from '../globals/config';
import { removeAccessToken, removeRefreshToken, getRefreshToken } from '../utils/token';

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

// User Logout
async function logout() {
  try {
    const refreshToken = getRefreshToken();
    const response = await fetch(`${CONFIG.BASE_URL}authentications`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${getRefreshToken()}`,
      },
      body: JSON.stringify({ refreshToken }),
    });
    console.log(response);
    const responseJson = await response.json();
    if (responseJson.status !== 'success') {
      alert(responseJson.message);
      return { error: true };
    }
    // Hapus token dari local storage
    removeAccessToken();
    removeRefreshToken(); // Hapus refresh token
    return { error: false };
  } catch (error) {
    return { error: true, message: error.message };
  }
}

export { register, login, logout };
