import {IEmployee} from "../employee";

export interface IEmployeesResponse {
    success: boolean;
    employees?: IEmployee[];
    error?: string;
}
