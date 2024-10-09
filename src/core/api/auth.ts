import {environment} from "../config/environment";
import axios, {AxiosError} from "axios";
import {LoginResponse} from "../types/apiResponses/loginResponse";
import {AccountResponse} from "../types/apiResponses/accountResponse";

type AuthApi = {
    loginUserWithEmailAndPassword(email: string, password: string): Promise<LoginResponse>;
    getUserAccount(token: string): Promise<AccountResponse>;
};

export default function useAuthApi(): AuthApi {

    async function loginUserWithEmailAndPassword(email: string, password: string): Promise<LoginResponse> {
        const endpoint = `${environment.api.baseUrl}/login`;

        const body = JSON.stringify({
            email: email,
            password: password
        });

        const config = {headers: {'Content-Type': 'application/json'}}

        try {
            const response = await axios.post<LoginResponse>(endpoint, body, config);
            return response.data;
        } catch (e) {
            const error = e as AxiosError;
            if (error.response) {
                return error.response.data as LoginResponse;
            }
            return {
                success: false,
                error: 'Something went wrong'
            };
        }
    }

    async function getUserAccount(token: string): Promise<AccountResponse> {
        const endpoint = `${environment.api.baseUrl}/account`;

        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': token
            }
        }

        try {
            const response = await axios.get<AccountResponse>(endpoint, config);
            return response.data;
        } catch (e) {
            console.log(e);
            return {success: false};
        }

    }

    return {
        loginUserWithEmailAndPassword,
        getUserAccount
    }
}
