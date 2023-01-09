import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'http://localhost:3333/claims';

class ClaimsService {
  getClaims(take: string, skip: string) {
    return axios.get(API_URL + `?take=${take}&skip=${skip}`, {headers: authHeader()});
  }
}

export default new ClaimsService();
