import CONFIG from '../globals/config';
import { getAccessToken, decodeAccessToken } from '../utils/token';
import fetchWithToken from './fetchWithToken';

function getUserIdFromToken() {
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
  return userId;
}

async function getUserLogged() {
  try {
    const userId = getUserIdFromToken();
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

export { getUserLogged };
