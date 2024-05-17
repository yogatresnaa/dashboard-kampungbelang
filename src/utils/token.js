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

function decodeAccessToken(token) {
  try {
    return jwtDecode(token);
  } catch (error) {
    console.error('Invalid token:', error);
    return null;
  }
}

export { getAccessToken, setAccessToken, removeAccessToken, decodeAccessToken };
