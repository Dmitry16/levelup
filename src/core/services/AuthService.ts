// import axios from "axios";
// import ApiService from "./ApiService";

interface LoginResponse {
  vertical: string;
  token: string; // Adjust this based on actual API response
}

class AuthService {
    // async login(email: string, password: string): Promise<LoginResponse> {
        // const response = await axios.post<LoginResponse>(
        //     "http://localhost:3000/api/auth/login",
        //     { email, password }
        // );
    
        // localStorage.setItem("vertical", response.data.vertical);
    
        // // Prefetch vertical for faster loading
        // import(`../verticals/${response.data.vertical}/App`);
    
        // return response.data;
    // }

    getCustomerVertical(): string | null {
        // return localStorage.getItem("vertical");
        return "health";
    }
}

export default new AuthService();
  