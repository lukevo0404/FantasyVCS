import axios from 'axios';
import authHeader from './auth-header';
const API_URL = 'http://localhost:8080/';
class UserService {
  getUser() {
    return axios.get(API_URL + 'api/test/user', { headers: authHeader() });
  }
}
export default new UserService();