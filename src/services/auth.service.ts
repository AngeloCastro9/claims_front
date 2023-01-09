import axios from 'axios';

const API_URL = 'http://localhost:3333/';

class AuthService {
  login(email: string, password: string) {
    return axios
      .post(API_URL + 'auth', {
        email,
        password,
      })
      .then((response) => {
        if (response.data.token) {
          localStorage.setItem('user', JSON.stringify(response.data));
        }

        return response.data;
      });
  }

  logout() {
    localStorage.removeItem('user');
  }

  register(email: string, password: string, name: string) {
    return axios.post(API_URL + 'admin', {
      name,
      email,
      password,
    });
  }

  getCurrentUser() {
    const userStr = localStorage.getItem('user');
    if (userStr) return JSON.parse(userStr);

    return null;
  }
}

export default new AuthService();
