import { IEmployeesResponse } from '../types/apiResponses/employeesResponse';
import { environment } from '../config/environment';
import { Alert } from 'react-native';
import axios from 'axios';

type EmployeeApi = {
  getAllEmployees(token: string): Promise<IEmployeesResponse>;
};

export default function useEmployeeApi(): EmployeeApi {
  /** Get all Employees **/
  async function getAllEmployees(token: string): Promise<IEmployeesResponse> {
    const endpoint = `${environment.api.baseUrl}/employees`;

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: token,
      },
    };
    try {
      const response = await axios.get<IEmployeesResponse>(endpoint, config);
      return response.data;
    } catch (e) {
      Alert.alert('error');
      Alert.alert(e);
      console.log(e);
      return { success: false };
    }
  }

  return {
    getAllEmployees,
  };
}
