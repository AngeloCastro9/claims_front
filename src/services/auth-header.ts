export default function authHeader() {
  const userStr = localStorage.getItem('user');
  let user = null;
  if (userStr) user = JSON.parse(userStr);

  if (user && user.token) {
    return {'x-access-token': user.token}; // for Node.js Express back-end
  } else {
    return {'x-access-token': null}; // for Node Express back-end
  }
}
