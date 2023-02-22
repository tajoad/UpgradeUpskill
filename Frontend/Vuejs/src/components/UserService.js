export class UserService {
    static users = [];

    static submitAllUsers() {
        let dataUrl = 'http://localhost:3002/login';
        return axios.get(dataUrl);
    }
    
}