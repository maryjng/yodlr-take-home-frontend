import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3001";

class Api {

    static async request(endpoint, data = {}, method = "get") {
        console.debug("API Call:", endpoint, data, method);

        const url = `${BASE_URL}/${endpoint}`;
        const params = (method === "get")
            ? data
            : {};    

        try {
            return (await axios({ url, method, data, params })).data;
            } catch (err) {
            console.error("API Error:", err.response);
            let message = err.response.data.error.message;
            throw Array.isArray(message) ? message : [message];
            }
        }

    //API ROUTES

    //REGISTER
    static async register(data) {
        let res = await this.request(`users`, { data }, "post");
        return res;
    }

    //GET ALL USERS - FOR ADMIN
    static async getAllUsers() {
        let res = await this.request(`users`)
        console.log(res.users)
        return res.users;
    }

    //GET USER
    static async getUser(user_id) {
        let res = await this.request(`users/${user_id}`)
        return res;
    }

    //PATCH USER
    static async updateUser(user_id) {
        let res = await this.request(`users/${user_id}`, "patch")
        return res;
    }

    //DELETE USER
    static async deleteUser(user_id) {
        let res = await this.request(`users/${user_id}`, "delete")
        return res;
    }

}

export default Api;