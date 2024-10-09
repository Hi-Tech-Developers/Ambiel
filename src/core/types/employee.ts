import {EmployeeStatus} from "./constants/employeeStatus";

export interface IEmployee {
    employee_id: number;
    employee_name: string;  
    employee_firstname: string;
    employee_lastname: string;
    employee_jobtitle: string;
    employee_gender: string;
    employee_status: string;
    employee_phone: string;
    employee_mobile: string;
    employee_private: string;
    employee_email: string;
    employee_externalno: string;
    employee_codename: string;
    employee_icon_gender: string;
}