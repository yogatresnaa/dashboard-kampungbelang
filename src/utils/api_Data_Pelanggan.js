import CONFIG from '../globals/config';

async function getForm() {
  const response = await fetch(`${CONFIG.BASE_URL}datacustomer`);
  const responseJson = await response.json();
  return responseJson.data.customers;
}

export { getForm };
